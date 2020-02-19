import React, { useState } from 'react'; 
import { Grommet, Box, Heading, Text } from "grommet";
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import AddressForm from './AddressForm';
import { grommet } from 'grommet/themes';
import Avatar from './ProfileAvatar';

const AvatarBox = () => {
  const [address, setAddress] = useState([]);
  const [addressModalShow, setAddressModalShow] = useState(false);
    return (
      <Grommet theme={grommet}>
        <Box>
            <Box
              style={{boxShadow:"1px 1px 3px grey"}}
              width='medium'
              height='medium'
              justify="center"
              align="center"
              pad="xlarge"
              round="medium"
            >
                <Avatar size="large" />
                <Heading>Veronica Mars</Heading>
                <Text>Member Since: <br></br>February 2018</Text>
                <Text>Total Donated: $389.00</Text>
                <Text>Candidates Backed: 3</Text>
                <ButtonToolbar>
                  <button variant='primary' onClick={()=> setAddressModalShow(true)}>
                    Address
                  </button>
                  <AddressForm 
                    show={addressModalShow}
                    onHide={()=> setAddressModalShow(false)}
                  />
                </ButtonToolbar>
            </Box>
        </Box>
      </Grommet>
    )
}

export default AvatarBox;