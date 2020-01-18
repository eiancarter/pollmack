import React from 'react';
import { Grommet, Box, Table, TableHeader, TableRow, TableCell, TableBody, Button } from 'grommet';
import { grommet } from "grommet/themes";

  
const CandidateRoster = () => {
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
                <TableBody>
                  <TableRow>
                    <TableCell scope="row"><strong>Eric Crenshaw</strong></TableCell>
                    <TableCell>Democrat</TableCell>
                    <TableCell>President</TableCell>
                    <TableCell>$100</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell scope="row"><strong>Chris Pelosi</strong></TableCell>
                    <TableCell>Republican</TableCell>
                    <TableCell>President</TableCell>
                    <TableCell>$100</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell scope="row"><strong>Donald Trump</strong></TableCell>
                    <TableCell>Republican</TableCell>
                    <TableCell>President</TableCell>
                    <TableCell>$100</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell scope="row"><strong>Barrack Obama</strong></TableCell>
                    <TableCell>Democrat</TableCell>
                    <TableCell>President</TableCell>
                    <TableCell>$100</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell scope="row"><strong>Hillary Clinton</strong></TableCell>
                    <TableCell>Criminal</TableCell>
                    <TableCell>President</TableCell>
                    <TableCell>$100</TableCell>
                  </TableRow>
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