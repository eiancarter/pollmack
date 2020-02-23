import React from "react";

import { Anchor, Box, Grommet, Header } from "grommet";
import { grommet } from "grommet/themes";
import ProfileAvatar from './ProfileAvatar';
import AvatarBox from './AvatarBox';
import CandidateRoster from "./CandidateRoster";
import AddressForm from "./AddressForm";
import NewsFeed from "./NewsFeed";


const Profile = () => (
  <Grommet theme={grommet}>
    {/* <Header style={{ width:"100%" }} background="brand" pad="small">
      <Anchor style={{color:"white"}} label="pollmack" href="/profile" />
      <Box direction="row" gap="medium">
        <Anchor style={{color:"white"}} label="search candidates" href="/profile/candidates" />
      </Box>
      <Anchor href="/profile">
        <ProfileAvatar />
      </Anchor>
    </Header> */}
    <Box style={{margin:"2% 2% 0% 2%"}} align="center" direction="row" gap="medium">
        <AvatarBox />
        <AddressForm />
        <CandidateRoster />
        <NewsFeed />
    </Box>
    {/* <Box style={{marginTop:"2%"}} direction="row" align="center" gap="medium">
        <PostList />
    </Box> */}
  </Grommet>
);

export default Profile;
