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
      pad="large"
      round="small"
      style={{boxShadow:"1px 1px 3px grey"}}
    >
      <Text>Balance: $20</Text>
      <br></br>
      <Box
          direction='column'
        >
        <Button type='submit' label='Add' primary={true} />
        <br></br>
        <Button type='submit' label='Payments' primary={true} />
      </Box>
    </Box>
  </Grommet>
);

export default FundBox;