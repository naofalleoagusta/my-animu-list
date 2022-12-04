import { DialogActions, DialogContent, DialogTitle } from "@mui/material";
import MuiDialog, { DialogProps as MuiDialogProps } from "@mui/material/Dialog";
import { ReactNode } from "react";
import Button from "../Button";

type DialogProps = Pick<MuiDialogProps, "maxWidth" | "open"> & {
  title: string;
  content: ReactNode;
  handleClose: () => void;
  closeText?: string;
  actionBtn?: ReactNode;
};

const Dialog = ({
  maxWidth,
  open,
  title,
  content,
  handleClose,
  closeText,
  actionBtn,
}: DialogProps) => {
  return (
    <MuiDialog maxWidth={maxWidth} open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          id="dialog-close-btn"
          ariaLabel="Dialog Close Button"
          variant="outlined"
        >
          {closeText ?? "Close"}
        </Button>
        {!!actionBtn && actionBtn}
      </DialogActions>
    </MuiDialog>
  );
};

export default Dialog;
