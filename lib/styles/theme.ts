/**
 * Author : ppsea
 * Date : 2021-05-16
 * Desc : custom theme
 */

import baseStyled, { DefaultTheme, ThemedStyledInterface } from 'styled-components';

// NOTE style with viewport width
export const minMedia = (width: number) => `
    @media (min-width:${width}px)
    `;
export const maxMedia = (width: number) => `
    @media (max-width:${width}px)
    `;

const medias = {
  mobile: maxMedia(768),
  pad: minMedia(768),
  desktop: minMedia(1000),
};

const myTheme: DefaultTheme = {
  medias,
  minMedia,
  maxMedia,
};

export type Theme = typeof myTheme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;

export default myTheme;
