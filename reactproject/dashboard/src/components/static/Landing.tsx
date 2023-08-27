import React from "react";
import { Link } from "react-router-dom";
import { FlexColumn, FlexRow } from "../shared/flex";
import mainImage from "./photos/photo-main-landing.png";
import "../shared/Landing";
import "../../landing.css";
import styled from "styled-components";
import landscape from "./photos/unsplash__MI7ZJ1rOCA.png";
import landscape2 from "./photos/unsplash_lbMZntt_fH4.png";
import landscape3 from "./photos/unsplash_wAOJH0ZE5S4.png";
import landscape4 from "./photos/unsplash_AGIQPxzY3s4.png";
import arrow from "./photos/Arrow 1.png";
import reviewBack from "./photos/review-back.png";
import man1 from "./photos/man1.png";
import man2 from "./photos/man2.png";
import stars from "./photos/Group 1.png";
import footer from "./photos/footer.png";
import arrowFooter from "./photos/arrow.png";
import iconUser from "./photos/icon-user.png";
import calendar from "./photos/calendar.png";
import arrowsecond from "./photos/Arrow 2.png";
import iconOne from "./photos/icon-1.png";
import iconTwo from "./photos/icon-2.png";
import iconThree from "./photos/icon-3.png";
import {
  ScrollTopContextProvider,
  ScrollPoint,
  Link as ScrollLink,
} from "react-use-scroll-to";



const HeaderContainer = styled.div`
  background-image: url(${mainImage});
  background-size: cover;
  background-position: center;
  min-height: 1020px;

  justify-content: center;
  width: 100%;
  align-items: center;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  margin-top: auto;
  font-weight: 700;
  color: rgba(255, 255, 255, 1);
  font-size: 128px;
  margin-bottom: -5px;
`;
const HeaderWrap = styled.div`
  max-width: 910px;
  min-height: 200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const MainContainer = styled.div`
  padding: 20px;
  margin-top: 50px;
`;

const FlashCardSectionTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FlashCardOffer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 20px;
`;

const FlashCardMountain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  gap: 20px;
`;
const FlashCardSectionBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 200px;
`;
const ReviewsContainer = styled.div`
  margin-top: 150px;
`;
const ReviewCardSection = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ReviewCard = styled.div`
  background-image: url(${reviewBack});
  max-width: 840px;
  min-height: 640px;
  justify-content: center;
  align-items: center;
  color: #ccc;
  background-repeat: no-repeat;
`;

const Footer = styled.div`
  background-image: url(${footer});
  background-size: cover;
  background-position: center;
  min-height: 1020px;

  justify-content: center;
  width: 100%;
  align-items: center;
`;

