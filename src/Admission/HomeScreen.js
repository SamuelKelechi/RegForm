import React from 'react'
import styled from 'styled-components'
import HomeDesign from './HomeDesign'
import StackSlider from './StackSlider'

const HomeScreen = () => {
  return (
   <Container>
     <Wrapper>
       <HomeDesign/>
       <StackSlider/>
     </Wrapper>
   </Container>
  )
}

export default HomeScreen

const Container = styled.div`
width: 100%;
min-height: 100vh;
height: 100%;
padding-top: 50px;
font-family: Poppins;
color: white;
  /* background-color: rgb(17,17,17); */
`
const Wrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`