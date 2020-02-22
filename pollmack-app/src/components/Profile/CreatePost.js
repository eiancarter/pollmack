import React, { useReducer, useRef } from 'react';
import { Button, Form, Card, ListGroup } from 'react-bootstrap';

const CreatePost = () => {
    const inputRef = useRef();
    const [posts, dispatch] = useReducer((state, action) => {
        switch(action.type){
            case 'ADD-POST':
                return [
                    ...state,
                    {
                        id: new Date(),
                        post: action.post,
                        like: false
                    }
                ]
            case 'REMOVE-POST':
                return state.filter((_, index) => index !== action.index);
            // case 'EDIT-POST':
            //     return [];
            case 'LIKE-POST':
                return !action.like;
            default: 
                return state;
        }
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({
            type: 'ADD-POST',
            post: inputRef.current.value
        })
        inputRef.current.value = '';
    }
    return (
        <Card style={{width:"100%"}}>
            <Form style={{widht:"90%", display:"flex", flexDirection:"column", alignContent:"center"}} onSubmit={handleSubmit}>
                <textarea
                    align='left'
                    ref={inputRef}
                />
                <Button style={{width:"20%", margin:"2% auto"}}>Post+</Button>
            </Form>
            <Card>
                <ListGroup>
                    {posts.map((item, index) => 
                        <ListGroup.Item
                            key={item.id}
                            style={item.like ? {color: 'red'} : null}
                        >
                            {item.post}
                            <Button onClick={()=>{dispatch({type:'LIKE-POST', index})}}>
                                Like
                            </Button>
                            <Button onClick={()=>{dispatch({type:'REMOVE-POST', index})}}>
                                Remove
                            </Button>

                        </ListGroup.Item>
                    )}
                </ListGroup>
            </Card>

        </Card>
    );
};

export default CreatePost;
