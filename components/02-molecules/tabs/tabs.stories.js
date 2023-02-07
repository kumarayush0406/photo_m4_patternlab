import tab from './tabs.twig';
import tabsData from './tabs.yml';

import './tabs.scss';
import './tabs';
/**
 * Storybook Definition.
 */
export default { title: 'Molecules/tabs' };
export const tabs = () => tab(tabsData);
