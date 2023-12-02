// src/components/StyledComponents.js
import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  transition: background-color 0.3s, color 0.3s;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
