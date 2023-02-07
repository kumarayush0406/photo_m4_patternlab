import progressbar from './progressbar.twig';

import progressbarData from './progressbar.yml';

import './progressbar.scss';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Progressbar' };

export const Progressbar = () => progressbar(progressbarData);
