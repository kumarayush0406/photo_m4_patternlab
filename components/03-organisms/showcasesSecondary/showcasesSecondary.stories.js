import showcaseS from './showcasesSecondary.twig';
import showcaseSData from './showcasesSecondary.yml';

// import './plan.scss';
/**
 * Storybook Definition.
 */
export default { title: 'organisms/ShowcaseSecondary' };
export const ShowcaseSecondary = () => showcaseS(showcaseSData);
