import React, { useState } from 'react';
import { Grommet, TextArea, Button, Box } from 'grommet';
import { grommet } from 'grommet/themes';



const CreatePost = props => {
    const [value, setValue] = useState("");
    const onChange = event => setValue(event.target.value);
    console.log(onChange);

    return (
        <Grommet theme={grommet}>
            <Box align='center'>
                <TextArea
                    align='left' 
                    value={value} 
                    onChange={onChange} 
                    {...props} />
            </Box>
            <Button>Post+</Button>
        </Grommet>
    );
};

export default CreatePost;
