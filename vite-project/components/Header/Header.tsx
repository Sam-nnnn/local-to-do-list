import { createContext } from "react";
import {
  Heading,
  HStack,
  VStack,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
  ModalOverlay,
  Divider,
} from "@chakra-ui/react";
import { SunIcon } from "@chakra-ui/icons";
export const HeaderContext = createContext<any>(null);

const ModalOptions = (props) => {
  return (
    <VStack _hover={{ bgColor: "red" }} w='full'>
      <Heading onClick={() => {}} my='5px' size='xs'>
        {props.title}
      </Heading>
      <Divider w='full' />
    </VStack>
  );
};

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleModalChange = () => {
    onOpen();
  };

  return (
    <HStack w='full' h='25px' p='30px 15px' justify='space-between'>
      <Heading size='xs'>TodoSomething</Heading>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent mx='20px'>
          <ModalBody>
            <VStack>
              <ModalOptions title='暗模式' />
              <ModalOptions title='亮模式' />
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
      <IconButton onClick={() => handleModalChange()} icon={<SunIcon />} />
    </HStack>
  );
}

export default function HeaderProvider({ Children }) {
  return (
    <HeaderContext.Provider>
      <Header />
      {Children}
    </HeaderContext.Provider>
  );
}
