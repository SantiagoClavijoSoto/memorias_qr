import "@testing-library/jest-dom/vitest";

class IntersectionObserverMock implements IntersectionObserver {
  readonly root: Element | Document | null = null;
  readonly rootMargin: string = "0px";
  readonly thresholds: ReadonlyArray<number> = [];

  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
  unobserve() {}
}

if (!("IntersectionObserver" in window)) {
  // @ts-expect-error - injecting test polyfill
  window.IntersectionObserver = IntersectionObserverMock;
}

if (!window.scrollTo) {
  // @ts-expect-error - jsdom fallback
  window.scrollTo = () => {};
}
