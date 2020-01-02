import React from 'react'; 
import { Box, Heading } from "grommet";

import Avatar from './ProfileAvatar';

const styleCard = {
    margin: '0 auto',
    // boxShadow: "0px 0px 8px #ccc",
    // borderRadius: "8px",
    color: "#253B56",
    padding: '15px',
  };
  
  const styleImage = {
    height: 120,
    width: 120,
    backgroundColor: "lightGray",
    borderRadius: "8px 8px 8px 8px",
    overflow: "hidden"
  };
  
  const styleCardTitle = {
    fontFamily: "Avenir-Heavy",
    fontSize: 20,
    fontWeight: 600,
    margin: "12px 0px 0px 0px",
    color: "#1994D7"
  };
  
  const styleLocationLabel = {
    fontSize: 14,
    margin: "4px 0",
    color: "#8294AA"
  };
  
  const styleDescription = {
    fontSize: 14,
    margin: "8px 0 0 0"
  };
  
  const styleCardContent = {
    padding: "4px 16px 20px 16px",
  };

const AvatarBox = () => {
    return (
        <Box style={styleCard}>
            <Box style={styleCardContent}
                width='medium'
                height='medium'
                justify="center"
                align="center"
                pad="xlarge"
                round="large"
            >
                <Avatar style={styleImage}/>
                <Heading style={styleCardTitle}>Veronica Mars</Heading>
                <Heading style={styleLocationLabel}>Member Since: February 2018</Heading>
                <Heading style={styleDescription}>Total Donated: $389.00</Heading>
                <Heading style={styleDescription}>Candidates Backed: 3</Heading>
            </Box>
        </Box>
    )
}

export default AvatarBox;