import React, {useState, useEffect} from 'react';
import { Grommet, Box, Anchor, Header, Heading, Button } from 'grommet';
import { grommet } from 'grommet/themes'; 
import axios from 'axios';

import OrganizationCard from './OrganizationCard';
import ProfileAvatar from '../Profile/ProfileAvatar';


const OrganizationList = () => {
    //AIzaSyAKyvvk_iDO_aZnftoRKrVyNIzlYw_9XRo = API Key
    const [candidates, setCandidates] = useState([]);
    useEffect(() => {
        axios
            .get('https://www.googleapis.com/civicinfo/v2/elections?key=AIzaSyAKyvvk_iDO_aZnftoRKrVyNIzlYw_9XRo')
            .then(response => {
                console.log(response);
                setCandidates(response.data.elections);
            })
            .catch (error => {
                console.log('No Candidates Found', error);
            })
    }, []);
    return (
        <Grommet theme={grommet}>
            <Header background="light-4" pad="small"> pollmack
                <Box direction="row" gap="medium">
                    <Anchor label="Home" href="/profile" />
                </Box>
                <ProfileAvatar />
            </Header>
            <Heading>Presidential Candidates</Heading>
            <Button>Filter</Button>
            <Box overflow="hidden" direction="row" gap="small">
                {candidates.map(candidate => {
                    return (
                        <OrganizationCard 
                        key={candidate.id} 
                        name={candidate.name} 
                        party={candidate.party_full} 
                        office={candidate.office_full} 
                        district={candidate.district} 
                        state={candidate.state} 
                        status={candidate.candidate_status}/>
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
                        party={candidate.party_full} 
                        office={candidate.office_full} 
                        district={candidate.district} 
                        state={candidate.state} 
                        status={candidate.candidate_status}/>
                    )
                })}
            </Box>
        </Grommet>
    )
};

export default OrganizationList;
 
