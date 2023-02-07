import navbars from './navbar.twig';
import navbarData from './navbar.yml';
import './navbar.scss';
import './navbar';
/**
 * Storybook Definition.
 */
export default { title: 'organisms/M4-header' };
export const navbar = () => navbars(navbarData);
