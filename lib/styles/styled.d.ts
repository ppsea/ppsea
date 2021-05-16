/**
 * Author : ppsea
 * Date : 2021-05-16
 * Desc : custom styles
 */

import 'styled-components';
import { minMedia, maxMedia } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    medias: {
      mobile: any;
      pad: any;
      desktop: any;
    };
    minMedia: typeof minMedia;
    maxMedia: typeof maxMedia;
  }
}
