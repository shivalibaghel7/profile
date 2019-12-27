import React from "react";
import { Container, Table, Header } from "semantic-ui-react";

function Work() {
  return (
    <Container textAlign="justified" text fluid>
      <Header as="h4" color="yellow">
        Education
      </Header>
      <Table color="yellow">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Year of Completion</Table.HeaderCell>
            <Table.HeaderCell>Qualification</Table.HeaderCell>
            <Table.HeaderCell>Organization</Table.HeaderCell>
            <Table.HeaderCell>Grade</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>2019</Table.Cell>
            <Table.Cell>
              Bachelors of Technology (Computer Science and Engineering)
            </Table.Cell>
            <Table.Cell>Amity University, Noida</Table.Cell>
            <Table.Cell>86.6%</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>2015</Table.Cell>
            <Table.Cell>
              12<sup>th</sup>
            </Table.Cell>
            <Table.Cell>NCS, Delhi</Table.Cell>
            <Table.Cell>84% (CBSE)</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>2013</Table.Cell>
            <Table.Cell>
              10<sup>th</sup>
            </Table.Cell>
            <Table.Cell>APS, Bangalore</Table.Cell>
            <Table.Cell>10.0 (CBSE)</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <Header as="h4" color="purple">
        Work Experience
      </Header>
      <Table color="purple">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Month</Table.HeaderCell>
            <Table.HeaderCell>Organization</Table.HeaderCell>
            <Table.HeaderCell>Designation</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>June, 2019</Table.Cell>
            <Table.Cell>TATA Consultancy Services</Table.Cell>
            <Table.Cell>Assistant System Engineer Trainee</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>February, 2019</Table.Cell>
            <Table.Cell>Samsung R&D, Delhi</Table.Cell>
            <Table.Cell>Cloud Architect (Intern)</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>April, 2018</Table.Cell>
            <Table.Cell>Etrain Education, Delhi </Table.Cell>
            <Table.Cell>Web Designer (Intern)</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>May, 2017</Table.Cell>
            <Table.Cell>Empass, Gurgaon</Table.Cell>
            <Table.Cell>Android Developer (Intern)</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>March, 2017</Table.Cell>
            <Table.Cell>GreenMed Technologies, Chennai</Table.Cell>
            <Table.Cell>Website Developer (Intern)</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <Header as="h4" color="orange">
        Achievements
      </Header>
      <Table color="orange">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Details</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>IEEE Paper Publication</Table.Cell>
            <Table.Cell>
              Title - "Detecting Future Terrorism trend in India using
              Clustering Analysis"
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>IEEE Paper Publication</Table.Cell>
            <Table.Cell>
              Title - "Smart Homes Using Internet of Things"
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Android App on Google PlayStore</Table.Cell>
            <Table.Cell>TicTacToe</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Microsoft Certification</Table.Cell>
            <Table.Cell>Microsoft Word Specialist - Word 2016</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Container>
  );
}
export default Work;
