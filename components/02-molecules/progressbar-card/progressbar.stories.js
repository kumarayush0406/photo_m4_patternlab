import progress from './progressbar-card.twig';
import progressData from './progressbar-card.yml';

/**
 * Storybook Definition.
 */
export default { title: 'molecules/ProgressBarCard' };
export const ProgressBarCard = () => progress(progressData);
