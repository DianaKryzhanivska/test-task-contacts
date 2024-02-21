import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(1.5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  width: 275px;
  height: auto;
  padding: 30px 30px;
  border-radius: 15px;
  background: #fff;
  z-index: 1001;
  position: relative;
`;

export const CloseBtn = styled.button`
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 6px;
  right: 2px;

  & svg {
    font-size: 28px;
  }
`;
