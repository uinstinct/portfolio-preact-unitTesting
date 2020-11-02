import css from "styled-jsx/css";

export default css`
.skill-main-container{
  width: 100%;
  margin-top 1rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  justify-items: center;
  align-items: center;
}
@media screen and (max-width: 1170px) {
  .skill-main-container {
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (max-width: 768px) {
  .skill-main-container {
    margin: 1rem auto;
    grid-template-columns: 1fr;
  }
}
@media screen and (max-width: 280px) {
  .skill-main-container {
    margin: 1rem -2rem;
  }
}
`;