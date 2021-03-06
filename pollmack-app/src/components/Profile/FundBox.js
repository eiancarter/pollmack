import React, { useState } from "react";
import { Grommet, Box, Text } from "grommet";
import { Button } from 'react-bootstrap';


const FundBox = () => {

  const [funds, setFunds] = useState(0);

  return (
    <Grommet>
      <Box
        width='medium'
        height='medium'
        justify="center"
        align="center"
        pad="large"
        round="small"
      >
        <Text>Current Balance: ${funds}</Text>
        <br></br>
        <Box
            direction='column'
          >
          <Button onClick={()=> setFunds(funds + 50)} style={{ fontWeight:"bold", background: "#20516e", borderRadius:"20px" }} type='submit'>
            Add to Wallet
          </Button>
          <br></br>
          <Button onClick={()=> setFunds(funds - 50)} style={{ fontWeight:"bold", background: "#20516e", borderRadius:"20px" }} type='submit'>
            Remove from Wallet
          </Button>
        </Box>
      </Box>
    </Grommet>
  );
}

export default FundBox;