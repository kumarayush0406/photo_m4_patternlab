import customPlantitle from './plan-title.twig';
import customPlantitleData from './plan-title.yml';

// import './plan-title.scss';
/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Plan-title' };
export const PlanTitle = () => customPlantitle(customPlantitleData);
