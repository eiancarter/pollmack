import React, { useState, useEffect } from 'react';
import { Grommet, Box, Table, TableHeader, TableRow, TableCell, TableBody, Header } from 'grommet';
import { grommet } from "grommet/themes";
import axios from 'axios';
import ContributionForm from './ContributionForm';
import CandidateForm from './CandidateForm';
import { Button, ButtonToolbar } from 'react-bootstrap';
import PostList from './PostList';
// import { candidateList } from '../../data';
  
const CandidateRoster = props => {
  const [candidates, setCandidates] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [candidateModalShow, setCandidateModalShow] = useState(false);
    useEffect(() => {
      axios
          .get('http://localhost:5600/api/candidates')
          .then(response => {
              console.log(response);
              setCandidates(response.data);
          })
          .catch (error => {
              console.log('No Candidates Found', error);
          })
    }, [setCandidates]);
    return (
        <Grommet theme={grommet}>
        <Box
          style={{color:'white', boxShadow:'1px 1px 3px grey' }}
          width='large'
          height='large'
          justify="center"
          align="center"
          pad="large"
          background="linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)"
          round="medium"
        >
          <Header>My Candidates</Header>
          <Table
              align="center"
          >
              <TableHeader>
                  <TableRow>
                  <TableCell scope="col" border="bottom">
                      Name
                  </TableCell>
                  <TableCell scope="col" border="bottom">
                      Party
                  </TableCell>
                  <TableCell scope="col" border="bottom">
                      Office
                  </TableCell>
                  <TableCell scope="col" border="bottom">
                      Total
                  </TableCell>
                  </TableRow>
              </TableHeader>
              <TableBody>
                {/* <TableRow><TableCell>hello</TableCell></TableRow> */}
                  {candidates.map( candidate => (
                    <TableRow key={candidate.id}>
                      <TableCell scope="row"><strong>{candidate.name}</strong></TableCell>
                      <TableCell>{candidate.party}</TableCell>
                      <TableCell>{candidate.office}</TableCell>
                      <TableCell>$200</TableCell>
                      <ButtonToolbar>
                        <Button style={{margin:'2%'}} variant='secondary' onClick={()=> setModalShow(true)}>
                          Contribute
                        </Button>
                        <ContributionForm 
                          show={modalShow}
                          onHide={()=> setModalShow(false)}
                        />
                      </ButtonToolbar>
                    </TableRow>
                  ))}
              </TableBody>
          </Table>
          <br></br>
          <ButtonToolbar>
            <Button variant='secondary' onClick={()=> setCandidateModalShow(true)}>
              Add Candidate
            </Button>
            <CandidateForm 
              show={candidateModalShow}
              onHide={()=> setCandidateModalShow(false)}
            />
          </ButtonToolbar>
          <Box style={{marginTop:"2%"}} direction="row" align="center" gap="medium">
            <PostList />
          </Box>
        </Box>
      </Grommet>
    )
}

export default CandidateRoster;