import React, { useState } from 'react'; 
import { Grommet, Box, Header, Text } from "grommet";
import { Button, ButtonToolbar } from 'react-bootstrap';
import AddressForm from './AddressForm';
import FundBox from './FundBox';
import { grommet } from 'grommet/themes';
import ProfileAvatar from './ProfileAvatar';

const AvatarBox = () => {
  const [address, setAddress] = useState([]);
  const [addressModalShow, setAddressModalShow] = useState(false);
    return (
      <Grommet theme={grommet}>
        <Box 
          style={{boxShadow:"1px 1px 3px grey"}}
          round="medium"
          background="brand"
        >
            <Box
              width='medium'
              height='medium'
              justify="center"
              align="center"
              pad="large"
              round="small"
            >
                <ProfileAvatar style={{width:"100px", height:"100px"}} />
                <Header style={{fontSize:"2rem"}}>Veronica</Header>
                <Text>Member Since: <br></br>February 2018</Text>
                <Text>Total Donated: $389.00</Text>
                <Text>Candidates Backed: 3</Text>
                <ButtonToolbar>
                  <Button variant='secondary' onClick={()=> setAddressModalShow(true)}>
                    Address
                  </Button>
                  <AddressForm 
                    show={addressModalShow}
                    onHide={()=> setAddressModalShow(false)}
                  />
                </ButtonToolbar>
            </Box>
            <FundBox />
        </Box>
      </Grommet>
    )
}

export default AvatarBox;