export const Landing = () => {
  return (
    <ScrollTopContextProvider>
      <FlexColumn width="100%">
        <HeaderContainer>
          <ScrollPoint tag={"section-1"}>
            <LinksContainer className="header">
              <Link to="/login">Login</Link>
              <div className="header-link-wrap">
                <ScrollLink elementTag={"section-1"}>About Us</ScrollLink>
                <ScrollLink elementTag={"section-2"}>Tours</ScrollLink>
                <ScrollLink elementTag={"section-3"}>Contacts</ScrollLink>
              </div>
            </LinksContainer>
            <HeaderWrap>
              <Title>Montenegro</Title>
              <p className="p-text">
                Welcome to magical Montenegro: where the blue Adriatic waves lap
                the mountain peaks and cultural treasures have long beckoned
                travelers. Go on an unforgettable journey with us!
              </p>
              <button className="enter-button">Let's go!</button>
            </HeaderWrap>
          </ScrollPoint>
        </HeaderContainer>

        <ScrollPoint tag={"section-2"}>
          <MainContainer>
            <FlashCardSectionTop>
              <FlashCardOffer className="card">
                <h3>What we offer</h3>
                <p>
                  The incredible landscapes of Montenegro are a fairy-tale world
                  of natural beauty.{" "}
                </p>
                <img src={landscape} alt="landscape" />
              </FlashCardOffer>
              <FlashCardMountain className="card">
                <img src={landscape2} alt="landscape" />
                <p>
                  The incredible landscapes of Montenegro are a fairy-tale world
                  of natural beauty.{" "}
                </p>
              </FlashCardMountain>
            </FlashCardSectionTop>

            <FlashCardSectionBottom>
              <FlashCardOffer className="card">
                <p>
                  Delicious local cuisine Montenegro is famous for its unique
                  cuisine. Try dishes made from local products and enjoy
                  authentic flavors.
                </p>
                <img src={landscape3} alt="landscape" />
              </FlashCardOffer>
              <FlashCardMountain className="card">
                <img src={landscape4} alt="landscape" />
                <p>
                  The incredible landscapes of Montenegro are a fairy-tale world
                  of natural beauty.{" "}
                </p>
              </FlashCardMountain>
            </FlashCardSectionBottom>

            <ReviewsContainer>
              <LinksContainer className="reviews">
                <Link to="#">Reviews</Link>
                <img src={arrow} alt="arrow" />
              </LinksContainer>

              <ReviewCardSection>
                <ReviewCard className="card-section-wrap">
                  <LinksContainer className="reviews">
                    <div className="reviewCard">
                      <div className="Pedrowrap">
                        <img src={man1} alt="man" />

                        <div className="star-section">
                          <h3>Pedro Fabia</h3>
                          <img src={stars} alt="" />
                        </div>
                      </div>
                      <p>May 29th, 2023</p>
                    </div>
                  </LinksContainer>
                  <p>
                    I have always dreamed of seeing the Adriatic coast and this
                    tour exceeded all my expectations. Visiting mountain lakes
                    and beach areas was an unparalleled experience. Best of all,
                    the tour was well planned and the local food left an
                    unforgettable taste
                  </p>
                </ReviewCard>
                <ReviewCard className="card-section-wrap">
                  <LinksContainer className="reviews">
                    <div className="reviewCard">
                      <div className="Pedrowrap">
                        <img src={man2} alt="man" />

                        <div className="star-section">
                          <h3>Pedro Fabia</h3>
                          <img src={stars} alt="" />
                        </div>
                      </div>
                      <p>May 29th, 2023</p>
                    </div>
                  </LinksContainer>
                  <p>
                    My trip to Montenegro was unforgettable! From mountain
                    scenery to enchanting beaches, this tour had it all.
                    Especially memorable were the visits to ancient cities,
                    where the atmosphere of ancient times was felt. The guides
                    were very professional and friendly, they made me feel at
                    home
                  </p>
                </ReviewCard>
              </ReviewCardSection>
            </ReviewsContainer>
          </MainContainer>
        </ScrollPoint>

        <ScrollPoint tag={"section-3"}>
          <Footer>
            <div className="footer-section-wrap">
              <p>
                Don't waste time - choose the best for your trip to Montenegro
                with us. Plan your adventure today!
              </p>
              <div className="bookTourSection">
                <div className="select-tour tour-wrap">
                  <div className="img-text-wrap">
                    <img src={arrowFooter} alt="arrow" />
                    <span>Select Tour</span>
                  </div>
                  <img src={arrowsecond} alt="" />
                </div>
                <div className="select-date tour-wrap">
                  <div className="img-text-wrap">
                    <img src={iconUser} alt="" />
                    <span>Select Date</span>
                  </div>
                  <img src={arrowsecond} alt="" />
                </div>
                <div className="number-of-guests tour-wrap">
                  <div className="img-text-wrap">
                    <img src={calendar} alt="" />
                    <span>Number Of Guests</span>
                  </div>
                  <img src={arrowsecond} alt="" />
                </div>
                <button className="bookTour-button">Book Tour</button>
              </div>
            </div>
            <div className="footer-contacts">
              <div className="contact-wrap">
              <Link to="/login">Login</Link>
              <div className="email-wrap">
                <h3>Contacts</h3>
                <p>montenegrotour@gmail.com</p>
                <p>+7 897 897 897 99</p>
              </div>
              <div className="icons-wrap"> 
                <img src={iconOne} alt="" />
                <img src={iconTwo} alt="" />
                <img src={iconThree} alt="" />
              </div>
              </div>
            </div>
          </Footer>
        </ScrollPoint>
      </FlexColumn>
    </ScrollTopContextProvider>
  );
};
