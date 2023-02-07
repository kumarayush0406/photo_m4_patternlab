import collages from './collage.twig';
import collageData from './collage.yml';

import './collage.scss';
/**
 * Storybook Definition.
 */
export default { title: 'organisms/collage' };
export const Collage = () => collages(collageData);
