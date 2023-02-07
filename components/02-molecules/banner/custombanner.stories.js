import custombanner from './custombanner.twig';
import custombannerData from './custombanner.yml';

import './custombanner.scss';
/**
 * Storybook Definition.
 */
export default { title: 'Molecules/M4-banner' };
export const custombanners = () => custombanner(custombannerData);
