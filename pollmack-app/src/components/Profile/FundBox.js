import React from "react";
import { Grommet, Box, Text } from "grommet";
import { Button } from 'react-bootstrap';


const FundBox = () => (
  <Grommet>
    <Box
      width='medium'
      height='medium'
      justify="center"
      align="center"
      pad="large"
      round="small"
    >
      <Text>Current Balance: $20</Text>
      <br></br>
      <Box
          direction='column'
        >
        <Button style={{ fontWeight:"bold", background: "#20516e", borderRadius:"20px" }} type='submit'>
          Add to Wallet
        </Button>
        <br></br>
        <Button style={{ fontWeight:"bold", background: "#20516e", borderRadius:"20px" }} type='submit'>
          Edit Payment Method
        </Button>
      </Box>
    </Box>
  </Grommet>
);

export default FundBox;