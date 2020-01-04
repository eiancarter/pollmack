import React from 'react';
import { Grommet, Box, Table, TableHeader, TableRow, TableCell, TableBody, Button } from 'grommet';
import { grommet } from "grommet/themes";


const candidateButton = {
    background: 'white',
    borderRadius: '6px',
    color: 'navy',
    textAlign: 'center',
    padding: '5px',
    fontSize: '1rem'
  };
  
  const candidateCards = {
    color: 'white',
    textAlign: 'center',
    fontSize: '1.5rem',
    fontStyle: 'bold',
  }
  
  const candidateCardContent = {
    padding: "4px 16px 20px 16px",
    boxShadow: "1px 1px 2px 2px lightgrey",
    margin: "15px"
  };
  
const CandidateRoster = () => {
    return (
        <Grommet theme={grommet}>
        <Box style={candidateCardContent}
          width='medium'
          height='medium'
          justify="center"
          align="center"
          pad="large"
          background="linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)"
          round="medium"
        >
            <Table style={candidateCards}
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
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                    <TableCell scope="row">
                        <strong>Eric Crenshaw</strong>
                    </TableCell>
                    <TableCell>Democrat</TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell scope="row">
                        <strong>Chris Pelosi</strong>
                    </TableCell>
                    <TableCell>Republican</TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell scope="row">
                        <strong>Donald Trump</strong>
                    </TableCell>
                    <TableCell>Republican</TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell scope="row">
                        <strong>Barrack Obama</strong>
                    </TableCell>
                    <TableCell>Democrat</TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell scope="row">
                        <strong>Hillary Clinton</strong>
                    </TableCell>
                    <TableCell>Criminal</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
          <br></br>
          <Box>
            <Button style={candidateButton}>Add Candidate</Button>
          </Box>
        </Box>
      </Grommet>
    )
}

export default CandidateRoster;