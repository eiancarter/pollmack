import React from 'react';
import { Grommet, Box, Text, Button } from 'grommet';
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
    name: 'Dan Crenshaw'
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
          <Text style={candidateCards}>{candidateCards.name}</Text>
          <br></br>
          <Box>
            <Button style={candidateButton}>Add Candidate</Button>
          </Box>
        </Box>
      </Grommet>
    )
}

export default CandidateRoster;