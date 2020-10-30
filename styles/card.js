import css from "styled-jsx/css";

export default css`
.card {
  width: 95%;
  position: relative;
  max-width: 800px;
  margin: 2rem auto;
  background: #fff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 25px;
  border-radius: 25px;
  height: 400px;
  transition: all 0.3s;
}
@media screen and (max-width: 992px) {
  .card {
    margin: 1.5rem auto;
    max-width: 680px;
    height: 400px;
  }
}
@media screen and (max-width: 768px) {
  .card {
    min-height: 500px;
    height: auto;
    margin: 170px auto;
  }
}
@media screen and (max-height: 500px) and (min-width: 992px) {
  .card {
    height: 350px;
  }
}

.wrapper{
    position: absolute;
}

.item {
  display: flex;
  align-items: center;
  flex-direction: row;
  visibility: hidden;
  opacity: 0;
}
.visible{
  opacity: 1;
  visibility: visible;
}
@media screen and (max-width: 768px) {
  .item {
    flex-direction: column;
  }
}

.content {
  padding-right: 25px;
}
.visible .content{
  animation-name: appearContent;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
}
@keyframes appearContent{
  0%{
    transform: translateX(200px);
    opacity: 0;
  }
  100%{
    transform: translateX(0);
    opacity: 1;
  }
}
@media screen and (max-width: 768px) {
  .content {
    margin-top: -130px;
    text-align: center;
    padding: 0 30px;
  }
}
@media screen and (max-width: 576px) {
  .content {
    padding: 0;
  }
}

.imageContainer {
  width: 300px;
  flex-shrink: 0;
  height: 300px;
  background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
  box-shadow: 4px 13px 30px 1px rgba(252, 56, 56, 0.2);
  border-radius: 20px;
  overflow: hidden;
}
.visible .imageContainer{
  animation-name: appearImage;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
}
@keyframes appearImage{
  0%{
    transform: translateY(200px) translateX(-80px);
    opacity: 0;
  }
  100%{
    transform: translateY(0) translateX(-80px);
    opacity: 1;
  }
}
.imageContainer img {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 20px;

  font-size: 3rem;
}
.imageContainer img:after {
  content: " ";
  margin-left: 25%;
  margin-top: 50%;
}
@media screen and (max-width: 768px) {
  .imageContainer {
    transform: translateY(-50%);
    width: 90%;
  }
  @keyframes appearImage{
  0%{
    transform: translateX(-200px) translateY(-50%);
  }
  100%{
   transform: translateX(0) translateY(-50%);
   width: 90%;
  }
}
}
@media screen and (max-width: 576px) {
  .imageContainer {
    width: 95%;
  }
}
@media screen and (max-height: 500px) and (min-width: 992px) {
  .imageContainer {
    height: 270px;
  }
}

.title {
  font-family: "Staatliches", cursive;
  font-size: 1.5rem;
  font-weight: 700;
  color: #0d0925;
  margin-bottom: 20px;
}

.description {
  font-family: "Concert One", cursive;
  color: #4e4a67;
  margin-bottom: 30px;
  line-height: 1.5em;
  width: 90%;
}
@media screen and (max-width: 576px){
  .description{
    width: 80%;
  }
}

.links {
  position: absolute;
  bottom: 2rem;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.bullets {
  position: absolute;
  right: 1.5rem;
  width: 1rem;
  color: blue;
}

.tap {
  position: relative;
  height: 50px;
  width: 10px;
  background: #0ece47;
  border-radius: 5px;
  display: inline-flex;
  margin: 0 3px;
  cursor: pointer;
}
.tap:hover {
  background: #cccccc;
}

input[type="radio"] {
  display: none !important;
}
`;