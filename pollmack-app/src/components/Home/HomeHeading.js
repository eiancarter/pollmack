import React from 'react';

import { Grommet, Heading } from "grommet";
import { grommet } from "grommet/themes";

  
  const HomeHeading = () => (
    <Grommet theme={grommet}>
      <Heading>Manage your contributions...</Heading>
      <Heading>Observe your impact...</Heading>
    </Grommet>
  );

  export default HomeHeading;