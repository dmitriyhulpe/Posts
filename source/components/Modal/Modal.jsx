import React from 'react';

import classes from './Modal.module.css'

const Modal = ({children, visible, setVisible}) => {

    const rootClasses = [classes.Modal]
    if (visible) {
        rootClasses.push(classes.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={()=> {
            setVisible(false)
        }}>
            <div className={classes.ModalContent} onClick={(event)=>{
                event.stopPropagation()
            }}>
                {children}
            </div>
        </div>
    );
};

export default Modal;