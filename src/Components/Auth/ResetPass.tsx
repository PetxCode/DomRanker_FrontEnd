import React from 'react'
import styled from 'styled-components'
import pix from "./img/google.png"
import { AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';

const ResetPass = () => {

  const [shown, setShown] = React.useState<boolean>(false);
  const [shown2, setShown2] = React.useState<boolean>(false);

  return (
    <Container>
        <Wrapper>
          <Text>
              <span>
                Reset Password
              </span>
          </Text>
          <TextDecs>
              <span>
                Enter new password
              </span>
          </TextDecs>

        

         

          <Myform>
           
            <HoldInput>
              <Lable>New Password</Lable>
              <Passshow>
              <Input2   type={shown ? "text" : "password"} placeholder='password'/>
              <Hide
               onClick={()=>{
                setShown(!shown);
               }}>
                {
                  shown ? (<AiOutlineEyeInvisible/>)  : ( <AiOutlineEye/>)
                }
               
                </Hide>
              </Passshow>
            </HoldInput>
            <HoldInput>
              <Lable>Confirm-Password</Lable>
              <Passshow>
              <Input2   type={shown2 ? "text" : "password"} placeholder='password'/>
               <Hide 
               onClick={()=>{
                setShown2(!shown2);
               }}>
                 {
                  shown2 ? (<AiOutlineEyeInvisible/>)  : ( <AiOutlineEye/>)
                }
                </Hide>
              </Passshow>

            </HoldInput>

            <Button>
              Reset Password
            </Button>

          </Myform>
        
          
         

          

        </Wrapper>
        
    </Container>
  )
}

export default ResetPass

const OPP = styled.div`
display:flex;
`

const Acc =styled.div`
font-size: 14px;
font-weight:800;

@media screen and (max-width:600px){
  font-size: 11px;
}
`
const Sig =styled.div`
color:red;
font-size: 14px;
font-weight:800;

@media screen and (max-width:600px){
  font-size: 11px;
}
`

const Already = styled.div`
 width:60%;
 height:20px;
 display:flex;
 justify-content:center;
 align-items:center;

 
@media screen and (max-width:600px){
  width:80%;

}


`

const Button = styled.button`
width:100%;
height:40px;
background-color:#AE67FA;
color:#FFFFFF;
display:flex;
justify-content:center;
align-items:center;
font-size:15px;
font-weight:800;
border:none;
border-radius:6px;
margin-top:7px;
cursor:pointer;
transition:all 350ms;

:hover{
  tranform:scale(0.9);
}

`

const Input2 = styled('input')`
width:100%;
height:40px;
 outline:none;
 background-color:#AE67FA40;
 border:none;
 padding-left:10px;
 margin-top:5px;
 border-radius:4px;
 

 :hover{
  outline:none;
 }
`
const Hide = styled.div`
position:absolute;
cursor:pointer;
right:20px;
top:20px;
`
const Passshow = styled.div`
width:100%;
display:flex;
position:relative;

`

const Lable = styled.label`
font-width:900;
`

const Input = styled.input`
 height:40px;
 outline:none;
 background-color:#AE67FA40;
 border:none;
 padding-left:10px;
 margin-top:5px;
 border-radius:4px;
 

 :hover{
  outline:none;
 }

`
const HoldInput = styled.div `
width:100%;
display:flex;
height:73px;
flex-direction:column;

`

const Myform = styled('form')`
width:90%;
height:auto;
padding-bottom:5px;
`

const Line = styled('div')`
width:160px;
height:1px;
background-color:black;
`

const LinHold = styled('div')`
width:90%;
height:45px;
display:flex;
justify-content:space-between;
align-items:center;

div{
  font-weight:800;
  font-size:15px;
}
`

const GoogleImg = styled('img')`
width:40px;
height:40px;
object-fit:contain;

`

const MainHold = styled('div')`
  width:190px;
  
  height:100%;
  display:flex;
  align-items:center;
  justify-content: space-between;


  span{
    font-size:18px;
    font-weight:600;
  }
`

const SocialCon = styled('div')`
width:90%;
height:40px;
background-color:#E8EAFF;
border-radius:5px;
cursor:pointer;
display:flex;
justify-content: center;
align-items: center;
margin-top:20px;

div{
  
}


`

const TextDecs = styled('div')`
width:100%;
height:45px;
display:flex;
justify-content:center;
align-items:center;

span{
   font-size:15px;
   font-weight:700;
   color:#000000;
}
`

const Text = styled.div`
width: 100%;
height: 40px;
display:flex;
justify-content: center;
align-items: center;

span{
  font-width:900;
  color:#AE67FA;
  font-size:35px;
  font-family:Imported;
}
`

const Container = styled('div')`
width: 100%;
min-height:100vh;
height: 100%;
display:flex;
justify-content:center;
align-items: center;

`

const Wrapper = styled.div`
width: 400px;
height: auto;

display:flex;
flex-direction: column;
align-items: center;
padding-top:20px;
padding-bottom:20px;



@media screen and (max-width:600px){
  width: 100%;
  
}
`