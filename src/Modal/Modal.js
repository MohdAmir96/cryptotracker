import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import "./Modal.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AddTodoModal({ handleSubmit }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button className="add-todo-btn" onClick={handleOpen}>
        Add Todos
      </Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            {/* <input type="text" name="todo" /> */}
            <TextField
              id="standard-basic"
              label="Standard"
              name="todo"
              variant="standard"
            />
            <button type="submit" className="submit-btn">
              Add todos
            </button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
