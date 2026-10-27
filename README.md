# Shuyan Zhang — Personal Research Archive

A buildless personal website for GitHub Pages, featuring research, engineering projects, publications, artwork, and academic background.

## Preview and test

From this directory, start a local HTTP server:

```sh
python3 -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000). Use the HTTP server so the browser can load the JavaScript modules.

Run the archive search and local asset tests with a current Node.js release:

```sh
node --test --test-isolation=none tests/archive.test.mjs
```

## Source files

- `index.html`: readable page content, navigation, project cards, publication citations, artwork, and dialog structure.
- `assets/site.css`: layout, responsive styles, themes, and motion preferences.
- `assets/site.mjs`: archive search, filters, project dialogs, active navigation, and saved preferences.
- `assets/archive-data.mjs`: the nine research and project records, expanded descriptions, links, and search function.
- `tests/archive.test.mjs`: search behavior, archive completeness, and local asset/link checks.

When changing research or project content, update both the static HTML and the corresponding archive data so cards, details, and search stay consistent. Keep essential content and links available without JavaScript.

## Assets and visual reference

`assets/signature-logo.png` is the user's original transparent signature logo; its appearance is recoloured through CSS. The existing user-provided images, PDFs, CV, and video remain in `images/`, `docs/`, and `video/`.

The visual direction is inspired by [RhineLabUI](https://github.com/LBEILC/RhineLabUI). No original RhineLabUI code or assets were copied.

## Deployment

GitHub Pages publishes the root of the `main` branch at [arccsc-china.github.io](https://arccsc-china.github.io/). The `.nojekyll` file serves this buildless site directly. Push an update to `main` to trigger deployment.
