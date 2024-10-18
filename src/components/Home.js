import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ImgSider from "./ImgSider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recomended from "./Recomended";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { useDispatch, useSelector } from "react-redux";
import { collection, onSnapshot } from "firebase/firestore"; // Import Firestore functions
import db from "../firebase"; // Ensure this path is correct
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
   let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trendings = [];

  useEffect(() => {
    const moviesCollection = collection(db, "movies"); 
    const unsubscribe = onSnapshot(moviesCollection, (snapshot) => {  
      snapshot.docs.forEach((doc) => {
        switch (doc.data().type) {
          
           case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];

            break;

          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trendings = [...trendings, { id: doc.id, ...doc.data() }];
            break;
        }
      });

      dispatch(
        setMovies({
          recommended: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trendings,
        })
      );  
    });

    return () => unsubscribe(); // Clean up the subscription on unmount
  }, [userName]); // Ensure to include recommends, newDisneys, originals, and trendings in the dependency array

  return (
      <>
          <Container>
        <ImgSider />
        <Viewers />
        <Recomended />
        <NewDisney />
        <Originals />
        <Trending/>
      </Container>
      </>
  )
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home
