import React from "react";
import { Button, Loading, Modal, Text } from "@nextui-org/react";

const Noti: React.FC<{
  visible: boolean;
  setVisible: (e: boolean) => void;
  btnHandle: any;
  children: any;
}> = ({ visible, setVisible, btnHandle, children }) => {
  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <div>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={20}>
            Thông
            <Text b size={12}>
              cmn
            </Text>
            Báo
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text b size={18}>
            {children}
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            đóng
          </Button>
          {btnHandle}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Noti;
