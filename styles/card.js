import css from "styled-jsx/css";

export default css`
.card {
  width: 95%;
  position: relative;
  max-width: 800px;
  margin: auto;
  background: #fff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 25px;
  border-radius: 25px;
  height: 400px;
  transition: all 0.3s;
}
@media screen and (max-width: 992px) {
  .card {
    max-width: 680px;
    height: 400px;
  }
}
@media screen and (max-width: 768px) {
  .card {
    min-height: 500px;
    height: auto;
    margin: 180px auto;
  }
}
@media screen and (max-height: 500px) and (min-width: 992px) {
  .card {
    height: 350px;
  }
}

.item {
  display: flex;
  align-items: center;
  flex-direction: row;
}
@media screen and (max-width: 768px) {
  .item {
    flex-direction: column;
  }
}

.content {
  padding-right: 25px;
}
@media screen and (max-width: 768px) {
  .content {
    margin-top: -80px;
    text-align: center;
    padding: 0 30px;
  }
}
@media screen and (max-width: 576px) {
  .content {
    padding: 0;
  }
}
.content > * {
  opacity: 1;
  transform: translateY(25px);
  transition: all 0.4s;
}

.imageContainer {
  opacity: 1;
  transition-delay: 1s;
}
.imageContainer {
  width: 300px;
  flex-shrink: 0;
  height: 300px;
  background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
  box-shadow: 4px 13px 30px 1px rgba(252, 56, 56, 0.2);
  border-radius: 20px;
  transform: translateX(-80px);
  overflow: hidden;
}
.imageContainer:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
  border-radius: 20px;
  opacity: 0; /*transition this*/
}
.imageContainer img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  opacity: 1; /*transition this*/
  border-radius: 20px;
  transition: all 0.3s;
}
@media screen and (max-width: 768px) {
  .imageContainer {
    transform: translateY(-50%);
    width: 90%;
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
}

.links {
  display: inline-flex;
  background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
  padding: 15px 35px;
  border-radius: 50px;
  color: #fff;
  box-shadow: 0px 14px 80px rgba(252, 56, 56, 0.4);
  text-decoration: none;
  font-weight: 500;
  justify-content: center;
  text-align: center;
  letter-spacing: 1px;
}
@media screen and (max-width: 576px) {
  .links {
    width: 100%;
  }
}

.bullets {
  position: absolute;
  right: 1.5rem;
  top: 50%;
  bottom: -50%;
  width: 1rem;
  color: blue;
}

.tap {
  position: relative;
  height: 50px;
  width: 10px;
  background: #d9d9d9;
  border-radius: 5px;
  display: inline-flex;
  margin: 0 3px;
  cursor: pointer;
}
.tap:hover {
  background: #cccccc;
}
.tap.unchecked {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  height: 100%;
  width: -100%;
  background: linear-gradient(147deg, #f6b323 0%, #f23b26 74%);
  border-radius: 10px;
  transform: scaleX(0);
  transition: transform 0.6s;
  transform-origin: left;
}

input[type="radio"] {
  display: none;
}
`;