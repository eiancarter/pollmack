import React from "react";
import { Box, Grommet, Header} from "grommet";
import { grommet } from "grommet/themes";

import HomeLogin from './HomeLogin';

const HomeNav = () => (
  <Grommet theme={grommet}>
    <Header background="light-4" pad="small"> pollmack
      <Box direction="row" gap="medium">
        <HomeLogin />
      </Box>
    </Header>
  </Grommet>
);

export default HomeNav;
