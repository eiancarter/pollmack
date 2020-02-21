import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';


export default function ContributionForm(props) {

  const [candidate, setNewCandidate] = useState({
    candidate: {
      name:"",
      party:"",
      office:""
    }
  })
  const handleChange = e => {
    return(
      e.preventDefault()
    )
  }
  
  const handleSubmit = e => {
    return(
      e.preventDefault()
      setNewCandidate({e.target.name=[e.target.value]})
    )
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Support a New Candidate
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form style={{display:'flex', flexDirection:'column', margin:'0 auto', width:'50%'}}>
            <input 
              onChange={handleChange}
              placeholder='Enter Name:'
            />
            <input 
              onChange={handleChange}
              placeholder='Enter Party:'
            />
            <input 
              onChange={handleChange}
              placeholder='Enter Office:'
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