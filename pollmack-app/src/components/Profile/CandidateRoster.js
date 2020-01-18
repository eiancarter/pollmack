import React, { useState, useEffect } from 'react';
import { Grommet, Box, Table, TableHeader, TableRow, TableCell, TableBody, Button } from 'grommet';
import { grommet } from "grommet/themes";
import axios from 'axios';
import { data } from '../../data';
  
const CandidateRoster = props => {
  const [candidates, setCandidates] = useState([]);

  // useEffect = () => {}


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
                    <TableCell scope="col" border="bottom">
                        Contributed
                    </TableCell>
                    </TableRow>
                </TableHeader>
                <TableBody>hello
                    {/* {props.candidates.map( candidate => {
                      <TableRow key={props.candidate.id}>
                        <TableCell scope="row"><strong>{candidate.name}</strong></TableCell>
                        <TableCell>{candidate.party}</TableCell>
                        <TableCell>{candidate.office}</TableCell>
                        <TableCell>{candidate.contribution}</TableCell>
                      </TableRow>
                    })} */}
                </TableBody>
            </Table>
          <br></br>
          <Box>
            <Button>Add Candidate</Button>
          </Box>
        </Box>
      </Grommet>
    )
}

export default CandidateRoster;