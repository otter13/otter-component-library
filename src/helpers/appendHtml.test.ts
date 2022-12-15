import { createElement, removeElement } from './appendHtml';

test('should create and remove elements from the html', () => {
  const testDiv = 'testDiv';
  expect(document.getElementById(testDiv)).toBeFalsy();
  createElement(testDiv);
  expect(document.getElementById(testDiv)).toBeTruthy();
  removeElement(testDiv);
  expect(document.getElementById(testDiv)).toBeFalsy();
});
