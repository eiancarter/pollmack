import React from "react";

import { Grommet, Box, Text, Button } from "grommet";
import { grommet } from "grommet/themes";


const fundButton = {
  background: 'white',
  borderRadius: '6px',
  color: 'navy',
  textAlign: 'center',
  padding: '5px',
  fontSize: '1rem'
};

const currBalance = {
  color: 'white',
  textAlign: 'center',
  fontSize: '1.5rem',
  fontStyle: 'bold',
  amount: '647.00'
}

const FundBox = () => (
  <Grommet theme={grommet}>
    <Box
      // width='medium'
      height='medium'
      justify="center"
      align="center"
      pad="xlarge"
      background="linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)"
      round="medium"
    >
      <Text style={currBalance}>Current Balance: ${currBalance.amount}</Text>
      <br></br>
      <Box
        >
        <Button style={fundButton}>Add Funds</Button>
        <br></br>
        <Button style={fundButton}>Edit Payments</Button>
      </Box>
    </Box>
  </Grommet>
);

export default FundBox;