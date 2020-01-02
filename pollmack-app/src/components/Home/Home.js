import React from 'react';
import { Grommet, Box } from 'grommet';

import HomeNav from './HomeNav';
import HomeSignUp from './HomeSignUp';
import HomeHeading from './HomeHeading';

function Home(){
    return (
        <Grommet>
            <Box>
                <HomeNav />
            </Box>
            <Box>
                <HomeHeading />
            </Box>
            <Box>
                <HomeSignUp />
            </Box>
        </Grommet>
    )
}

export default Home;