import css from "styled-jsx/css";

const allStyles = css`
.skill-container {
  background: aliceblue;
  border: 1px solid blue;
  border-radius: 0.8rem;
  width: 25rem;
  font-family: 'Staatliches', cursive;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;

  box-shadow: 0 0 20px 6px#336699;
  padding: 0.5rem 0 1rem 0;
}
@media screen and (max-width: 440px) {
  .skill-container {
    width:70%;
    margin-left: -1.5rem;
  }
}
@media screen and (max-width: 240px) {
  .skill-container {
    margin-left: -4.5rem;
  }
}
.dark{
  filter: invert(1) hue-rotate(180deg);
}
.dark .skill-header{
  filter: invert(1) hue-rotate(180deg);
}
.skill-header {
  margin: 0.5rem;
  font-size: 1.2em;
}
`;

const topicStyles = css`
.skill-progress {
  display: block;
  margin: 0.5rem 0;
}
.skill-progress p {
  margin-top: -0.1rem;

  display: flex;
  justify-content: center;

  width: 20rem;
  font-family: 'Fira Sans', serif;
  font-size: 1rem;
  font-weight: 500;
  font-style: italic;
}
.dark p{
 filter: invert(1) hue-rotate(180deg);
 color: white;
}
`;

export { allStyles, topicStyles }