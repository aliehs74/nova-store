import styled from "styled-components";

export const Switch = styled.div`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  padding: 3px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.background};
  @media (max-width: 1023px) {
    padding: 0;
    border: 0;
    background: transparent;
    button {
      width: 44px;
      height: 44px;
    }
    button[aria-pressed="true"] {
      display: none;
    }
  }
`;

export const Option = styled.button`
  display: inline-grid;
  place-items: center;
  width: 34px;
  height: 34px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.text};
  background: transparent;
  cursor: pointer;
  &[aria-pressed="true"] {
    color: #fff;
    background: #14243a;
  }
  @media (pointer: coarse) {
    width: 40px;
    height: 40px;
  }
`;
