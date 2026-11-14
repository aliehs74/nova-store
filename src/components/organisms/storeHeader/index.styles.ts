import styled from "styled-components";
import Link from "next/link";

export const Header = styled.header`
  background: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Inner = styled.div`
  display: grid;
  grid-template-columns: minmax(44px, 1fr) auto minmax(88px, 1fr);
  direction: ltr;
  > a {
    justify-self: center;
  }
  align-items: center;
  gap: ${({ theme }) => theme.space.sm};
  max-width: ${({ theme }) => theme.contentWidth};
  margin-inline: auto;
  padding: ${({ theme }) => theme.space.md};
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    direction: inherit;
    > a {
      justify-self: start;
    }
    grid-template-columns: auto auto minmax(180px, 1fr) auto;
    gap: ${({ theme }) => theme.space.lg};
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.space.xs};
  grid-column: 3;
  grid-row: 1;
  justify-self: end;
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-column: 4;
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
  min-width: 0;
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-column: 3;
    grid-row: 1;
    width: 100%;
    max-width: 270px;
    justify-self: center;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  grid-column: 1 / -1;
  gap: ${({ theme }) => theme.space.sm};
  a {
    padding-inline: 0.75rem;
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    min-height: 44px;
  }
  a:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  details {
    position: relative;
  }
  summary {
    display: flex;
    align-items: center;
    min-height: 44px;
    padding-inline: 0.75rem;
    cursor: pointer;
  }
  details > div {
    display: grid;
    padding: ${({ theme }) => theme.space.sm};
    background: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius.control};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    display: flex;
    flex-direction: row;
    grid-column: 2;
    grid-row: 1;
    gap: 0;
    white-space: nowrap;
    details > div {
      position: absolute;
      inset-inline-start: 0;
      z-index: 10;
      min-width: 12rem;
      box-shadow: ${({ theme }) => theme.shadow};
    }
  }
`;

export const MenuButton = styled.button`
  grid-column: 1;
  grid-row: 1;
  justify-self: start;
  display: inline-grid;
  place-items: center;
  min-width: 44px;
  min-height: 44px;
  padding: 0;
  border: 0;
  border-radius: ${({ theme }) => theme.radius.control};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    display: none !important;
  }
`;

export const Cart = styled(Link)`
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
  text-decoration: none;
`;

export const DesktopLanguage = styled.div`
  display: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    display: block;
  }
`;

export const Sidebar = styled.dialog`
  position: fixed;
  inset-block: 0;
  inset-inline-start: auto;
  inset-inline-end: 0;
  width: min(320px, 88vw);
  max-width: none;
  height: 100dvh;
  max-height: none;
  margin: 0;
  padding: ${({ theme }) => theme.space.md};
  border: 0;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  direction: ltr;
  html[dir="rtl"] & {
    direction: rtl;
  }
  &[open] {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.space.md};
    overflow-y: auto;
  }
  &::backdrop {
    background: rgb(0 0 0 / 45%);
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    &,
    &[open] {
      display: contents;
    }
  }
`;

export const CloseButton = styled(MenuButton)`
  align-self: flex-end;
`;

export const SidebarLanguage = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding-block-start: ${({ theme }) => theme.space.md};
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    display: none;
  }
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
