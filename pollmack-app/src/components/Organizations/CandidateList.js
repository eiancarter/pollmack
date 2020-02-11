import React, {useState, useEffect} from 'react';
import { Grommet, Box, Anchor, Header, Heading, Button, TextInput, Form } from 'grommet';
import { grommet } from 'grommet/themes'; 
import axios from 'axios';

import OrganizationCard from './OrganizationCard';
import ProfileAvatar from '../Profile/ProfileAvatar';


const CandidateList = () => {
    //AIzaSyAKyvvk_iDO_aZnftoRKrVyNIzlYw_9XRo = API Key
    const [candidates, setCandidates] = useState([]);
    useEffect(() => {
        const address = 'USA'
        axios
            .get('https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyAKyvvk_iDO_aZnftoRKrVyNIzlYw_9XRo&address=1263%20Pacific%20Ave.%20Kansas%20City%20KS"', address)
            .then(response => {
                console.log(response);
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
                        <OrganizationCard 
                        key={candidate.id} 
                        photo={candidate.photoUrl}
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
 
