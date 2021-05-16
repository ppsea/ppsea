/**
 * Author : ppsea
 * Date : 2021-05-16
 * Desc : main page
 */

import styled from 'styled-components';
import Page from '@components/Page';
import { OG_IMAGE_DEFAULT, SITE_DESCRIPTION, SITE_NAME } from '@lib/constants';

type TProps = {};

export default function index({}: TProps) {
  const meta = {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    image: OG_IMAGE_DEFAULT,
  };
  return (
    <Page meta={meta}>
      <Wrapper>hello world</Wrapper>
    </Page>
  );
}

type TInverted = {
  inverted: boolean;
};
const Wrapper = styled.div`
  ${props => props.theme.medias.mobile} {
    color: green;
  }
  ${props => props.theme.medias.pad} {
    color: red;
  }
  ${props => props.theme.medias.desktop} {
    color: blue;
  }
`;
