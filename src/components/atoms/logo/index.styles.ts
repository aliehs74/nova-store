import styled from "styled-components";
import IconProvider from "@/utils/iconProvider";

export const Brand = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.sm};
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.text};
  font: 800 1.65rem/1 Arial, sans-serif;
  letter-spacing: -0.08em;
  text-decoration: none;
  min-height: 44px;
`;

export const Bag = styled(IconProvider)`
  width: 23px;
  height: 28px;
  color: ${({ theme }) => theme.colors.primary};
`;
