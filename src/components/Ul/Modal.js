import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';
const Backdrop = (props) => {
    return <div className={classes.backdrop}/>
};
const ModalOverlay = (props) =>{
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
};
    const portalElemnt = document.getElementById('overlays')
const Modal = (props) =>{
    return <React.Fragment>
    {ReactDOM.createPortal(<Backdrop/> , portalElemnt)}
     {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay> , portalElemnt)}
    </React.Fragment>
};

export default Modal;