import logo from './logo.twig';

import logoData from './logo.yml';

import './logo.scss';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/logo' };

export const logos = () => logo(logoData);
