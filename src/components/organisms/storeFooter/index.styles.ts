import styled from "styled-components";

export const Footer = styled.footer`
  margin-block-start: 3rem;
  padding: 2rem max(1rem, calc((100% - 75rem) / 2));
  background: #132238;
  color: #f3f5f9;
  border-block-start: 1px solid ${({ theme }) => theme.colors.border};
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;
  > div {
    grid-column: 1 / -1;
  }
  > div > a {
    direction: ltr;
    font-size: 2.5rem;
    font-weight: 800;
    gap: 0.6rem;
  }
  > div svg {
    color: #ff6818;
  }
  > div p {
    margin: 0.5rem 0 0;
    font-size: 0.875rem;
  }
  nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  a {
    color: inherit;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    font-size: 0.875rem;
  }
  a:hover {
    text-decoration: underline;
  }
  h2 {
    font-size: 1rem;
    margin: 0 0 0.5rem;
  }
  aside {
    display: flex;
    direction: ltr;
    gap: 0.75rem;
    grid-column: 1 / -1;
  }
  aside a {
    width: 44px;
    height: 44px;
    justify-content: center;
    border-radius: 50%;
    background: #26384e;
  }
  aside a:hover {
    background: #3b506c;
  }
  small {
    grid-column: 1 / -1;
    border-block-start: 1px solid #3b4a60;
    padding-block-start: 1rem;
    text-align: end;
    font-size: 0.75rem;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1.4fr;
    > div,
    aside {
      grid-column: auto;
    }
  }
`;
