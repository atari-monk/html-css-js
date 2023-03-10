export class View {
  _filterOne(data, filter) {
    return data.filter((item) => item.type === filter)[0];
  }

  _getParentElement(templateName, selector) {
    const template = document.getElementById(templateName);
    return template.content.querySelector(selector);
  }

  _getNewParent(parentElement) {
    return document.importNode(parentElement, true);
  }

  _templateText(element, selector, template, data) {
    const childEl = element.querySelector(selector);
    childEl.textContent = childEl.textContent.replace(
      new RegExp(`{%${template.toUpperCase()}%}`),
      data
    );
  }

  _setAttribute(data, propName, element, attributeName) {
    if (data.hasOwnProperty(propName) === false) return;
    element.setAttribute(attributeName, data[propName]);
  }
}
