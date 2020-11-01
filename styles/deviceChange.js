import css from "styled-jsx/css";

export default css`
.container{
  width: 352px;
  height: 352px;
  margin: 1rem 0 1rem 1rem;
}
.section {
  height: 352px;
  width: 352px;
  position: relative;
  padding: 4em;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.center {
  background: #fff;
  border-radius: 50%;
  height: 22em;
  margin: 1em auto;
  overflow: hidden;
  position: relative;
  width: 352px;
}

.part {
  position: absolute;
  border: 0 solid transparent;
}

.part-1 {
  background: #1c699d;
  left: 50%;
  transform: translateX(-50%);
  z-index: 15;
  animation: part1 5s infinite;
  animation-timing-function: cubic-bezier(0.6, 1.5, 0.6, 1);
}

.part-2 {
  background: #fff;
  border-radius: 0.25em;
  display: table;
  left: 50%;
  text-align: center;
  transform: translateX(-50%);
  z-index: 10;
  animation: part2 5s infinite;
  animation-timing-function: cubic-bezier(0.6, 1.5, 0.6, 1);
}
.part-2 span {
  color: #3498db;
  display: table-cell;
  font-family: 'ostrich-regular';
  vertical-align: middle;
  animation: code 5s infinite;
  animation-timing-function: cubic-bezier(0.6, 1.5, 0.6, 1);
}

.part-3 {
  background: #3498db;
  border-radius: 0.625em;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9;
  animation: part3 5s infinite;
  animation-timing-function: cubic-bezier(0.6, 1.5, 0.6, 1);
}

@keyframes part1 {
  0%,
  5% {
    border-radius: 0;
    height: 0.3125em;
    top: 13em;
    width: 1.5625em;
  }
  15%,
  25% {
    border-radius: 3.75em;
    height: 1.5em;
    top: 14.875em;
    width: 1.5em;
  }
  35%,
  45% {
    border-radius: 3.75em;
    height: 1.5em;
    top: 16.5625em;
    width: 1.5em;
  }
  55%,
  65% {
    border-radius: 6.25em;
    height: 1.25em;
    top: 15.625em;
    width: 15.625em;
  }
  75%,
  85% {
    border-radius: 6.25em;
    height: 1.25em;
    top: 17.1875em;
    width: 5.625em;
  }
  95%,
  100% {
    border-radius: 0;
    height: 0.3125em;
    top: 13em;
    width: 1.5625em;
  }
}
@keyframes part2 {
  0%,
  5% {
    border: 0.25em solid #3498db;
    border-radius: 0.5em;
    height: 3.125em;
    top: 9.375em;
    width: 3.125em;
  }
  15%,
  25% {
    border: 0 solid #3498db;
    border-radius: 0.5em;
    height: 8.125em;
    top: 6.0625em;
    width: 4.75em;
  }
  35%,
  45% {
    border: 0 solid #3498db;
    border-radius: 0.5em;
    height: 11.25em;
    top: 4.6875em;
    width: 6.875em;
  }
  55%,
  65% {
    border: 0 solid #3498db;
    border-radius: 0.5em;
    height: 8.125em;
    top: 5.9375em;
    width: 13.5em;
  }
  75%,
  85% {
    border: 0 solid #3498db;
    border-radius: 0.5em;
    height: 9.375em;
    top: 5.9375em;
    width: 15em;
  }
  95%,
  100% {
    border: 0.25em solid #3498db;
    border-radius: 0.5em;
    height: 3.125em;
    top: 9.375em;
    width: 3.125em;
  }
}

@keyframes part3 {
  0%,
  5% {
    border-radius: 0.3125em;
    height: 9.375em;
    top: 6.4375em;
    width: 2.5em;
  }
  15%,
  25% {
    border-radius: 0.625em;
    height: 11.875em;
    top: 5em;
    width: 6.625em;
  }
  35%,
  45% {
    border-radius: 0.625em;
    height: 15em;
    top: 3.75em;
    width: 8.75em;
  }
  55%,
  65% {
    border-radius: 0.625em;
    height: 10em;
    top: 5em;
    width: 15em;
  }
  75%,
  85% {
    border-radius: 0.625em;
    height: 11.25em;
    top: 5em;
    width: 16.875em;
  }
  95%,
  100% {
    border-radius: 0.3125em;
    height: 9.375em;
    top: 6.4375em;
    width: 2.5em;
  }
}

@keyframes code {
  0%,
  5% {
    font-size: 1em;
  }
  15%,
  25% {
    font-size: 1.5625em;
  }
  35%,
  45% {
    font-size: 2.1875em;
  }
  55%,
  65% {
    font-size: 2.8125em;
  }
  75%,
  85% {
    font-size: 3.4375em;
  }
  95%,
  100% {
    font-size: 1em;
  }
}
`;