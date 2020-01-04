import React from 'react'; 
import { Grommet, Box, Heading, SubHeading, Text } from "grommet";
import { grommet } from 'grommet/themes';
import Avatar from './ProfileAvatar';

const styleCard = {
    color: "#253B56",
    padding: '15px',
  };
  
  const styleImage = {
    backgroundColor: "lightGray",
    overflow: "hidden",
    width: "100%",
    minHeight: "187px"
  };
  
  const styleCardTitle = {
    fontFamily: "Avenir-Heavy",
    fontSize: "1.3rem",
    fontWeight: 600,
    color: "#1994D7",
  };
  
  const styleLocationLabel = {
    fontSize: 14,
    color: "#8294AA"
  };
  
  const styleDescription = {
    fontSize: 14,
  };
  
  const styleCardContent = {
    // padding: "4px 16px 20px 16px",
    boxShadow: "1px 1px 2px 2px lightgrey"
  };

const AvatarBox = () => {
    return (
      <Grommet theme={grommet}>
        <Box style={styleCard}>
            <Box style={styleCardContent}
                width='medium'
                height='medium'
                justify="center"
                align="center"
                pad="xlarge"
                round="medium"
            >
                <Avatar size="large" style={styleImage}/>
                <Heading style={styleCardTitle}>Veronica Mars</Heading>
                <Text style={styleLocationLabel}>Member Since: February 2018</Text>
                <Text style={styleDescription}>Total Donated: $389.00</Text>
                <Text style={styleDescription}>Candidates Backed: 3</Text>
            </Box>
        </Box>
      </Grommet>
    )
}

export default AvatarBox;