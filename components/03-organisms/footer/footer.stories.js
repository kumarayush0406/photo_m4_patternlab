import footers from './footer.twig';
import footerData from './footer.yml';

import './footer.scss';
/**
 * Storybook Definition.
 */
export default { title: 'organisms/Footer' };
export const footer = () => footers(footerData);
