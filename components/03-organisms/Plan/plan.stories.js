import plan from './plan.twig';
import planData from './plan.yml';

import './plan.scss';
/**
 * Storybook Definition.
 */
export default { title: 'organisms/Plan' };
export const Plans = () => plan(planData);
