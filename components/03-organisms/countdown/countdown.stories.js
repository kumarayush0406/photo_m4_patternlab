import countdown from './countdown.twig';
import countdownData from './countdown.yml';

import './countdown.scss';
/**
 * Storybook Definition.
 */
export default { title: 'organisms/countdown' };
export const Countdown = () => countdown(countdownData);
