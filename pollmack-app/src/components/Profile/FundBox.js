import React from "react";

import { Grommet, Box, Text, Button } from "grommet";
import { grommet } from "grommet/themes";

const FundBox = () => (
  <Grommet theme={grommet}>
    <Box
      width='medium'
      height='medium'
      justify="center"
      align="center"
      pad="xlarge"
      background="linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)"
      round="large"
    >
      <Text color="white">Current Balance: $642.00</Text>
      <Box
        >
        <Button color="white">Add Funds</Button>
        <Button color="white">Edit Payment Methods</Button>
      </Box>
    </Box>
  </Grommet>
);

export default FundBox;