import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter, Form, FormGroup, Input, Label, Col, Row } from 'reactstrap';


export const DonateModal = (props) => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
      <div>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader className='text-primary mx-auto'>Donate</ModalHeader>
          <ModalBody>
              <h1>Test</h1>
          </ModalBody>
        </Modal>
      </div>
    );
}
