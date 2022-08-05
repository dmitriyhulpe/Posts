import React from 'react';
import Button from './Button/Button';
 
 const App = (props) => {
     return (
        <div className='post'>
            <div className='content'>
                <p>{props.post.title}</p>
                <div>{props.post.body}</div>
            </div>
            <div className='buttons'>
                <Button onClick={() => props.remove(props.post)}>Remove</Button>
            </div>
        </div>
     );
 };
 
 export default App;