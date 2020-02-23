import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { addCandidate } from '../../redux/actions';
import { Modal, Button, Form } from 'react-bootstrap';


const CandidateForm = (props) => {

  const [candidate, setNewCandidate] = useState({
    candidate: {
      name:"",
      party:"",
      office:"",
    }
  })
  const handleChange = e => {
      setNewCandidate({...candidate, [e.target.name]: e.target.value })
  }
  
  const handleSubmit = e => {
    e.preventDefault()
    axios
      .post('http://pollmack.herokuapp.com/api/candidates', candidate)
      .then(res => {
        console.log(res, 'post candidate response')
        props.addCandidate(candidate)
      })
      .catch(err => {
        console.log(err)
      })
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
              required
            />
            <input 
              type='text'
              name='party'
              onChange={handleChange}
              placeholder='Enter Party:'
              value={candidate.party}
              required
            />
            <input 
              type='text'
              name='office'
              onChange={handleChange}
              placeholder='Enter Office:'
              value={candidate.office}
              required
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

const mapStateToProps = () => {
  return {
  }
}

export default connect(mapStateToProps, { addCandidate })(CandidateForm);