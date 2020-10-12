import { createPopper } from '@popperjs/core';

function createPopperElement(link) {
  const popcorn = document.querySelector(`#${link}`);
  const tooltip = document.querySelector(`#${link}-tooltip`);

  createPopper(popcorn, tooltip, {
    placement: 'top'
  });
};

export default createPopperElement;