import contact from './contact-us.twig';
import contactData from './contact-us.yml';

import './contact-us.scss';
/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Contact-us' };
export const contactUs = () => contact(contactData);
