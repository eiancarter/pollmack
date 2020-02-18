import React from 'react';
import { Modal, Button } from 'react-bootstrap';


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
          <form>
              <input 
                placeholder='Enter Amount:'
              />
              <input 
                placeholder='Notes?'
              />
              <button>Submit</button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }