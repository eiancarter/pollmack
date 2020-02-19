import React from "react";

import { Anchor, Box, Grommet, Header } from "grommet";
import { grommet } from "grommet/themes";
import ProfileAvatar from './ProfileAvatar';
import FundBox from './FundBox';
import AvatarBox from './AvatarBox';
import PostList from './PostList';
import UserCandidates from "./CandidateRoster";
import UserBio from './UserBio';
import AddressForm from "./AddressForm";


const Profile = () => (
  <Grommet theme={grommet}>
    <Header background="light-4" pad="small">
      <Anchor label="pollmack" href="/profile" />
      <Box direction="row" gap="medium">
        <Anchor label="Search Candidates" href="/profile/candidates" />
      </Box>
      <Anchor href="/profile">
        <ProfileAvatar />
      </Anchor>
    </Header>
    <Box style={{margin:"2% 2% 0% 2%"}} align="center" direction="row" gap="medium">
        <AvatarBox />
        <AddressForm />
        <UserCandidates />
    </Box>
    <Box style={{marginTop:"2%"}} direction="row" align="center" gap="medium">
        <FundBox />
        <PostList />
    </Box>
  </Grommet>
);

export default Profile;
