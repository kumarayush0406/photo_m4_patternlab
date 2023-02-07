import collagecard from './collage-card.twig';
import collagecardData from './collage-card.yml';

import './collage-card.scss';
/**
 * Storybook Definition.
 */
export default { title: 'Molecules/collageCard' };
export const collageCard = () => collagecard(collagecardData);
