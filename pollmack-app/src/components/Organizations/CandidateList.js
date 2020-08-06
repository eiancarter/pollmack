import React, {useState, useEffect} from 'react';
import { Grommet, Box, Heading, Button, Paragraph } from 'grommet';
import axios from 'axios';

const styleCard = {
    margin: "12px 0px",
    boxShadow: "0px 0px 8px #ccc",
    borderRadius: "8px",
    color: '#423e3a',
    height: "280px",
    width: "450px",
    position: "relative",
    display: "inline-block",
    overflow: "hidden",
    cursor: "pointer",
    minWidth: "400px",
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
    color: '#423e3a'
  };
  
  const styleDescription = {
    fontSize: 14,
    margin: "8px 0 0 0"
  };
  
  const styleCardContent = {
    padding: "4px 16px 20px 16px",
  };
const CandidateList = () => {
    const [candidates, setCandidates] = useState([]);
    const [elections, setElections] = useState([]);

    useEffect(() => {
        const address = 'USA'
        axios
            .get('https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyAKyvvk_iDO_aZnftoRKrVyNIzlYw_9XRo&address=300%20Bryant%20St.%20Palo%20Alto%20CA"', address)
            .then(response => {
                console.log(response.data.officials);
                setCandidates(response.data.officials);
            })
            .catch (error => {
                console.log('No Candidates Found', error);
            })
    }, [setCandidates]);

    useEffect(() => {
        const address = 'USA'
        axios
            .get('https://www.googleapis.com/civicinfo/v2/elections?key=AIzaSyAKyvvk_iDO_aZnftoRKrVyNIzlYw_9XRo&address=300%20Bryant%20St.%20Palo%20Alto%20CA"', address)
            .then(response => {
                console.log(response.data.elections);
                setElections(response.data.elections);
            })
            .catch (error => {
                console.log('No Elections Found', error);
            })
    }, [setElections]);
    return (
        <Grommet>
            <Heading>Your Representatives</Heading>
            <Button>Filter</Button>
            <Box style={{ overflowX:"scroll" }} direction="row" gap="small">
                {candidates.map(candidate => {
                    return (
                        <Box style={styleCard} align='center' key={candidate.id}>
                            <Box style={styleCardContent} key={candidate.id} align='center'>
                                <img style={styleImage} src={candidate.photoUrl} alt='candidate'/>
                                <Paragraph style={styleCardTitle}>{candidate.name}</Paragraph>
                                <Paragraph style={styleDescription}>{candidate.party}</Paragraph>
                                <Paragraph style={styleDescription}>Contact: {candidate.phones}</Paragraph>    
                                <Paragraph style={styleDescription}>Website: {candidate.urls}</Paragraph> 
                            </Box>
                        </Box>
                    )
                })}
            </Box>
            <Heading>Upcoming Elections</Heading>
            <Button>Filter</Button>
            <Box style={{ overflowX:"scroll" }} direction="row" gap="small">
                {elections.map(election => {
                    return (
                        <Box style={styleCard} align='center' key={election.id}>
                            <Box style={styleCardContent} key={election.id} align='center'>
                                <Paragraph style={styleCardTitle}>{election.name}</Paragraph>
                                <Paragraph style={styleDescription}>{election.electionDay}</Paragraph>    
                            </Box>
                        </Box>
                    )
                })}
            </Box>
        </Grommet>
    )
};

export default CandidateList;
 
