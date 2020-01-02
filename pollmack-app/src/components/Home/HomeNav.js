import React from "react";
import { Box, Grommet, Header, Heading} from "grommet";
import { grommet } from "grommet/themes";

import HomeLogin from './HomeLogin';

const HomeNav = () => (
  <Grommet theme={grommet}>
    <Header background="light-4" pad="small">
      <Heading>pollmack</Heading>
      <Box direction="row" gap="small">
        <HomeLogin />
      </Box>
    </Header>
  </Grommet>
);

export default HomeNav;
