import styled from 'styled-components'
import React from 'react'
import {signInWithPopup} from 'firebase/auth'
import { auth, provider } from '../firebase'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectUserEmail,selectUserName,selectUserPhoto } from '../features/user/userSlice'
import { setUserLoginDetails } from '../features/user/userSlice'
import { useEffect } from 'react'


const Header = (props) => {

  const dispatch = useDispatch()  
  const userEmail = useSelector(selectUserEmail)
  const userName = useSelector(selectUserName)
  const userPhoto = useSelector(selectUserPhoto)
  const navigate = useNavigate()
   
  useEffect(() => {
    auth.onAuthStateChanged(user => { 
      if(user){
        setUser(user)
        navigate('/home')
      }
    })
  }, [userName])
  
  const handleAuth = () => {
    if (!userName) {
      signInWithPopup(auth, provider)
        .then((res) => setUser(res.user))
        .catch((error) => console.error('Authentication error:', error))
    }
    auth.signOut().then(() => {
      navigate('/')
      dispatch(setUserLoginDetails({
        name: null,
        email: null,
        photo: null,
      }))
    }).catch((error) => console.error('Sign out error:', error))
  }
  const setUser = (user) => { 
    dispatch(setUserLoginDetails({
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,

    })
    )
  
  console.log(user);
  }
  return (
      <Nav>
          <Logo href="/home">
              <img src="/images/Logo99.png" alt="Disney Plus Logo" />
      </Logo>
      {
        !userName ? (
          <>
            <a href="/home">
          <ViewAsGuest >
              Guest Mode
              </ViewAsGuest>
              </a>
            <Login onClick={handleAuth}>Login</Login>
            </>
        ) : <>
           
       
          <NavMenu>
            <a  >
              <img src="/images/home-icon.svg" alt="HOME" />
              <span>HOME</span>
            </a>
            <a  >
              <img src="/images/search-icon.svg" alt="SEARCH" />
              <span>SEARCH</span>
            </a>
            <a >
              <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
              <span>WATCHLIST</span>
            </a>
            <a  >
              <img src="/images/movie-icon.svg" alt="MOVIES" />
              <span>MOVIES</span>
            </a>
            <a  >
              <img src="/images/series-icon.svg" alt="SERIES" />
              <span>SERIES</span>
            </a>
            </NavMenu>
            <SignOut>
               
              
              <UserImg src={userPhoto} alt={userName} />
              
                      <DropDown>
                <span onClick={handleAuth}>Sign out</span>
              </DropDown>
              </SignOut>
            </>
      }
        </Nav>
    
  )
}
const Nav = styled.nav`
position: fixed;
top: 0;
left: 0;
right: 0;
height: 70px;
background-color: #090b13;
display: flex;
justify-content: space-between;
padding: 0 36px;
align-items: center;    
letter-spacing: 16px;
z-index: 100;
`
const Logo = styled.a`
width: 80px;
margin-top: 4px;
max-height: 80px;
font-size: 0;
display: inline-block;
img{
    display: block;
    width: 100%;
}
`
const NavMenu = styled.div`
align-items: center;
display: flex;
flex-flow: row nowrap;
height: 100%;
justify-content: flex-end;
margin: 0px;
padding: 0px;
margin-right: auto;
margin-left: 25px;
a{
display: flex;
align-items: center;
padding: 0 12px;
img{
    height: 25px;
    min-width: 20px;
    width: 20px;
    z-index: auto;
    margin-right: 10px;
}
span{
    color: rgb(249, 249, 249);
    font-size: 13px;
    letter-spacing: 1.42px;
    line-height: 1.08;
    padding : 2px 0px;  
    white-space: nowrap;
    position: relative;

    &:before{
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        content: '';
        height: 2px;
        bottom : -6px; 
        left: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        position: absolute;  
        opacity: 0;  
        width: 100%; 
    }
}
    &:hover{
        span:before{
            visibility: visible;
            transform: scaleX(1);
            opacity: 1;
        }
    }
}


@media (max-width: 768px){
    display: none;
}     
`
const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 10px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border:1px solid #f9f9f9;
  border-radius: 6px;
  margin-right: 16px;
  transition: all 0.4s ease 0.1s;
  cursor: pointer;
  &:hover{
  background-color: #f9f9f9;
  color: #000;
  border-color: #000;
  }
`
const UserImg = styled.img`
  border-radius: 50%;
  width: 50px; 
  height: 50px;  
  cursor: pointer;
`
 
const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgba(19, 19, 19, 0.95);
  border: 2px solid rgba(151, 151, 151, 0.34);
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
  padding: 12px 16px;
  font-size: 14px;
  letter-spacing: 1.5px;
  width: 110px;
  opacity: 0;
  transform: translateY(-10px);
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  visibility: hidden;
  z-index: 100;

  &:before {
    content: '';
    position: absolute;
    top: -6px;
    right: 20px;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid rgba(19, 19, 19, 0.95);
  }
`
const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    ${DropDown} {
      opacity: 1;
      visibility: visible;
      transform: translateY(6px);
    }
  }

  ${UserImg} {
  
    border: 2px solid transparent;
    transition: all 0.3s ease;
  }

  &:hover ${UserImg} {
    border-color: rgba(249, 249, 249, 0.8);
  }
`

const ViewAsGuest = styled.div`
  color: #f9f9f9; // Set text color
  font-size: 15px; // Adjusted font size for better balance
  padding: 6px 10px;  
  border: 3px solid rgba(249, 249, 249, 0.5);  
  border-radius: 5px;  
  background-color: rgba(0, 0, 0, 0.5);  
  letter-spacing : 3px;
  
    &:hover {
    background-color: #f9f9f9; 
    font-weight: normal;
    color: black;
  }
`;

export default Header
