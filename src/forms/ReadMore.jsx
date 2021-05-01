import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { DONATIONS } from '../shared/donations';

const ReadMore = (props) => {
  
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  

  return (
    <div>
      <Button outline onClick={toggle}>
        Pick Me..&#128525; 
      </Button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader className='text-primary mx-auto'>{props.name}</ModalHeader>
        <ModalBody>
          {/*LOOP THROUGH DONATIONS AND GIVE ME A DONATION DESCRIPTION*/}
          {props.item}
        </ModalBody>
        <ModalFooter>
          <Button className='btn-block' color='secondary' onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ReadMore;
