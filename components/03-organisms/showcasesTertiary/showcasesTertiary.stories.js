import showcaseT from './showcasesTertiary.twig';
import showcaseTData from './showcasesTertiary.yml';

// import './plan.scss';
/**
 * Storybook Definition.
 */
export default { title: 'organisms/ShowcaseTertiary' };
export const ShowcaseTertiary = () => showcaseT(showcaseTData);
