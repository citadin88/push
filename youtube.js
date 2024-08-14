function simulateClick(element) {
  const clickEvent = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window,
    detail: 0,
    buttons: 1,
    clientX: 0,
    clientY: 0,
    ctrlKey: false,
    metaKey: false,
    altKey: false,
    shiftKey: false
  });
  clickEvent.isTrusted = true; // Set isTrusted to true
  element.dispatchEvent(clickEvent);
}
