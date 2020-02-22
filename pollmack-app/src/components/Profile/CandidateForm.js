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
      setNewCandidate({...candidate, [e.target.name]: e.target.value })
    )
  }
  
  const handleSubmit = e => {
      e.preventDefault()
      props.addCandidate(candidate);
      setNewCandidate({ name: '', party: '', office: '' })
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
        <Form 
          onSubmit={handleSubmit}
          style={{
            display:'flex', 
            flexDirection:'column', 
            margin:'0 auto', 
            width:'50%'
            }}
        >
            <input
              type='text'
              name='name' 
              onChange={handleChange}
              placeholder='Enter Name:'
              value={candidate.name}
            />
            <input 
              type='text'
              name='party'
              onChange={handleChange}
              placeholder='Enter Party:'
              value={candidate.party}
            />
            <input 
              type='text'
              name='office'
              onChange={handleChange}
              placeholder='Enter Office:'
              value={candidate.office}
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