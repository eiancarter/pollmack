import React, { useState, useEffect } from 'react';
import { Grommet, Box, Table, TableHeader, TableRow, TableCell, TableBody, Button } from 'grommet';
import { grommet } from "grommet/themes";
import axios from 'axios';
import ContributionForm from './ContributionForm';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
// import { candidateList } from '../../data';
  
const CandidateRoster = props => {
  const [candidates, setCandidates] = useState([]);
  const [modalShow, setModalShow] = useState(false);
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
          width='large'
          height='medium'
          justify="center"
          align="center"
          pad="large"
          background="linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)"
          round="medium"
        >
          <Table
              align="center"
              color="white">
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
                  </TableRow>
              </TableHeader>
              <TableBody>
                {/* <TableRow><TableCell>hello</TableCell></TableRow> */}
                  {candidates.map( candidate => (
                    <TableRow key={candidate.id}>
                      <TableCell scope="row"><strong>{candidate.name}</strong></TableCell>
                      <TableCell>{candidate.party}</TableCell>
                      <TableCell>{candidate.office}</TableCell>
                      <ButtonToolbar>
                        <button variant='primary' onClick={()=> setModalShow(true)}>
                          Contribute
                        </button>
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
          <Box>
            <Button style={{color:'white', border:'2px solid white', padding:'6px', borderRadius:'8px'}}>Add Candidate</Button>
          </Box>
        </Box>
      </Grommet>
    )
}

export default CandidateRoster;