import React, { useState } from 'react'; 
import { Grommet, Box, Header, Text } from "grommet";
import { Button, ButtonToolbar } from 'react-bootstrap';
import AddressForm from './AddressForm';
import FundBox from './FundBox';
import ProfileAvatar from './ProfileAvatar';


const AvatarBox = (props) => {
  // const [address, setAddress] = useState([]);
  const [addressModalShow, setAddressModalShow] = useState(false);
    return (
      <Grommet>
        <Box 
          style={{ color: '#423e3a', boxShadow:"1px 1px 3px grey", background:'white' }}
          round="small"
        >
            <Box
              width='medium'
              height='medium'
              justify="center"
              align="center"
              pad="large"
              round="small"
            >
                <ProfileAvatar style={{width:"100px", height:"100px", marginBottom:'2%'}} />
                <Header style={{fontSize:"2rem"}}>Molly</Header>
                <br></br>
                <Text>Joined: February 2018</Text>
                <Text>Total Donated: $389.00</Text>
                <Text>Candidates Supported: 6</Text>
                <br></br>
                <ButtonToolbar>
                  <Button style={{ fontWeight:"bold", background: "#20516e", borderRadius:"20px" }} variant='primary' onClick={()=> setAddressModalShow(true)}>
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