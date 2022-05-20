import { Modal, FormControl, Input, Button } from 'native-base';

interface CreateAccountModalProps {
  showModal: boolean;
  closeModal: () => void;
}

export function CreateAccountModal({
  showModal,
  closeModal,
}: CreateAccountModalProps) {
  return (
    <Modal isOpen={showModal} onClose={closeModal}>
      <Modal.Content maxWidth="400px">
        <Modal.CloseButton />
        <Modal.Header>Create Account</Modal.Header>
        <Modal.Body alignItems="center">
          <FormControl>
            <FormControl.Label color="muted.600">Name</FormControl.Label>
            <Input placeholder="Your Name" type="text" mt="2" />
          </FormControl>

          <FormControl>
            <FormControl.Label color="muted.600">E-mail</FormControl.Label>
            <Input placeholder="Your E-mail" type="text" mt="2" />
          </FormControl>

          <FormControl>
            <FormControl.Label color="muted.600">Senha</FormControl.Label>
            <Input placeholder="Your password" type="password" mt="2" />
          </FormControl>

          <Button width="80%" bg="info.600" mt="4">
            Create Account
          </Button>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
}
