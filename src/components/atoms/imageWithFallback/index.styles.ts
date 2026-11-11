import styled from "styled-components";

export const Frame = styled.div`
  position: absolute;
  inset: 0;
  img { object-fit: contain; padding: ${({ theme }) => theme.space.lg}; }
`;

export const Fallback = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space.sm};
  padding: ${({ theme }) => theme.space.md};
  color: ${({ theme }) => theme.colors.imageText};
  text-align: center;
  font-size: 0.875rem;
`;
