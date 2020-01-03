import React from "react";

import { Anchor, Box, Grommet, Header, Heading } from "grommet";
import { grommet } from "grommet/themes";
import ProfileAvatar from './ProfileAvatar';
import FundBox from './FundBox';
import AvatarBox from './AvatarBox';
import PostList from './PostList';

const profileStyle = {
  display: 'flex',
  flexDirection: 'row'
};

const Profile = () => (
  <Grommet theme={grommet}>
    <Header background="light-4" pad="small">
      <Heading>pollmack</Heading>
      <Box direction="row" gap="medium">
        <Anchor label="Home" href="/profile" />
        <Anchor label="Search Candidates" href="/profile/organizations" />
      </Box>
      <ProfileAvatar />
    </Header>
    <Box style={profileStyle}>
        <AvatarBox />
        <FundBox />
    </Box>
    <Box>
      <PostList />
    </Box>
  </Grommet>
);

export default Profile;
