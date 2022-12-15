import smoothScrollIntoView from 'smooth-scroll-into-view-if-needed';

/**
 * Scroll until a ref is at the top of the window
 */
export function scrollToRef(ref: React.RefObject<any>, offset = 0) {
  if (ref?.current) {
    window.scrollTo(0, ref.current.offsetTop - offset);
  }
}

export const scrollIntoView = (element: HTMLElement, noSmoothScroll?: boolean) => {
  if (noSmoothScroll) {
    cancelAnimationFrames();
    element.scrollIntoView();
  } else {
    smoothScrollIntoView(element, {
      block: 'start',
      ease: (t) => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1),
      duration: 350,
    });
  }
};

/**
 * Cancel any animation frames that are currently running, so that if we jump to a different
 * step while a form group is still scrolling it won't cause any strange behaviour like
 * making the form groups on the new step finish off the scrolling animation.
 *
 * Reference: https://stackoverflow.com/questions/52285581/cancel-all-currently-running-requestanimationframes
 */
const cancelAnimationFrames = () => {
  let id = requestAnimationFrame(() => {});
  while (id--) {
    cancelAnimationFrame(id);
  }
};
