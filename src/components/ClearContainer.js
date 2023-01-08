export function clearOutContainer(element) {
  while (element.firstElementChild) {
    element.firstElementChild.remove();
  }
}
