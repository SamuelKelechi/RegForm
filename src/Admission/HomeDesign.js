import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import logo from "./logoW.png"
import { Button } from 'antd';
import firebase from 'firebase';
// import * as firebase from "firebase/app";
import { app } from '../base';
import im from "./giphy.gif"
import { Switch } from '@material-ui/core'
// import CircularProgress from '@mui/material/CircularProgress';
import ClipLoader from "react-spinners/SyncLoader";

import { useHistory } from 'react-router';

const HomeDesign = () => {
  const hist = useHistory()
  const[imgProfile, setImgProfile] = useState(im)
  const [avatar, setAvatar] = useState(null)

  const [chn, setChn] = useState('')

  const [age, setAge] = useState('')
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [parent, setParent] = useState('')
  const [parentAdress, setParentAdress] = useState('')
  const [occupation, setOccupation] = useState('')
  const [future, setFuture] = useState('')
  const [hobbies, setHobbies] = useState('')
  const [leader, setLeader] = useState('')
  const [position, setPosition] = useState('')
  const [interest, setInterest] = useState('')
  const [led, setLed] = useState('')
  const [soo, setSoo] = useState('')
  const [education, setEducation] = useState('')
  const [area, setArea] = useState('')
  const [apply, setApply] = useState('')
  const [agree, setAgree] = useState(false)

  const [percent, setPercent] = useState(0.00000001)
  
  const onToggle = () => {
    setAgree(!agree)
  }



  const uploadImage = async(e) => {
    const file = e.target.files[0]
    const showFile = URL.createObjectURL(file)
    setImgProfile(showFile)

    const fileRef = await app.storage().ref()
    const storageRef = fileRef.child("avatar/" + file.name).put(file)

    storageRef.on(firebase.storage.TaskEvent.STATE_CHANGED, (snapshot) => {
      const counter = (snapshot.bytesTransferred / snapshot.totalBytes ) * 100

      setPercent(counter)
      console.log(counter)
    },
    (err) => console.log(err.message),

    () => {
      storageRef.snapshot.ref.getDownloadURL().then(URL => {
        console.log(URL)
        setAvatar(URL)
      })
    }
    )
    
  }


  const uploadToBackEnd = async() => {
    await app.firestore().collection("admission2021").doc().set({
      name,
      avatar,
      address, 
      phone, 
      email, 
      age,
      parent, 
      occupation, 
      future,
      hobbies, 
      led, 
      apply,
      education, 
      agree,
      position, 
      area,
      parentAdress,
      time: firebase.firestore.FieldValue.serverTimestamp()
    })
    hist.push('/review')
  }


  return (
    <Container>
      <Wrapper>
        <Logo src={logo} />
        <Display>Please fill all field accurately </Display>
        
        <ImageBox>
          
        
        {
            percent <= 99.99 && percent > 0.00001 ?  <ImageBoxCover/> : null 
          }
          <ImageDisplay src={imgProfile} />
          
          {
            percent <= 99.99 && percent > 0.00001 ?  
            <Game> 
              <span>{Math.floor(percent)}%</span>
              <Loader color={"#0076e1"} size={15} />
              
            </Game> : null 
          }
          
        </ImageBox>
        
        <InputLable accept="image/*" type="file"  id="pix" onChange={uploadImage}/>
        <Label htmlFor="pix">Upload an Image</Label>

        <InputHolder>
        <label>Full Name</label>
        <TextInput placeholder="Enter your Full Name" 
        value={name}
        onChange={(e) => {setName(e.target.value)}}
        />
        </InputHolder>

        <InputHolder>
        <label>Address</label>
        <TextInput placeholder="Enter your Home Address" value={address}
        onChange={(e) => {setAddress(e.target.value)}} />
        </InputHolder>

        <InputHolder>
        <label>Phone Number</label>
        <TextInput placeholder="Enter your Phone Number" value={phone}
        onChange={(e) => {setPhone(e.target.value)}} />
        </InputHolder>

        <InputHolder>
        <label>Highest Level of Education</label>
        <TextInput placeholder="Highest Level of Education" value={education}
        onChange={(e) => {setEducation(e.target.value)}} />
        </InputHolder>
        <InputHolder>
        <label>Age</label>
        <TextInput placeholder="Enter your Age" value={age}
        onChange={(e) => {setAge(e.target.value)}} />
        </InputHolder>

        <InputHolder>
        <label>Email</label>
        <TextInput placeholder="Enter your Email" value={email}
        onChange={(e) => {setEmail(e.target.value)}} />
        </InputHolder>

        <InputHolder>
        <label>Parent Name</label>
        <TextInput placeholder="Enter your Parent Name" value={parent}
        onChange={(e) => {setParent(e.target.value)}} />
        </InputHolder>

        <InputHolder>
        <label>Parent Address</label>
        <TextInput placeholder="Enter your Parent Address" value={parentAdress}
        onChange={(e) => {setParentAdress(e.target.value)}} />
        </InputHolder>

        <InputHolder>
        <label>Parent occupation</label>
        <TextInput placeholder="Enter your Parent Address" value={occupation}
        onChange={(e) => {setOccupation(e.target.value)}} />
        </InputHolder>

        <InputHolder>
        <label>Future Ambition</label>
        <TextInput placeholder="Enter your Future Ambition" value={future}
        onChange={(e) => {setFuture(e.target.value)}} />
        </InputHolder>

        <InputHolder>
        <label>What's your Hobbies</label>
        <TextArea
          placeholder="What's your Hobbies"  
          value={hobbies}
          onChange={(e) => {
            setHobbies(e.target.value)
          }}      
        />
        </InputHolder>

        <DropDown>
     <Leader>Have you held any leadership position before?</Leader>
     <Selection
     value={led}
     onChange={(e) => {
       setLed(e.target.value)
     }}
     >
       <option value="Can't Tell" >can't tell</option>
       <option value="Yes" >Yes</option>
       <option value="No" >No</option>
     </Selection>
   </DropDown>

   <InputHolder>
        <label>In what CAPACITY did you lead?</label>
        <TextArea
          placeholder="In what CAPACITY did you lead?"  
          value={position}
          onChange={(e) => {
            setPosition(e.target.value)
          }}      
        />
        </InputHolder>
        <DropDown>
     <Leader>Which area are you applying from?</Leader>
     <Selection
     value={area}
     onChange={(e) => {
       setArea(e.target.value)
     }}
     >
       <option value="Not in Ajegunle" >Not in Ajegunle</option>
       <option value="Alaba" >Alaba</option>
       <option value="Boundary" >Boundary</option>
       <option value="Orige" >Orige</option>
       <option value="Tolu" >Tolu</option>
       <option value="Wilmer" >Wilmer</option>
     </Selection>
   </DropDown>


   <DropDown>
   <Leader>What are you applying for?</Leader>
     <Selection
     value={apply}
     onChange={(e) => {
       setApply(e.target.value)
     }}
     >
        <option value="AI/ML" >AI/ML</option>
       <option value="Desktop Dev" >Desktop Dev</option>
       <option value="Mobile Dev" >Mobile Dev</option>
       <option value="Web Dev" >Web Dev</option>
       <option value="UI/UX" >UI/UX</option>
     </Selection>
   </DropDown>

   <DropDown1>
   <Switch 
  //  checked={agree} onChange={onToggle}
  checkedChildren="Yes" unCheckedChildren="No"
     onClick={()=>{
       setAgree(!agree)
     }}
     />
     <DivPath
     >Upon clicking on the switch button besides you, you therefore agree to all Teams and Condition governing <strong>CodeLab's</strong> across all her annex branches</DivPath>
   
   </DropDown1>

   <MyButton
   type="primary"
  //  danger
  disabled={!agree}
  onClick={()=>{
    uploadToBackEnd()
    // console.log(agree)
  }}
>Submit</MyButton>


      </Wrapper>
    </Container>
  )
}

