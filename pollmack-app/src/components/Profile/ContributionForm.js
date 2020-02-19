import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';


export default function ContributionForm(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Contribution Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form style={{display:'flex', flexDirection:'column', margin:'0 auto', width:'50%'}}>
              <input 
                placeholder='Enter Amount:'
              />
              <input 
                placeholder='Notes?'
              />
              <Button>Submit</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }