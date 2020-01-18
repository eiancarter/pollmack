import React from "react";

import { Grommet, Box, Text, Button } from "grommet";
import { grommet } from "grommet/themes";



const FundBox = () => (
  <Grommet theme={grommet}>
    <Box
      width='small'
      height='medium'
      justify="center"
      align="center"
      pad="large"
      round="medium"
    >
      <Text>Balance: $20</Text>
      <br></br>
      <Box
        >
        <Button>Add Funds</Button>
        <br></br>
        <Button>Edit Payments</Button>
      </Box>
    </Box>
  </Grommet>
);

export default FundBox;