import React, {useState, useEffect} from 'react';
import { Grommet, Box, Anchor, Header, Heading, Button, TextInput, Form, Paragraph } from 'grommet';
import { grommet } from 'grommet/themes'; 
import axios from 'axios';

import OrganizationCard from './OrganizationCard';
import ProfileAvatar from '../Profile/ProfileAvatar';

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
  
  const styleImage = {
    height: 120,
    backgroundColor: "lightGray",
    borderRadius: "8px 8px 0 0",
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
const CandidateList = () => {
    //AIzaSyAKyvvk_iDO_aZnftoRKrVyNIzlYw_9XRo = API Key
    const [candidates, setCandidates] = useState([]);
    useEffect(() => {
        const address = 'USA'
        axios
            .get('https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyAKyvvk_iDO_aZnftoRKrVyNIzlYw_9XRo&address=1263%20Pacific%20Ave.%20Kansas%20City%20KS"', address)
            .then(response => {
                console.log(response.data.officials);
                setCandidates(response.data.officials);
            })
            .catch (error => {
                console.log('No Candidates Found', error);
            })
    }, [setCandidates]);
    return (
        <Grommet theme={grommet}>
            <Header background="light-4" pad="small">
                <Anchor label="pollmack" href="/profile" />
                {/* <Box direction="row" gap="medium">
                    <Anchor label="Pending" href="/profile" />
                </Box> */}
                <Anchor href="/profile">
                    <ProfileAvatar />
                </Anchor>
            </Header>
            <Heading>Presidential Candidates</Heading>
            <Button>Filter</Button>
            <Box overflow="hidden" direction="row" gap="small">
                {candidates.map(candidate => {
                    return (
                        <div key={candidate.id}>
                            <img style={styleImage} src={candidate.photoUrl} alt='candidate'/>
                            <Paragraph style={styleCardTitle}>{candidate.name}</Paragraph>
                            <Paragraph style={styleLocationLabel}>Address: {candidate.address.line1}</Paragraph>
                            <Paragraph style={styleDescription}>{candidate.party}</Paragraph>
                            <Paragraph style={styleDescription}>Contact: {candidate.phones}</Paragraph>    
                            <Paragraph style={styleDescription}>Website: {candidate.urls}</Paragraph> 
                        </div>
                        // <OrganizationCard 
                        // key={candidate.id} 
                        // photo={candidate.photoUrl}
                        // name={candidate.name} 
                        // party={candidate.party} 
                        // contact={candidate.phones} 
                        // website={candidate.urls} 
                        // />
                    )
                })}
            </Box>
            <Heading>Congressional Candidates</Heading>
            <Button>Filter</Button>
            <Box overflow="hidden" direction="row" gap="small">
                {candidates.map(candidate => {
                    return (
                        <OrganizationCard 
                        key={candidate.id} 
                        name={candidate.name} 
                        party={candidate.party} 
                        office={candidate.phones} 
                        district={candidate.urls} 
                        // state={candidate.channels} 
                        status={candidate.address}
                        />
                    )
                })}
            </Box>
        </Grommet>
    )
};

export default CandidateList;
 
