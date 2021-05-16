import styled, { css } from 'styled-components';

type Props = {};

export default function index({}: Props) {
  return <Wrapper>hello world</Wrapper>;
}

type Inverted = {
  inverted: boolean;
};
const Wrapper = styled.div``;
