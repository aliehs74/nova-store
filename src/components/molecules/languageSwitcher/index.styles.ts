import styled from "styled-components";

export const Languages = styled.div`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
`;

export const Language = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  min-height: 44px;
  padding-inline: 4px;
  color: ${({ theme }) => theme.colors.muted};
  font:
    600 0.75rem/1 Arial,
    sans-serif;
  text-decoration: none;
  &[aria-current="page"] {
    color: ${({ theme }) => theme.colors.text};
  }
  span {
    color: ${({ theme }) => theme.colors.border};
  }
`;
