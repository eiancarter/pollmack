import React, { useState } from 'react';
import { Grommet, TextArea, Button, Box } from 'grommet';
import { grommet } from 'grommet/themes';

const postButton = {
    background: 'white',
    borderRadius: '6px',
    color: 'navy',
    textAlign: 'center',
    padding: '5px',
    fontSize: '1rem'
  };

const CreatePost = props => {
    const [value, setValue] = useState("");
    const onChange = event => setValue(event.target.value);

    return (
        <Grommet theme={grommet}>
            <Box align='center'>
                <TextArea
                    align='left' 
                    value={value} 
                    onChange={onChange} 
                    {...props} />
            </Box>
            <Button style={postButton}>Post+</Button>
        </Grommet>
    );
};

export default CreatePost;
