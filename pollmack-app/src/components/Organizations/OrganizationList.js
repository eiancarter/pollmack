import React, {useState, useEffect} from 'react';
import { Grommet, Box, Anchor, Header, Heading } from 'grommet';
import { grommet } from 'grommet/themes'; 
import axios from 'axios';

import OrganizationCard from './OrganizationCard';
import ProfileAvatar from '../Profile/ProfileAvatar';


const OrganizationList = () => {
    //DxDOfG30fwBmLeYewtahiYwXVL5LSc99rFOaB9mP = API Key
    const [candidates, setCandidates] = useState([]);
    useEffect(() => {
        axios
            .get('https://api.open.fec.gov/v1/candidates/?page=1&per_page=20&api_key=DxDOfG30fwBmLeYewtahiYwXVL5LSc99rFOaB9mP&sort_null_only=false&sort_nulls_last=false&state=CA&sort=name&sort_hide_null=false&election_year=2018&election_year=2017')
            .then(response => {
                console.log(response);
                setCandidates(response.data.results);
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
            <Heading>Political Candidates</Heading>
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
 
