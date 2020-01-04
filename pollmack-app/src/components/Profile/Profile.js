import React from "react";

import { Anchor, Box, Grommet, Header } from "grommet";
import { grommet } from "grommet/themes";
import ProfileAvatar from './ProfileAvatar';
import FundBox from './FundBox';
import AvatarBox from './AvatarBox';
import PostList from './PostList';
import UserCandidates from "./CandidateRoster";
import UserBio from './UserBio';

const profileStyle = {
  display: 'flex',
  flexDirection: 'row'
};

const Profile = () => (
  <Grommet theme={grommet}>
    <Header background="light-4" pad="small">
      <Anchor label="pollmack" href="/profile">pollmack</Anchor>
      <Box direction="row" gap="medium">
        <Anchor label="Search Candidates" href="/profile/organizations" />
      </Box>
      <Anchor href="/profile">
        <ProfileAvatar />
      </Anchor>
    </Header>
    <Box style={profileStyle}>
        <AvatarBox />
        <FundBox />
        <UserCandidates />
    </Box>
    <Box direction="row" gap="medium">
      <UserBio />
      <PostList />
    </Box>
  </Grommet>
);

export default Profile;
