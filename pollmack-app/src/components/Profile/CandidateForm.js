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
            Candidate Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
              <input 
                placeholder='Enter Name:'
              />
              <input 
                placeholder='Enter Party:'
              />
              <input 
                placeholder='Enter Office:'
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