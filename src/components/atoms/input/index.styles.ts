import styled from "styled-components";

export const Field = styled.label`
  display: grid;
  gap: ${({ theme }) => theme.space.sm};
  width: 100%;
  min-width: 0;
`;

export const Control = styled.input`
  width: 100%;
  min-width: 0;
  min-height: 44px;
  padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.control};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  font: inherit;
  &::placeholder {
    color: ${({ theme }) => theme.colors.muted};
    opacity: 1;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &[aria-invalid="true"] {
    border-width: 2px;
  }
`;
