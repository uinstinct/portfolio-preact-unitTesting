import css from "styled-jsx/css";

export default css`
.container{
  width: 100%;
  margin: 2rem 1rem 1rem 1rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  justify-items: center;
  align-items: center;
}
@media screen and (max-width: 850px) {
  .container {
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (max-width: 768px) {
  .container {
    margin: 1rem 0.5rem;
    grid-template-columns: 1fr;
  }
}
`;