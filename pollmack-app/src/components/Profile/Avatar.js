import React from 'react';
import { Box } from 'grommet';


const Avatar = ({ name, ...rest }) => (
    <Box
      height="xxsmall"
      width="xxsmall"
      round="full"
      background="url(//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80)"
      {...rest}
    />
  );

export default Avatar;