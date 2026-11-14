import styled from "styled-components";
import Button from "@/components/atoms/button";
import { Link } from "@/shared/navigation";

export const Heading = styled.h1`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.sm};
  margin: 0 0 ${({ theme }) => theme.space.lg};
  font-size: clamp(1.4rem, 3vw, 2rem);
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.card};
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadow};
`;

export const Row = styled.li`
  display: grid;
  grid-template-columns: 80px minmax(0, 1fr);
  align-items: center;
  gap: ${({ theme }) => theme.space.md};
  padding: ${({ theme }) => theme.space.md};
  & + & {
    border-block-start: 1px solid ${({ theme }) => theme.colors.border};
  }
  h2 {
    margin: 0;
    font-size: 1rem;
    overflow-wrap: anywhere;
  }
  p {
    margin: 0.5rem 0 0;
    color: ${({ theme }) => theme.colors.muted};
    font-size: 0.875rem;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 104px minmax(0, 1fr) auto minmax(130px, auto) 44px;
    padding: ${({ theme }) => theme.space.lg};
  }
`;

export const Picture = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.control};
  background: ${({ theme }) => theme.colors.imageSurface};
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  direction: ltr;
  gap: ${({ theme }) => theme.space.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.control};
  width: fit-content;
  output {
    min-width: 2ch;
    text-align: center;
  }
  @media (max-width: 767px) {
    grid-column: 1 / -1;
  }
`;

export const IconButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  padding: ${({ theme }) => theme.space.sm};
  border: 0;
`;

export const RemoveButton = styled(IconButton)`
  && {
    color: ${({ theme }) => theme.colors.danger};
  }
  @media (max-width: 767px) {
    grid-column: 2;
    justify-self: end;
  }
`;

export const LineTotal = styled.strong`
  overflow-wrap: anywhere;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: end;
  }
`;

export const Footer = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space.lg};
  align-items: center;
  margin-block-start: ${({ theme }) => theme.space.xl};
  > button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.space.sm};
    justify-self: start;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr minmax(280px, 1fr);
  }
`;

export const Summary = styled.section`
  display: grid;
  gap: ${({ theme }) => theme.space.md};
  padding: ${({ theme }) => theme.space.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.card};
  background: ${({ theme }) => theme.colors.surface};
  h2 {
    margin: 0;
    font-size: 1rem;
  }
  strong {
    font-size: 1.5rem;
    overflow-wrap: anywhere;
  }
  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.muted};
    font-size: 0.875rem;
  }
`;

export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.space.md};
  padding: ${({ theme }) => theme.space.xl};
  text-align: center;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius.card};
  p {
    margin: 0;
  }
`;

export const ContinueLink = styled(Link)`
  justify-content: center;
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.lg}`};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.onPrimary};
  border-radius: ${({ theme }) => theme.radius.control};
  text-decoration: none;
`;
