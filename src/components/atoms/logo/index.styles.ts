import styled from "styled-components";
import IconProvider from "@/utils/iconProvider";

export const Brand = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.sm};
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.text};
  font: 800 1.35rem/1 Arial, sans-serif;
  letter-spacing: -0.035em;
  text-decoration: none;
  min-height: 44px;
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) { font-size: 1.65rem; }
`;

export const Bag = styled(IconProvider)`
  width: 18px;
  height: 23px;
  color: ${({ theme }) => theme.colors.primary};
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) { width: 23px; height: 28px; }
`;
