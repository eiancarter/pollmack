import React from 'react';
import { Grommet, Box, Paragraph } from 'grommet';
import { grommet } from 'grommet/themes';


const styleCard = {
    margin: "12px 0px",
    boxShadow: "0px 0px 8px #ccc",
    borderRadius: "8px",
    color: "#253B56",
    height: "200px",
    width: "450px",
    position: "relative",
    display: "inline-block",
    overflow: "hidden",
    cursor: "pointer"
  };
  
  // const styleImage = {
  //   height: 120,
  //   backgroundColor: "lightGray",
  //   borderRadius: "8px 8px 0 0",
  //   overflow: "hidden"
  // };
  
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


const OrganizationCard = (props) => {
    return (
        <Grommet theme={grommet}>
            <Box style={styleCard} align='center' key={props.id}>
                <Box style={styleCardContent} align='center'>
                    <img src={props.photoUrl} alt='candidate'/>
                    <Paragraph style={styleCardTitle}>{props.name}</Paragraph>
                    <Paragraph style={styleLocationLabel}>Address: {props.address}</Paragraph>
                    <Paragraph style={styleDescription}>Party: {props.party}</Paragraph>
                    <Paragraph style={styleDescription}>Contact: {props.phones}, {props.state}</Paragraph>    
                    <Paragraph style={styleDescription}>Website: {props.urls}</Paragraph>    
                    {/* <Paragraph style={styleDescription}>Status: {props.channels}</Paragraph>     */}
                </Box>
            </Box>
            {/* <Heading>Social Organizations</Heading>
            <Box align='center'>
                <Box border='all' align='center'>
                    <Heading>Organization Name</Heading>
                    <Heading>Member Since</Heading>
                    <Paragraph>Total Donations</Paragraph>
                </Box>
            </Box> */}
        </Grommet>
    )
};

export default OrganizationCard;