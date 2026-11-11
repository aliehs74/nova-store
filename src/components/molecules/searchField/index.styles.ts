import styled from "styled-components";

export const Field = styled.form`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.sm};
  min-width: 0;
  min-height: 46px;
  padding-inline: ${({ theme }) => theme.space.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 999px;
  color: ${({ theme }) => theme.colors.muted};
  background: ${({ theme }) => theme.colors.background};
  &:focus-within { outline: 2px solid ${({ theme }) => theme.colors.focus}; outline-offset: 2px; }
  > svg { flex-shrink: 0; }
  > svg:first-of-type { order: 2; }
`;

export const Control = styled.input`
  flex: 1;
  width: 100%;
  min-width: 0;
  min-height: 44px;
  border: 0;
  outline: none;
  color: ${({ theme }) => theme.colors.text};
  background: transparent;
  font: inherit;
  &::placeholder { color: ${({ theme }) => theme.colors.muted}; }
  &::-webkit-search-cancel-button { appearance: none; }
`;

export const Clear = styled.button`
  display: inline-grid;
  place-items: center;
  min-width: 44px;
  min-height: 44px;
  border: 0;
  padding: 0;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;
