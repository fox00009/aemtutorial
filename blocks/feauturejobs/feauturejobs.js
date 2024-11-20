import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the feauturejobs
 * @param {Element} block The feauturejobs block element
 */
export default async function decorate(block) {
  // load feauturejobs as fragment
  const footerMeta = getMetadata('feauturejobs');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/feauturejobs';
  const fragment = await loadFragment(footerPath);

  // decorate feauturejobs DOM
  block.textContent = '';
  const feauturejobs = document.createElement('div');
  while (fragment.firstElementChild) feauturejobs.append(fragment.firstElementChild);

  block.append(feauturejobs);
}
