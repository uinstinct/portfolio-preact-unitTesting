import css from "styled-jsx/css";

export default css`
.container {
  width: 100%;
  height: 100vh;
  background: #232323;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container .box {
  width: 550px;
  height: 250px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.container .box .title {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  height: 50px;
}
.container .box .title .block {
  width: 0%;
  height: inherit;
  background: #66ff66;
  position: absolute;
  animation: mainBlock 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
  display: flex;
}
.container .box .title h1 {
  font-family: 'ostrich-regular';
  color: #fff;
  font-size: 5rem;
  animation: mainFadeIn 2s forwards;
  animation-delay: 1.6s;
  opacity: 0;
  display: flex;
  align-items: baseline;
  position: relative;
}
.container .box .title h1 span {
  width: 0px;
  height: 0px;
  border-radius: 50%;
  background: #00ffff;
  animation: popIn 1.2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
  animation-delay: 2s;
  margin-left: 5px;
  margin-top: -10px;
  position: absolute;
  bottom: 1rem;
  right: -1rem;
}
@media screen and (max-width:320px){
  .container .box .title h1 span{
    right: 3rem;
    bottom: 1.5rem;
  }
}
.container .box .role {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  height: 30px;
  margin-top: 2rem;
}
@media screen and (max-width:320px){
  .container .box .role{
    margin-top: 6rem;
  }
}

.container .box .role .block {
  width: 0%;
  height: inherit;
  background: #33cccc;
  position: absolute;
  animation: secBlock 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
  animation-direction: reverse;
  animation-delay: 2.5s;
  display: flex;
}
.container .box .role p {
  animation: secFadeIn 2s forwards;
  animation-delay: 3.2s;
  opacity: 0;
  font-family: 'guildof';
  color: #ffffff;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 5px;
}

@keyframes mainBlock {
  0% {
    width: 0%;
    left: 0;
  }
  50% {
    width: 100%;
    left: 0;
  }
  100% {
    width: 0;
    left: 100%;
  }
}
@keyframes secBlock {
  0% {
    width: 0%;
    left: 0;
  }
  50% {
    width: 100%;
    left: 0;
  }
  100% {
    width: 0;
    left: 100%;
  }
}
@keyframes mainFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes popIn {
  0% {
    width: 0px;
    height: 0px;
    background: #e9d856;
    border: 0px solid #ddd;
    opacity: 0;
  }
  50% {
    width: 10px;
    height: 10px;
    background: #e9d856;
    opacity: 1;
    bottom: 45px;
  }
  65% {
    width: 7px;
    height: 7px;
    bottom: 0px;
    width: 15px;
  }
  80% {
    width: 10px;
    height: 10px;
    bottom: 20px;
  }
  100% {
    width: 7px;
    height: 7px;
    background: #e9d856;
    border: 0px solid #222;
    bottom: 13px;
  }
}
@keyframes secFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.5;
  }
}
`;