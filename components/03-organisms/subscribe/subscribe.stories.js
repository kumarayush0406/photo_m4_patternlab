import subscribes from './subscribe.twig';
import subscribeData from './subscribe.yml';

import './subscribe.scss';

/**
 * Storybook Definition.
 */
export default { title: 'organisms/Subscribe' };
export const subscribe = () => subscribes(subscribeData);
