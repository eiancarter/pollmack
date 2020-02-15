import React, { useReducer, useRef } from 'react';



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
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    align='left' 
                    ref={inputRef}
                />
                <button>Post+</button>
            </form>
            <div>
                <ul>
                    {posts.map((item, index) => 
                        <li
                            key={item.id}
                            style={item.like ? {color: 'red'} : null}
                        >
                            {item.post}
                            <button onClick={()=>{dispatch({type:'LIKE-POST', index})}}>
                                Like
                            </button>
                            <button onClick={()=>{dispatch({type:'REMOVE-POST', index})}}>
                                Remove
                            </button>

                        </li>
                    )}
                </ul>
            </div>

        </div>
    );
};

export default CreatePost;
