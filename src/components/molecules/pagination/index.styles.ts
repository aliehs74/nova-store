import styled from "styled-components";
import Button from "@/components/atoms/button";

export const Navigation = styled.nav`
  margin-block-start: ${({ theme }) => theme.space.lg};
  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.space.sm};
    padding: 0;
    margin: 0;
    list-style: none;
  }
`;

export const PageButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  padding: ${({ theme }) => theme.space.sm};
  &[aria-current="page"] {
    background: ${({ theme }) => theme.colors.heroText};
    border-color: ${({ theme }) => theme.colors.heroText};
    color: ${({ theme }) => theme.colors.onPrimary};
  }
`;
