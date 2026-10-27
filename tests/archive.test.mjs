import assert from 'node:assert/strict';
import { stat } from 'node:fs/promises';
import test from 'node:test';

let archive;
let moduleLoadError;
try {
  archive = await import('../assets/archive-data.mjs');
} catch (error) {
  moduleLoadError = error;
}

const siteRoot = new URL('../', import.meta.url);
const ids = (results) => results.map((entry) => entry.id);
const available = { skip: !archive };

test('archive data and search are available to the site and Node', () => {
  assert.ok(archive, `Archive module must load: ${moduleLoadError?.message ?? ''}`);
  assert.ok(Array.isArray(archive.entries));
  assert.equal(typeof archive.searchEntries, 'function');
});

test('an empty search preserves all nine archive entries in display order', available, () => {
  assert.deepEqual(ids(archive.searchEntries('')), [
    'hri', 'workflow', 'vision', 'multi-robot', 'federated',
    'leo', 'flight', 'lidar', 'sustainability',
  ]);
  assert.equal(new Set(ids(archive.entries)).size, 9);
});

test('search ignores letter case and normalises surrounding and repeated whitespace', available, () => {
  assert.deepEqual(ids(archive.searchEntries('\n  eMg\t vaRIATIonAL  ')), ['hri']);
  assert.equal(archive.searchEntries('  \t\n ').length, 9);
});

test('every search token must occur, including tokens in different text fields', available, () => {
  assert.deepEqual(ids(archive.searchEntries('workflow shortcuts')), ['workflow']);
  assert.deepEqual(ids(archive.searchEntries('2025 thesis')), ['hri']);
  assert.deepEqual(ids(archive.searchEntries('workflow lidar')), []);
});

test('search includes detailed contributions and topic tags', available, () => {
  assert.deepEqual(ids(archive.searchEntries('cross-subject')), ['hri']);
  assert.deepEqual(ids(archive.searchEntries('computer vision')), ['vision']);
});

test('category filters work with empty and nonempty queries', available, () => {
  assert.deepEqual(ids(archive.searchEntries('', 'research')), [
    'hri', 'workflow', 'vision', 'multi-robot', 'federated',
  ]);
  assert.deepEqual(ids(archive.searchEntries('', 'projects')), [
    'leo', 'flight', 'lidar', 'sustainability',
  ]);
  assert.deepEqual(ids(archive.searchEntries('control', 'projects')), ['flight']);
  assert.deepEqual(ids(archive.searchEntries('control', 'research')), ['multi-robot']);
});

test('unmatched queries and unknown categories produce no results', available, () => {
  assert.deepEqual(archive.searchEntries('unfindablequartz'), []);
  assert.deepEqual(archive.searchEntries('', 'publications'), []);
  assert.deepEqual(archive.searchEntries('workflow', 'publications'), []);
});

test('all cards have real local images and every local action resolves to a file', available, async () => {
  for (const entry of archive.entries) {
    assert.ok(entry.imageAlt.trim(), `${entry.id} needs descriptive image text`);
    assert.ok((await stat(new URL(entry.image, siteRoot))).isFile(), `${entry.id} image must exist`);
    for (const link of entry.links) {
      assert.ok(link.label.trim(), `${entry.id} action needs a label`);
      assert.ok(link.href.trim(), `${entry.id} action must not have an empty destination`);
      if (!/^https?:\/\//.test(link.href)) {
        assert.ok((await stat(new URL(link.href, siteRoot))).isFile(), `${entry.id}: ${link.href} must exist`);
      }
    }
  }
});

test('Leo Rover provides its existing demonstration and flight control has no empty video action', available, () => {
  const leo = archive.entries.find((entry) => entry.id === 'leo');
  const flight = archive.entries.find((entry) => entry.id === 'flight');
  assert.ok(leo.links.some((link) => link.href === 'video/Leo-Rover-demo.mp4'));
  assert.ok(flight.links.every((link) => link.href.trim()));
});
