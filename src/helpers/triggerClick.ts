export const triggerClick = (
  eventKeyCode: number,
  elementRef: HTMLInputElement | HTMLDivElement | HTMLLabelElement | null,
  keyCode: number
) => {
  if (keyCode === eventKeyCode) {
    elementRef?.click();
  }
};
