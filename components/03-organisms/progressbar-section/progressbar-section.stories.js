import progresssection from './progressbar-section.twig';
import progresssectionData from './progressbar-section.yml';
import './progressbar-section.scss';
import './progressbar';

/**
 * Storybook Definition.
 */
export default { title: 'organisms/ProgressBarSection' };
export const ProgressBarSection = () => progresssection(progresssectionData);
