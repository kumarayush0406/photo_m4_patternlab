import link from './link.twig';
import linkCta from './cta-with-link/cta-with-link.twig';

import linkData from './link.yml';
import linkCtaData from './cta-with-link/cta-with-link.yml';

import './cta-with-link/cta-with-link.scss';
/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Links' };

export const links = () => link(linkData);
export const Cta = () => linkCta(linkCtaData);
