import styled from "styled-components";
import Button from "@/components/atoms/button";

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 0;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.card};
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadow};
`;

export const Picture = styled.div`
  position: relative;
  aspect-ratio: 4 / 3;
  background: ${({ theme }) => theme.colors.imageSurface};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: ${({ theme }) => theme.space.sm};
  padding: ${({ theme }) => theme.space.md};
  h3 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    min-height: 3.2em;
    margin: 0;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.6;
    overflow-wrap: anywhere;
  }
`;

export const Category = styled.span`
  align-self: flex-start;
  max-width: 100%;
  padding: 0.125rem 0.625rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.75rem;
`;

export const Rating = styled.span`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.xs};
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.875rem;
  svg {
    color: ${({ theme }) => theme.colors.rating};
    fill: currentColor;
    flex-shrink: 0;
  }
`;

export const Price = styled.p`
  margin: auto 0 0;
  padding-block-start: ${({ theme }) => theme.space.sm};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
`;

export const AddButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space.sm};
  width: 100%;
  margin-block-start: ${({ theme }) => theme.space.xs};
  font-size: 0.875rem;
  svg {
    flex-shrink: 0;
  }
  &[aria-disabled="true"] {
    cursor: not-allowed;
  }
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  direction: ltr;
  gap: ${({ theme }) => theme.space.xs};
  margin-block-start: ${({ theme }) => theme.space.xs};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.control};
  min-width: 0;
  output {
    overflow-wrap: anywhere;
    text-align: center;
  }
`;

export const QuantityButton = styled(Button)<{ $remove?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  min-width: 44px;
  padding: ${({ theme }) => theme.space.sm};
  border: 0;
  color: ${({ theme, $remove }) => ($remove ? theme.colors.danger : theme.colors.text)};
`;
