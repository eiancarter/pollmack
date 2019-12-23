import React from 'react';
import { Grommet, Box, TextArea } from 'grommet';
import { grommet } from 'grommet/themes';

const CreatePost = props => {
    const [value, setValue] = React.useState("");
  
    const onChange = event => setValue(event.target.value);

    return (
        <Grommet theme={grommet}>
            <Box align='center' pad='large'>
                <TextArea value={value} onChange={onChange} {...props} />
            </Box>
        </Grommet>
    );
};

export default CreatePost;
