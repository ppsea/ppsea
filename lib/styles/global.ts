/**
 * Author : ppsea
 * Date : 2021-05-16
 * Desc : global styles
 */

import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

//NOTE style reset & global style
export const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
      box-sizing: border-box;
      margin: 0px;
      padding: 0px;
    }
    body{
      font-family: 'Open Sans', sans-serif;
    }
    a {
      color: inherit;
      text-decoration: none;
    }
    input, button {
      background-color: transparent;
      border: none;
      outline: none;
      font-family: 'Open Sans', sans-serif;
    }
    button {
      &:active{
        transform: scale(0.98);
      }
    }
    textarea {
      border: none;
      outline: none;
      font-family: 'Open Sans', sans-serif;
      overflow: auto;
      resize: none;
    }
  `;
