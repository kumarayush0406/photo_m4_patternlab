import customPlancard from './plan-card.twig';
import customPlancardData from './plan-card.yml';

import './plan-card.scss';
/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Plan-Card' };
export const Plancards = () => customPlancard(customPlancardData);
