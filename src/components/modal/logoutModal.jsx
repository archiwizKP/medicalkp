import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const LogoutModal = ({ open, onClose, text, onConfirm }) => {
  return (
    <Dialog fullWidth open={open} onClose={onClose}>
      <DialogTitle sx={{ fontWeight: "bold", fontSize: "20px" }}>
        Confirmation
      </DialogTitle>
      <Divider />

      <DialogContent>
        <Typography variant="body1" color="initial">
          {text}
        </Typography>
      </DialogContent>

      <Divider />
      <DialogActions sx={{ mt: 1 }}>
        <Button variant="outlined" color="success" onClick={onClose}>
          No
        </Button>
        <Link to={"/"}>
          <Button type="submit" variant="contained" onClick={onConfirm}>
            Yes
          </Button>
        </Link>
      </DialogActions>
    </Dialog>
  );
};

export default LogoutModal;
