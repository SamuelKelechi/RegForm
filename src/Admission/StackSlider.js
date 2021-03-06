import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

import img1 from "./slider/auto.png"
import img2 from "./slider/azure.png"
import img3 from "./slider/css.png"
import img4 from "./slider/electron.png"
import img5 from "./slider/Expressjs.png"
import img6 from "./slider/fire1.png"
import img7 from "./slider/heroku.jpg"
import img8 from "./slider/git.png"
import img9 from "./slider/github.png"
import img10 from "./slider/html.png"
import img11 from "./slider/js.png"
import img12 from "./slider/keras0.png"
import img13 from "./slider/node.png"
import img14 from "./slider/python.png"
import img15 from "./slider/reactJS.jpg"
import img16 from "./slider/tenso.png"
import img17 from "./slider/mongodb.jpg"

const StackSlider = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
  };

  return (
    <Conatiner>
      <SliderSetting {...settings}>
        <Wrapper>
          <Image src={img1} />
        </Wrapper>
        <Wrapper>
          <Image src={img2}   />
        </Wrapper>
        <Wrapper>
          <Image  src={img3}  />
        </Wrapper>
        <Wrapper>
          <Image src={img4} />
        </Wrapper>
        <Wrapper>
          <Image src={img5}   />
        </Wrapper>
        <Wrapper>
          <Image  src={img6}  />
        </Wrapper>
        <Wrapper>
          <Image src={img7} />
        </Wrapper>
        <Wrapper>
          <Image src={img8}   />
        </Wrapper>
        <Wrapper>
          <Image  src={img9}  />
        </Wrapper>
        <Wrapper>
          <Image src={img10} />
        </Wrapper>
        <Wrapper>
          <Image src={img11}   />
        </Wrapper>
        <Wrapper>
          <Image  src={img12}  />
        </Wrapper>
        <Wrapper>
          <Image src={img13} />
        </Wrapper>
        <Wrapper>
          <Image src={img14}   />
        </Wrapper>
        <Wrapper>
          <Image  src={img15}  />
        </Wrapper>
        <Wrapper>
          <Image src={img16}   />
        </Wrapper>
        <Wrapper>
          <Image  src={img17}  />
        </Wrapper>
      </SliderSetting>
    </Conatiner>
  )
}

export default StackSlider

const Conatiner = styled.div`
padding-top: 50px;
width: 100%;
/* height: 30vh; */
display:flex;
justify-content: center;
align-items: center;
margin-bottom: 60px;

`
const SliderSetting = styled(Slider)`
width: 70%;
/* height: 30vh; */
display: flex;
align-items: center;
`
const Wrapper = styled.div`
display: flex;
align-items: center;
`
const Image = styled.img`
width: 11vw;
height: 10vh;
margin: 0 5px;
background-color: white;
border-radius: 5px;
object-fit: contain;
`
