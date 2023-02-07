import M4 from './m4.twig';
import m4Data from './m4.yml';

import custombannerData from '../../02-molecules/banner/custombanner.yml';
import navbarData from '../../03-organisms/navbar/navbar.yml';
import showcasePData from '../../03-organisms/showcasesPrimary/showcasesPrimary.yml';
import showcaseSData from '../../03-organisms/showcasesSecondary/showcasesSecondary.yml';
import showcaseTData from '../../03-organisms/showcasesTertiary/showcasesTertiary.yml';
import aboutData from '../../02-molecules/about/about.yml';
import planData from '../../03-organisms/Plan/plan.yml';
import progresssectionData from '../../03-organisms/progressbar-section/progressbar-section.yml';
import collageData from '../../03-organisms/collage/collage.yml';
import subscribeData from '../../03-organisms/subscribe/subscribe.yml';
import countdownData from '../../03-organisms/countdown/countdown.yml';
import contactData from '../../03-organisms/contact-us/contact-us.yml';
import footerData from '../../03-organisms/footer/footer.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Templates/M4' };
export const page = () =>
  M4({
    ...m4Data,
    ...navbarData,
    ...custombannerData,
    ...showcasePData,
    ...showcaseSData,
    ...showcaseTData,
    ...aboutData,
    ...planData,
    ...progresssectionData,
    ...collageData,
    ...subscribeData,
    ...countdownData,
    ...contactData,
    ...footerData,
  });
