import showcaseP from './showcasesPrimary.twig';
import showcasePData from './showcasesPrimary.yml';

// import './plan.scss';
/**
 * Storybook Definition.
 */
export default { title: 'organisms/ShowcasePrimary' };
export const ShowcasePrimary = () => showcaseP(showcasePData);
