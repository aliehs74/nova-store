import styled from "styled-components";

export const Feedback = styled.div`
  position: fixed;
  z-index: 20;
  inset-block-end: ${({ theme }) => theme.space.md};
  inset-inline: 1rem;
  width: fit-content;
  max-width: min(28rem, calc(100% - 2rem));
  margin-inline: auto;
  span {
    display: block;
    padding: ${({ theme }) => theme.space.md};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius.control};
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};
    box-shadow: ${({ theme }) => theme.shadow};
    overflow-wrap: anywhere;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space.md};
  margin-block-end: ${({ theme }) => theme.space.lg};
  h2 {
    position: relative;
    margin: 0;
    padding-block-end: ${({ theme }) => theme.space.sm};
    font-size: clamp(1.25rem, 2.2vw, 1.75rem);
    &::after {
      content: "";
      position: absolute;
      inset-block-end: 0;
      inset-inline-start: 0;
      width: 3rem;
      height: 3px;
      border-radius: 999px;
      background: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const Controls = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.space.md};
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.875rem;
  p { margin: 0; }
`;

export const SortControl = styled.label`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.space.sm};
  max-width: 100%;
  select {
    min-height: 44px;
    max-width: 100%;
    padding: ${({ theme }) => theme.space.sm};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius.control};
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};
    font: inherit;
    cursor: pointer;
  }
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.space.md};
  padding-block: ${({ theme }) => theme.space.xl};
  text-align: center;
  p { margin: 0; }
`;

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: ${({ theme }) => theme.space.md};
  margin: 0;
  padding: 0;
  list-style: none;
  > li { min-width: 0; }
  @media (min-width: 480px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) { grid-template-columns: repeat(3, minmax(0, 1fr)); }
`;
