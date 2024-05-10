import styled from "styled-components";

export const Container = styled.a`
  color: ${({ theme }) => theme.colors.white};
  padding: 12px;
  width: auto;
  text-align: center;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.19);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2.3px);
  -webkit-backdrop-filter: blur(2.3px);
  border: 1px solid rgba(255, 255, 255, 1);
`