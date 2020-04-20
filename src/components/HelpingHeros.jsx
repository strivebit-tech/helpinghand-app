import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";

const HelpingHeroCard = styled.div`
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
  width: 400px;
  min-height: 300px;
  padding: 1.25rem;
  border-radius: 4px;
  margin: 0.75rem 2rem;
  background-color: #f7f9f9;
  display: inline-block;
  white-space: normal;

  &:nth-child(1) {
    margin-left: 0;
  }
`;

const HelpingHerosContainer = styled.div`
  width: ${window.innerWidth - 32}px;
  overflow-x: scroll;
  overflow-y: hidden;
  min-height: 340px;
  white-space: nowrap;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    opacity: 0;
    display: none;
  }
`;

export const HelpingHeros = () => {
  return (
    <Row className="py-5 mt-5">
      <Col md={9} className="mx-auto">
        <h2 className="text-center text-dark font-weight-bold">
          Our Helping Heros
        </h2>
      </Col>

      <HelpingHerosContainer className="mt-5 mx-auto">
        <HelpingHeroCard className="shadow-sm pt-5 px-3 pb-3">
          <div className="d-md-flex px-3">
            <div className="text-center">
              <img
                src="https://picsum.photos/50"
                className="rounded-pill img-fluid text-center"
                width="80"
                alt=""
              />
            </div>

            <div className="ml-md-3 d-md-flex flex-column align-items-start justify-content-center">
              <h3 className="text-center text-md-left">Srinath Goswami</h3>
              <h6 className="text-center text-md-left">Ceo, Future Groups</h6>
            </div>
          </div>
          <div className="p-3 text-center text-md-left">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              omnis inventore nesciunt? Molestiae rerum, vel enim a vitae,
              reprehenderit recusandae.
            </p>
          </div>
        </HelpingHeroCard>

        <HelpingHeroCard className="shadow-sm pt-5 px-3 pb-3">
          <div className="d-md-flex px-3">
            <div className="text-center">
              <img
                src="https://picsum.photos/50"
                className="rounded-pill img-fluid text-center"
                width="80"
                alt=""
              />
            </div>

            <div className="ml-md-3 d-md-flex flex-column align-items-start justify-content-center">
              <h3 className="text-center text-md-left">Srinath Goswami</h3>
              <h6 className="text-center text-md-left">Ceo, Future Groups</h6>
            </div>
          </div>
          <div className="p-3 text-center text-md-left">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              omnis inventore nesciunt? Molestiae rerum, vel enim a vitae,
              reprehenderit recusandae.
            </p>
          </div>
        </HelpingHeroCard>

        <HelpingHeroCard className="shadow-sm pt-5 px-3 pb-3">
          <div className="d-md-flex px-3">
            <div className="text-center">
              <img
                src="https://picsum.photos/50"
                className="rounded-pill img-fluid text-center"
                width="80"
                alt=""
              />
            </div>

            <div className="ml-md-3 d-md-flex flex-column align-items-start justify-content-center">
              <h3 className="text-center text-md-left">Srinath Goswami</h3>
              <h6 className="text-center text-md-left">Ceo, Future Groups</h6>
            </div>
          </div>
          <div className="p-3 text-center text-md-left">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              omnis inventore nesciunt? Molestiae rerum, vel enim a vitae,
              reprehenderit recusandae.
            </p>
          </div>
        </HelpingHeroCard>

        <HelpingHeroCard className="shadow-sm pt-5 px-3 pb-3">
          <div className="d-md-flex px-3">
            <div className="text-center">
              <img
                src="https://picsum.photos/50"
                className="rounded-pill img-fluid text-center"
                width="80"
                alt=""
              />
            </div>

            <div className="ml-md-3 d-md-flex flex-column align-items-start justify-content-center">
              <h3 className="text-center text-md-left">Srinath Goswami</h3>
              <h6 className="text-center text-md-left">Ceo, Future Groups</h6>
            </div>
          </div>
          <div className="p-3 text-center text-md-left">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              omnis inventore nesciunt? Molestiae rerum, vel enim a vitae,
              reprehenderit recusandae.
            </p>
          </div>
        </HelpingHeroCard>
      </HelpingHerosContainer>
    </Row>
  );
};
