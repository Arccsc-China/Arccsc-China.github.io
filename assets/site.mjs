import { entries, searchEntries } from './archive-data.mjs';

const root = document.documentElement;
const archiveDialog = document.querySelector('#archive-dialog');
const projectDialog = document.querySelector('#project-dialog');
const searchInput = document.querySelector('#archive-search');
const results = document.querySelector('#search-results');
const searchStatus = document.querySelector('#search-status');
const themeToggle = document.querySelector('#theme-toggle');
const motionToggle = document.querySelector('#motion-toggle');
const mediaMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const focusOrigins = new WeakMap();
let category = 'all';
let motionPreference;

function savedPreference(key) {
  try { return localStorage.getItem(key); } catch { return null; }
}
function savePreference(key, value) {
  try { localStorage.setItem(key, value); } catch { /* Preferences remain usable for this visit. */ }
}
function setTheme(theme) {
  root.dataset.theme = theme;
  themeToggle.setAttribute('aria-pressed', String(theme === 'dark'));
  themeToggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#141b1e' : '#eae5e1';
}
function setMotion(preference) {
  const reduced = preference ? preference === 'reduced' : mediaMotion.matches;
  root.dataset.motion = reduced ? 'reduced' : 'full';
  motionToggle.textContent = reduced ? 'MOTION OFF' : 'MOTION ON';
  motionToggle.setAttribute('aria-pressed', String(reduced));
  motionToggle.setAttribute('aria-label', reduced ? 'Enable motion' : 'Reduce motion');
}
setTheme(savedPreference('sz-theme') === 'dark' ? 'dark' : 'light');
motionPreference = savedPreference('sz-motion');
setMotion(motionPreference);
themeToggle.addEventListener('click', () => {
  const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(theme);
  savePreference('sz-theme', theme);
});
motionToggle.addEventListener('click', () => {
  motionPreference = root.dataset.motion === 'reduced' ? 'full' : 'reduced';
  setMotion(motionPreference);
  savePreference('sz-motion', motionPreference);
});
mediaMotion.addEventListener('change', () => { if (!motionPreference) setMotion(null); });

function lockPage() {
  document.body.style.overflow = document.querySelector('dialog[open]') ? 'hidden' : '';
}
function openDialog(dialog, focusTarget) {
  if (dialog.open) return;
  focusOrigins.set(dialog, document.activeElement);
  dialog.showModal();
  lockPage();
  focusTarget?.focus({ preventScroll: true });
}
function textElement(tag, text, className) {
  const element = document.createElement(tag);
  element.textContent = text;
  if (className) element.className = className;
  return element;
}
function renderSearch() {
  const matches = searchEntries(searchInput.value, category);
  results.replaceChildren();
  searchStatus.textContent = `${String(matches.length).padStart(2, '0')} ${matches.length === 1 ? 'RECORD' : 'RECORDS'} FOUND`;
  if (!matches.length) {
    results.append(textElement('p', 'No matching records. Try a topic such as robotics, vision or learning.', 'empty-search'));
    return;
  }
  for (const entry of matches) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'search-result';
    button.dataset.project = entry.id;
    const sameCategory = entries.filter(item => item.category === entry.category);
    const number = String(sameCategory.indexOf(entry) + 1).padStart(2, '0');
    button.append(textElement('span', `${entry.category === 'research' ? 'R' : 'P'}—${number}`, 'mono'));
    const label = document.createElement('span');
    label.append(textElement('strong', entry.shortTitle), textElement('small', [entry.kind, entry.year].filter(Boolean).join(' / ')));
    button.append(label, textElement('span', '↗'));
    button.setAttribute('aria-label', `Read ${entry.title}`);
    results.append(button);
  }
}
function openProject(id) {
  const entry = entries.find(item => item.id === id);
  if (!entry) return;
  document.querySelector('#project-label').textContent = `${entry.category.toUpperCase()} / ${entry.id.toUpperCase()}`;
  document.querySelector('#project-kind').textContent = [entry.kind, entry.year].filter(Boolean).join(' / ').toUpperCase();
  const title = document.querySelector('#project-title');
  title.textContent = entry.title;
  const image = document.querySelector('#project-image');
  image.src = entry.image;
  image.alt = entry.imageAlt;
  image.classList.toggle('animated-media', /\.gif$/i.test(entry.image));
  document.querySelector('#project-tags').replaceChildren(...entry.tags.map(tag => textElement('span', tag)));
  document.querySelector('#project-paragraphs').replaceChildren(...entry.paragraphs.map(paragraph => textElement('p', paragraph)));
  const links = entry.links.map(({ label, href }) => {
    const link = textElement('a', `${label} ↗`);
    link.href = href;
    link.target = '_blank';
    link.rel = 'noopener';
    return link;
  });
  document.querySelector('#project-links').replaceChildren(...links);
  projectDialog.scrollTop = 0;
  openDialog(projectDialog, title);
}
for (const dialog of [archiveDialog, projectDialog]) {
  dialog.addEventListener('close', () => {
    lockPage();
    const origin = focusOrigins.get(dialog);
    if (origin?.isConnected) origin.focus({ preventScroll: true });
  });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
}
document.addEventListener('click', event => {
  const target = event.target.closest('button');
  if (!target) return;
  if (target.matches('[data-index-open]')) {
    renderSearch();
    openDialog(archiveDialog, searchInput);
  } else if (target.matches('[data-project]')) {
    openProject(target.dataset.project);
  } else if (target.matches('.close-dialog')) {
    target.closest('dialog').close();
  } else if (target.matches('[data-category]')) {
    category = target.dataset.category;
    document.querySelectorAll('[data-category]').forEach(button => button.setAttribute('aria-pressed', String(button === target)));
    renderSearch();
  }
});
searchInput.addEventListener('input', renderSearch);
const mobileMenu = document.querySelector('.mobile-menu');
mobileMenu.addEventListener('click', event => {
  if (event.target.closest('a')) mobileMenu.open = false;
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    const openDialogs = [...document.querySelectorAll('dialog[open]')];
    const activeDialog = openDialogs.at(-1);
    if (activeDialog) {
      event.preventDefault();
      activeDialog.close();
    } else if (mobileMenu.open) {
      mobileMenu.open = false;
      mobileMenu.querySelector('summary').focus();
    }
    return;
  }
  if (event.key !== '/' || event.ctrlKey || event.metaKey || event.altKey) return;
  const active = document.activeElement;
  if (active?.matches('input, textarea, select, [contenteditable]') || document.querySelector('dialog[open]')) return;
  event.preventDefault();
  renderSearch();
  openDialog(archiveDialog, searchInput);
});

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(items => {
    items.forEach(item => {
      if (!item.isIntersecting) return;
      item.target.classList.add('is-visible');
      revealObserver.unobserve(item.target);
    });
  }, { rootMargin: '0px 0px -30px 0px', threshold: 0.05 });
  document.querySelectorAll('.reveal').forEach(element => {
    element.classList.add('reveal-pending');
    revealObserver.observe(element);
  });
  const navigation = [...document.querySelectorAll('.main-nav a')];
  const sectionObserver = new IntersectionObserver(items => {
    for (const item of items) {
      if (!item.isIntersecting) continue;
      navigation.forEach(link => {
        if (link.hash === `#${item.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }
  }, { rootMargin: '-15% 0px -60% 0px', threshold: 0 });
  document.querySelectorAll('.section-observe').forEach(section => sectionObserver.observe(section));
}
document.body.classList.add('interactive');
