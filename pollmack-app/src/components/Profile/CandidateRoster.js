import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { addCandidate } from '../../redux/actions';
import { Grommet, Box, Table, TableHeader, TableRow, TableCell, TableBody, Header } from 'grommet';
import { grommet } from "grommet/themes";
import { Button, ButtonToolbar } from 'react-bootstrap';
import ContributionForm from './ContributionForm';
import CandidateForm from './CandidateForm';
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
          background="brand"
          round="small"
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
                  {candidates.map( candidate => (
                    <TableRow key={candidate.id} candidate={candidate}>
                      <TableCell scope="row"><strong>{candidate.name}</strong></TableCell>
                      <TableCell>{candidate.party}</TableCell>
                      <TableCell>{candidate.office}</TableCell>
                      <TableCell>$200</TableCell>
                      <TableCell>
                        <ButtonToolbar>
                          <Button style={{margin:'2%'}} variant='secondary' onClick={()=> setModalShow(true)}>
                            Contribute
                          </Button>
                          <ContributionForm 
                            show={modalShow}
                            onHide={()=> setModalShow(false)}
                          />
                        </ButtonToolbar>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
          </Table>
          <br></br>
          <ButtonToolbar>
            <Button variant='primary' onClick={()=> setCandidateModalShow(true)}>
              Add Candidate
            </Button>
            <CandidateForm
              // addCandidate={props.addCandidate} 
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

const mapStateToProps = state => {
  return {
    ...state,
    candidates: state.candidates,
    isFetching: state.isFetching,
  };
};

export default connect(mapStateToProps, { addCandidate }) (CandidateRoster);