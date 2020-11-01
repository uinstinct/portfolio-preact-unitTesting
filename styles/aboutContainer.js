import css from "styled-jsx/css";

export default css`
  .about-container{
    width: 100% !important;
    background-color: #eefdfd;

    display: grid;
    grid-template-columns: 352px 1fr;
    grid-column-gap: 1rem;
    grid-row-gap: 0.5rem;
    justify-items: center;
    align-items: center;
  }
  @media screen and (max-width: 768px){
    .about-container{
      grid-template-columns: 1fr;
    }
  }
  .dark{
    filter: invert(1) hue-rotate(180deg);
  }
`;