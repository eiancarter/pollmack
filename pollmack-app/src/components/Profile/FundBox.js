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

const fundCardContent = {
  padding: "4px 16px 20px 16px",
  boxShadow: "1px 1px 2px 2px lightgrey",
  margin: "15px"
};

const FundBox = () => (
  <Grommet theme={grommet}>
    <Box style={fundCardContent}
      width='small'
      height='medium'
      justify="center"
      align="center"
      pad="large"
      round="medium"
    >
      <Text style={currBalance}>Balance: ${currBalance.amount}</Text>
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