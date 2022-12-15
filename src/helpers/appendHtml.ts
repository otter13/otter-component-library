import { unmountComponentAtNode } from 'react-dom';

export function createElement(divIdName: string) {
  let element = document.getElementById(divIdName);
  if (!element) {
    element = document.createElement('div');
    element.id = divIdName;
    document.body.appendChild(element);
  }
  return element;
}

export function removeElement(divIdName: string) {
  const element = document.getElementById(divIdName) as Element;
  if (element && element.parentNode) {
    unmountComponentAtNode(element);
    element.parentNode.removeChild(element);
  }
}
