import styled from "styled-components";

export const Control = styled.button<{ $variant: "primary" | "secondary" }>`
  min-height: 44px;
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.md}`};
  border: 1px solid ${({ theme, $variant }) => $variant === "primary" ? theme.colors.primary : theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.control};
  background: ${({ theme, $variant }) => $variant === "primary" ? theme.colors.primary : theme.colors.surface};
  color: ${({ theme, $variant }) => $variant === "primary" ? theme.colors.onPrimary : theme.colors.text};
  font: inherit;
  cursor: pointer;
  &:hover:not(:disabled) { background: ${({ theme, $variant }) => $variant === "primary" ? theme.colors.primaryHover : theme.colors.background}; }
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`;
