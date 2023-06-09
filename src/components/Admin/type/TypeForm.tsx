import React from "react";
import { Button, FormElement, Input, Modal, Text } from "@nextui-org/react";
import { useType } from "../../../contexts/Type/Provider";

const TypeForm: React.FC<{
  visible: boolean;
  setVisible: (e: boolean) => void;
}> = ({ visible, setVisible }) => {
  const { setType, type, updateType } = useType();

  const closeHandler = () => {
    setVisible(false);
  };

  const handleClick = () => {
    setVisible(false);
    updateType(type);
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
          <Text id="modal-title" size={18}>
            Chỉnh sửa
            <Text b size={18}>
              "Thể loại"
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Anahole..."
            value={type.name}
            onChange={(e: React.ChangeEvent<FormElement>) =>
              setType({ ...type, name: e.target.value })
            }
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Huỷ
          </Button>
          <Button auto onPress={() => handleClick()}>
            Cập nhật
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TypeForm;
