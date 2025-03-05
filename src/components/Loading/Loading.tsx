import { Modal } from "react-native";
import {
  LoadingIndicator,
  LoadingMessage,
  ModalContent,
  Overlay,
} from "./style";

interface LoadingProps {
  isLoading: boolean;
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({ isLoading, message }) => {
  return (
    <Modal visible={isLoading} transparent animationType="fade">
      <Overlay>
        <ModalContent>
          <LoadingIndicator />
          <LoadingMessage>{message ? message : "Loading..."}</LoadingMessage>
        </ModalContent>
      </Overlay>
    </Modal>
  );
};

export default Loading;
