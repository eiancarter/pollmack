import React from "react";
import { Box, Grommet } from "grommet";
import AvatarBox from './AvatarBox';
import CandidateRoster from "./CandidateRoster";
import AddressForm from "./AddressForm";
import NewsFeed from "./NewsFeed";
import PostList from './PostList';


const Profile = () => (
  <Grommet>
    <Box style={{margin:"2% 2% 0% 2%", background: '#d9d9d9' }} align="center" direction="row" gap="xsmall">
        <AvatarBox />
        <AddressForm />
        <CandidateRoster />
        <NewsFeed />
    </Box>
    <Box style={{marginTop:"2%"}} direction="row" align="center" gap="xsmall">
        <PostList />
    </Box>
  </Grommet>
);

export default Profile;
