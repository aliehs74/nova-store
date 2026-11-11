"use client";

import styled from "styled-components";

export const Banner = styled.section`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.card};
  background: ${({ theme }) => theme.colors.heroSurface};
  margin-block-end: ${({ theme }) => theme.space.xl};
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: clamp(320px, 30vw, 400px);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    direction: ltr;
  }
`;

export const Content = styled.div`
  color: ${({ theme }) => theme.colors.heroText};
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1.5rem;
  padding-bottom: calc(1.5rem + 62vw);
  direction: inherit;
  html[dir="rtl"] & { direction: rtl; }
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 54%;
    padding: clamp(1.5rem, 3vw, 3rem);
  }
  h1 {
    margin: 0;
    font-size: clamp(1.6rem, 2.7vw, 2.4rem);
    line-height: 1.5;
  }
  p {
    margin-block: ${({ theme }) => `${theme.space.sm} ${theme.space.lg}`};
    color: ${({ theme }) => theme.colors.heroMuted};
    font-size: clamp(1rem, 1.5vw, 1.125rem);
  }
`;

export const ProductsLink = styled.a`
  gap: ${({ theme }) => theme.space.sm};
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.lg}`};
  border-radius: 999px;
  color: ${({ theme }) => theme.colors.onPrimary};
  background: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: 700;
  &:hover { background: ${({ theme }) => theme.colors.primaryHover}; }
  &:dir(ltr) svg { transform: rotate(180deg); }
`;

export const Media = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  img {
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    width: 200%;
    max-width: none;
    height: auto;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    img { width: 100%; height: 100%; object-fit: cover; object-position: left center; }
  }
`;
