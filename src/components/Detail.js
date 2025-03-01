import React from 'react'
import styled from 'styled-components'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore, doc, getDoc } from "firebase/firestore";
const Detail = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});
  const db = getFirestore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "movies", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setDetailData(docSnap.data());
        } else {
          console.log("No such document in Firebase ");
        }
      } catch (error) {
        console.log("Error getting document:", error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id, db]);

  return (
          <Container>
          <Background>
             <img src={detailData.backgroundImg} alt= {detailData.title} />
          </Background>
           <ImageTitle>
                  <img src={detailData.titleImg} alt= {detailData.title} />
          </ImageTitle>
          <ContentMeta>
              <Controls>
                  <Player>
                      <img src="/images/play-icon-black.png" alt="" />
                      <span>Play</span>
                  </Player>
                  <Trailer>
                      <img src="/images/play-icon-white.png" alt="" />
                      <span>Trailer</span>
                  </Trailer>
                  <AddList>
                      <span>+</span>
                  </AddList>
              </Controls>   
              <Subtitle>
                  {detailData.subTitle}
              </Subtitle>
              <Description>
                  {detailData.description}
              </Description>
          </ContentMeta>
          </Container>
  )
}
const Container = styled.div`
 position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
 left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
      width: initial;
    }
`
const ImageTitle = styled.div`
 align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0px auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;

`;

const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;
const Player = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb (249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);

  img {
    width: 32px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;

    img {
      width: 25px;
    }
  }
`;
const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;
const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;

  span {
    background-color: rgb(249, 249, 249);
    height: 4px;
    width: 3px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
const Subtitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default Detail
