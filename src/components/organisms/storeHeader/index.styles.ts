import styled from "styled-components";

export const Header = styled.header`
  background: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Inner = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) 44px;
  align-items: center;
  gap: ${({ theme }) => theme.space.sm};
  max-width: ${({ theme }) => theme.contentWidth};
  margin-inline: auto;
  padding: ${({ theme }) => theme.space.md};
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: auto auto minmax(180px, 1fr) auto;
    gap: ${({ theme }) => theme.space.lg};
  }
`;

export const Actions = styled.div`
  display: contents;
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.space.xs};
  grid-column: 4;
  grid-row: 1;
  }
`;

export const Preferences = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.space.xs};
  grid-column: 2;
  grid-row: 1;
  min-width: 0;
`;

export const Search = styled.div`
  grid-column: 1 / 3;
  grid-row: 2;
  min-width: 0;
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) { grid-column: 3; grid-row: 1; width: 100%; max-width: 270px; justify-self: center; }
`;

export const Navigation = styled.nav<{ $open: boolean }>`
  display: ${({ $open }) => $open ? "flex" : "none"};
  flex-direction: column;
  grid-column: 1 / -1;
  gap: ${({ theme }) => theme.space.sm};
  a { padding-inline: 0.75rem; color: ${({ theme }) => theme.colors.text}; text-decoration: none; min-height: 44px; }
  a:hover { color: ${({ theme }) => theme.colors.primary}; }
  details { position: relative; }
  summary { display: flex; align-items: center; min-height: 44px; padding-inline: 0.75rem; cursor: pointer; }
  details > div { display: grid; padding: ${({ theme }) => theme.space.sm}; background: ${({ theme }) => theme.colors.surface}; border: 1px solid ${({ theme }) => theme.colors.border}; border-radius: ${({ theme }) => theme.radius.control}; }
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    display: flex;
    flex-direction: row;
    grid-column: 2;
    grid-row: 1;
    gap: 0;
    white-space: nowrap;
    details > div { position: absolute; inset-inline-start: 0; z-index: 10; min-width: 12rem; box-shadow: ${({ theme }) => theme.shadow}; }
  }
`;

export const MenuButton = styled.button`
  grid-column: 3;
  grid-row: 1;
  display: inline-grid;
  place-items: center;
  min-width: 44px;
  min-height: 44px;
  padding: 0;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.control};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) { display: none !important; }
`;

export const Cart = styled.span`
  grid-column: 3;
  grid-row: 2;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  min-height: 44px;
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    border-inline-end: 1px solid ${({ theme }) => theme.colors.border};
    margin-inline-end: ${({ theme }) => theme.space.sm};
  }
  color: ${({ theme }) => theme.colors.text};
`;

export const Badge = styled.span`
  position: absolute;
  inset-block-start: 0;
  right: 1px;
  min-width: 18px;
  padding-inline: 3px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.onPrimary};
  text-align: center;
  font-size: 0.75rem;
  line-height: 1.5;
`;
