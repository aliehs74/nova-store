import styled from "styled-components";

export const Choices = styled.div<{ $variant: "chips" | "menu" }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ $variant }) => $variant === "chips" ? "center" : "flex-start"};
  flex-direction: ${({ $variant }) => $variant === "menu" ? "column" : "row"};
  gap: ${({ theme }) => theme.space.sm};
  min-width: 0;
  margin-block-end: ${({ theme, $variant }) => $variant === "chips" ? theme.space.xl : "0"};
  p { margin: 0; flex-basis: 100%; color: ${({ theme }) => theme.colors.muted}; }
`;

export const Choice = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space.sm};
  min-width: 0;
  min-height: 44px;
  max-width: 100%;
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.md}`};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 999px;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.surface};
  font: inherit;
  font-size: 0.875rem;
  cursor: pointer;
  svg { flex-shrink: 0; }
  span { overflow-wrap: anywhere; }
  &:hover { border-color: ${({ theme }) => theme.colors.primary}; }
  &[aria-pressed="true"] {
    background: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.onPrimary};
  }
`;
