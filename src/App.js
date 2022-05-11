import React from 'react'
import styled from 'styled-components'
import {app} from "./base"
import HomeScreen from "./Admission/HomeScreen"
import StackSlider from './Admission/StackSlider'
import Review from './Admission/slider/Review'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// import "antd/dist/antd.css" 

const App = () => {
  
  return (
        <Container>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/review" exact component={Review} />
          </Switch>
        </BrowserRouter>
      </Container>
    
  )
}

export default App

const AppContainer = styled.div`
/* background-color: #23282D; */
background-color: red;
height: 100%;
width:100%;
`
const Container = styled.div`
background-image: url("star.svg");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
height: 100vh;
min-height: 100%;
width:100%;

`