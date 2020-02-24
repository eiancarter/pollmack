import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getCandidates } from '../../redux/actions';
import { Grommet, Box, Table, TableHeader, TableRow, TableCell, TableBody, Header } from 'grommet';
import { Button, ButtonToolbar } from 'react-bootstrap';
import ContributionForm from './ContributionForm';
import CandidateForm from './CandidateForm';
  
const CandidateRoster = props => {
  const [candidates, setCandidates] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [candidateModalShow, setCandidateModalShow] = useState(false);
    useEffect(() => {
      axios
          .get('http://pollmack.herokuapp.com/api/candidates')
          .then(response => {
              console.log(response);
              setCandidates(response.data);
          })
          .catch (error => {
              console.log('No Candidates Found', error);
          })
    }, [setCandidates]);
    return (
        <Grommet>
        <Box
          style={{ color: '#423e3a', boxShadow:'1px 1px 3px grey', background:'white', overflowY:'scroll' }}
          width='large'
          height='large'
          justify="start"
          align="center"
          pad="large"
          round="small"
        >
          <Header style={{ margin:"4%", fontWeight:"bold", fontSize:"2rem"}}>My Candidates</Header>
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
            <Button style={{ fontWeight:"bold", background: "#20516e", borderRadius:"20px" }} onClick={()=> setCandidateModalShow(true)}>
              Add Candidate
            </Button>
            <CandidateForm
              // addCandidate={props.addCandidate} 
              show={candidateModalShow}
              onHide={()=> setCandidateModalShow(false)}
            />
          </ButtonToolbar>
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

export default connect(mapStateToProps, { getCandidates }) (CandidateRoster);
