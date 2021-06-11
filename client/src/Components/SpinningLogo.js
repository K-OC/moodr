import React from "react";
import styled, { keyframes } from "styled-components";
import { RiLoader2Fill } from "react-icons/ri";

const SpinningLogo = () => {
  return (
    <Wrapper>
      <Loader />
    </Wrapper>
  );
};

const spin = keyframes`
from {
    transform: scale(1) rotate(0deg);
}
to {
    transform: scale(1) rotate(360deg);
}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Loader = styled(RiLoader2Fill)`
  animation: ${spin} 4s infinite linear;
  font-size: 100px;
`;

export default SpinningLogo;
