import about from './about.twig';
import aboutData from './about.yml';

import './about.scss';
/**
 * Storybook Definition.
 */
export default { title: 'Molecules/About' };
export const About = () => about(aboutData);
