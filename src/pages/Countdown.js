import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import CountdownTimer from '../components/CountdownTimer';
import { NavLink } from "react-router-dom";
import {API_BASE_URL, NEXT_LAUNCH} from '../constants/APIConstants'

const Countdown = () => {
  const [nextPayload, setNextPayload] = useState(null);
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  React.useEffect(() => {
    axios
      .get(API_BASE_URL+NEXT_LAUNCH)
      .then((res) => {
        setNextPayload(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <Row className="background-blue">
        <Col sm="12" md={12}>
          <h3 className="titleText">Upcoming : {nextPayload?.name}</h3>
          <Col sm="8" md={8} className="count-down-content">
            <Card>
              <CardBody className="align-items-center background-grey">
                <CountdownTimer
                  targetDate={nextPayload?.date_unix || dateTimeAfterThreeDays}
                />
              </CardBody>
            </Card>
          </Col>
        </Col>
        <NavLink className="navigation-arrow" to="/NextLaunch">&#x2304;</NavLink>
      </Row>
    </Container>
  );
};

export default Countdown;
