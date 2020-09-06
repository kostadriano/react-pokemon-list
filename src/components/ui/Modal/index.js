import StyledReactModal from 'styled-react-modal';

const Modal = StyledReactModal.styled(({ theme: { colors } }) => ({
  width: '20rem',
  height: '20rem',
  backgroundColor: colors.white
}));

export default Modal;
