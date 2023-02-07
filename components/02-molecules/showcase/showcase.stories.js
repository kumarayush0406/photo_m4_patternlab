import customshowcase from './showcase.twig';
import customshowcaseSM from './showcase-box-sm/showcase-box-sm.twig';
import customshowcaseLG from './showcase-box-lg/showcase-box-lg.twig';
import customshowcaseExpand from './showcase-box-expand/showcase-box-expand.twig';
import customshowcaseData from './showcase.yml';
import customshowcaseDataSM from './showcase-box-sm/showcase-box-sm.yml';
import customshowcaseDataLG from './showcase-box-lg/showcase-box-lg.yml';
import customshowcaseDataExpand from './showcase-box-expand/showcase-box-expand.yml';

import './showcase.scss';
/**
 * Storybook Definition.
 */
export default { title: 'Molecules/M4-showcase' };
export const showcase = () => customshowcase(customshowcaseData);
export const showcaseSM = () => customshowcaseSM(customshowcaseDataSM);
export const showcaseLG = () => customshowcaseLG(customshowcaseDataLG);
export const showcaseExpand = () =>
  customshowcaseExpand(customshowcaseDataExpand);
