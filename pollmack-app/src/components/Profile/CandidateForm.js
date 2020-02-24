import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { addCandidate } from '../../redux/actions';
import { Modal, Button } from 'react-bootstrap';


const CandidateForm = (props) => {

  const [candidate, setNewCandidate] = useState([])
  const handleChange = e => {
      setNewCandidate({...candidate, [e.target.name]: e.target.value })
  }
  

  const handleSubmit = e => {
    e.preventDefault();
    console.log('saved candidate:', candidate)
    props.addCandidate(
      // {
      //   name: candidate.name,
      //   party: candidate.party,
      //   office: candidate.office,
      // }
      candidate
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
        <form 
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
            <button>Submit</button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const mapStateToProps = state => {
  return {
    ...state,
    candidate: state.candidate,
    isFetching: state.isFetching
  }
}

export default connect(mapStateToProps, { addCandidate })(CandidateForm);