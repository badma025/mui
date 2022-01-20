import { NextPage } from "next";
import { makeStyles } from "@mui/styles";
import { styleTheme } from "../../pages/theme";
import {
  Alert,
  Button,
  Container,
  Fab,
  FormControlLabel,
  FormLabel,
  Modal,
  Radio,
  RadioGroup,
  Snackbar,
  Tooltip,
} from "@mui/material";
import { Home } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import { SyntheticEvent, useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const useStyles = makeStyles((theme: any) => ({
  absolute: {},
  fab: {
    position: "fixed",
    bottom: 20,
    right: 20,
  },
  container: {
    width: 500,
    height: 550,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "100vh",
    },
  },
  form: { padding: theme.spacing(2) },
  item: {
    marginBottom: theme.spacing(3),
  },
}));

const Add: NextPage = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const handleClose = (event: SyntheticEvent<Element, Event>): void => {
    setOpenAlert(false);
  };
  return (
    <>
      <Tooltip title="Add" aria-label="add" onClick={(): void => setOpen(true)}>
        <Fab className={classes.fab} color="secondary">
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container className={classes.container}>
          <form className={classes.form} autoComplete="off">
            <div className={classes.item}>
              <TextField
                id="standard-basic"
                label="Title"
                size="small"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField
                id="standard-basic"
                multiline
                rows={4}
                defaultValue="Tell your story"
                variant="outlined"
                label="Description"
                size="small"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField select label="Visibility" value="Public">
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Public">Private</MenuItem>
                <MenuItem value="Public">Unlisted</MenuItem>
              </TextField>
            </div>
            <div className={classes.item}>
              <FormLabel component="legend">Who can comment?</FormLabel>
              <RadioGroup defaultValue="female" name="radio-buttons-group">
                <FormControlLabel
                  value="Everyone"
                  control={<Radio size="small" />}
                  label="Everyone"
                />
                <FormControlLabel
                  value="My friends"
                  control={<Radio size="small" />}
                  label="My friends"
                />
                <FormControlLabel
                  value="Nobody"
                  control={<Radio size="small" />}
                  label="Nobody"
                />
                <FormControlLabel
                  value="Custom"
                  disabled
                  control={<Radio size="small" />}
                  label="Custom (Premium)"
                />
              </RadioGroup>
            </div>
            <div className={classes.item}>
              <Button
                onClick={(): void => setOpenAlert(true)}
                variant="contained"
                color="success"
                style={{ marginRight: 20 }}>
                Create
              </Button>
              <Button
                onClick={(): void => setOpen(false)}
                variant="contained"
                color="error">
                Cancel
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
      <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} variant="filled" severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  );
};
export default Add;
