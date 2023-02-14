import React,{useState} from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { FaFeatherAlt } from "react-icons/fa";
import Dialog from "@mui/material/Dialog";
import Tweet from "../Tweet/Tweet";
import DialogBox from "../../Components/Dialog/DialogBox";
import style from "./FloatingButton.module.css"

export default function FloatingActionButtons() {
  const [isOpen, SetisOpen] = useState(false);
  const handleClickOpen = () => {
    SetisOpen(true);
  };
  const handleClose = () => {
    SetisOpen(false);
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClickClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab color="primary" aria-label="add">
        <FaFeatherAlt style={{ fontSize: "1.5rem" }} onClick={handleClickOpen}/>
        <div className={style.Dialog}>
              <Dialog
                open={isOpen}
                onClose={handleClose}
                style={{
                  background: "rgba(91, 112, 131, 0.4)",
                  fontSize: "15px",
                  lineHeight: "40px",
                  width:"95vw"
                }}
              >
                <Tweet />
              </Dialog>
            </div>
            <DialogBox open={open} onClose={handleClickClose} />
      </Fab>
    </Box>
  );
}
