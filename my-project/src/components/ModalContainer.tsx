"use client"

import React, { FC, HTMLAttributes } from "react";
import { Modal } from "@mui/material";

export interface ModalContainerProps extends
  HTMLAttributes<HTMLElement> {
    handleClose: any;
    open: boolean
}

const ModalContainer: FC<ModalContainerProps> = ({ children, handleClose, open }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <>
        { children }
      </>
    </Modal>
  )
}

export default ModalContainer;
