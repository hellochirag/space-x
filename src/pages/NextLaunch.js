import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, CardBody, Table } from 'reactstrap';
import {API_BASE_URL, UPCOMING_LAUNCH} from '../constants/APIConstants'
const NextLaunch = () => {
  const [upcomingPayload, setUpcomingPayload] = useState([]);
  const upcomingLaunches = upcomingPayload.map((data) => (
    <tr>
      <td>{data.name}</td>
      <td>{data.date_utc}</td>
      <td>{data.launchpad}</td>
    </tr>
  ));

  React.useEffect(() => {
    axios
      .get(API_BASE_URL + UPCOMING_LAUNCH)
      .then((res) => {
        setUpcomingPayload(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <Row className="h-100vh background-purple">
        <Col sm="12" md={12}>
          <h3 className="titleText">Upcoming : Next Launches</h3>
          <Col sm="8" md={8} className="count-down-content">
            <Card>
              <CardBody className="background-grey">
                <Table className="table">
                  <thead>
                    <tr>
                      <th>Mission</th>
                      <th>Date (UTC)</th>
                      <th>Launchpad</th>
                    </tr>
                  </thead>
                  <tbody>{upcomingLaunches}</tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default NextLaunch;
