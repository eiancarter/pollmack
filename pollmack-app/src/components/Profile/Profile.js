import React from "react";

import { Anchor, Box, Grommet, Header } from "grommet";
import { grommet } from "grommet/themes";
import Avatar from './Avatar';
import FundBox from './FundBox';
import AvatarBox from './AvatarBox';


const Profile = () => (
  <Grommet theme={grommet}>
    <Header background="light-4" pad="small"> pollmack
      <Box direction="row" gap="medium">
        <Anchor label="Home" href="/profile" />
      </Box>
      <Avatar />
    </Header>
    <Box>
        <AvatarBox />
    </Box>
    <Box>
        <FundBox />
    </Box>
  </Grommet>
);

export default Profile;