export default HomeDesign

const MyButton = styled(Button)`
 margin-top: 50px;
  width:300px;
  height: 50px;
  margin-bottom: 60px;
  transform: scale(1);
  transition: all 350ms;
  font-size: 20px;
  font-weight: bold;
  font-family: Poppins;

  :hover{
  transform: scale(1.02);
  cursor: pointer;

  }
`

const DivPath = styled.div`
 width:250px;
 font-size: 13px;
 margin-left: 20px;
`
const Selection = styled.select`
      width:100px;
       height:30px;
       padding-left:10px;
       margin-left:10px;
       color: black;
       font-weight: bold;
       

       option{
         font-family: Poppins;
         font-weight: bold;
       }
`
const Leader = styled.div`
width: 200px;
font-size: 12px;
`

const DropDown1 = styled.div`
    display:flex;
    height:40px;
    align-items:center;
    margin-top:10px;
    margin: 40px 0;
`
const DropDown = styled.div`
    display:flex;
    height:40px;
    align-items:center;
    margin-top:10px;
    margin: 20px 0;
`

const TextArea = styled.textarea`
      height:100px;
       resize:none;
       margin-top:10px;
       padding-top:10px;
       width: 300px;

       ::placeholder{
        font-family: Poppins;
        font-weight: bold;
        padding-left: 10px;
       }
`

const InputHolder = styled.div`

width: 300px;
display:flex;
flex-direction: column;
font-weight: bold;
font-size: 12px;
letter-spacing: 1px;
margin: 10px 0
`
const TextInput = styled.input`
color: black;
height: 40px;
padding-left:10px ;
font-size: normal;
font-family: Poppins;

::placeholder{
  font-family: Poppins;
  font-weight: bold;
}
` 

const Display = styled.div` 
margin-bottom: 30px;
text-transform: uppercase;
font-weight: bold;
letter-spacing: 1px;
`
const InputLable = styled.input`
display: none;
`
const Label = styled.label`
cursor: pointer;
background-color: #0076e1;
height: 30px;
margin-top: 20px;
margin-bottom: 40px;
display: flex;
justify-content: center;
align-items: center;
padding: 10px 30px;
border-radius: 5px;
transform: scale(1.00);
transition: all 350ms;
font-weight: boldhh j;

:hover{
  transform: scale(1.03);

}
`

const Container = styled.div`
width: 100%;
min-height: 100vh;
height: 100%;
padding-top: 50px
`
const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`

const Logo = styled.img`
  width: 320px;
  height: 80px;
  object-fit: contain;
  margin-bottom: 30px;
`

const ImageBoxCover = styled.div`
width: 100%;
border-radius: 10px;
height: 100%;
background-color: rgba(255, 255, 255, 0.8);;
z-index:1;
position: absolute;

`
const ImageBox = styled.div` 
width: 300px;
height: 250px;
position: relative;
border: 5px solid #0076e1;
justify-content: center;
display: flex;
align-items: center;
border-radius: 10px;
`
const ImageDisplay = styled.img` 
width: 300px;
height: 250px;
border-radius: 10px;
object-fit: cover;

position: absolute;
top:0;
left: 0;
`

const Loader = styled(ClipLoader)`
z-index: 10;

`

const Game = styled.div`
color: black;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;

span{
  font-weight: bold;
  color: black;
  z-index: 100;
  font-size: 15px;
  margin-bottom: 10px;
}
`