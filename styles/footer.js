import css from "styled-jsx/css";

const allStyles = css`
.footer {
  display: grid;
  position: relative;
  grid-template-columns: 2fr 1fr;
  background-color: aliceblue;
  font-family: "Barlow", sans-serif;
  height: 10rem;
  padding-bottom: 5rem;
  color: black;
}
@media (max-width: 350px) {
  .footer {
    height: 22.5rem;
    grid-template-columns: 1fr;
  }
}
.dark{
  filter: invert(1) hue-rotate(180deg);
}


.contact-container {
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.header {
  display: block;
  font-size: 2em;
  text-align: center;
}

.contact-icons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
}
.contact-icons > * {
  margin: 0 1rem;
}

.provider {
  font-size: 1.2em;
  font-family: "Josefin Sans", sans-serif;
  text-transform: uppercase;
  border-radius: 1rem;
  min-width: 20%;
  margin-top: 1rem;
  padding: 0.25rem;
  background: greenyellow;
  background: linear-gradient(to right, #86fde8, #acb6e5);
  box-shadow: 0 0 5px 3px #acb6e5;
  opacity: 0.15;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.built-with {
  position: relative;
  font-size: 2em;
  font-weight: 100;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
@media (max-width: 350px) {
  .built-with {
    margin: 1.5rem 0;
  }
}
.built-with .border{
  position: absolute;
  align-self: flex-start;
  justify-self: center;
  height: 50%;
  border-left: 1px solid black;
  opacity: 0.5;
}
.built-with span {
  display: block;
  margin: 1rem;
  font-weight: 200;
}
`;

export default allStyles;