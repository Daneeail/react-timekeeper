import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import { createStyles, DialogActions, makeStyles, TextareaAutosize, Theme } from '@material-ui/core';
import DialogContent from '@material-ui/core/DialogContent';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dialogTitle: {
      textAlign: "center",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      margin: "auto",
      width: "fit-content"
    },
    formControl: {
      width: 400
    },
    textField: {
      display: "block"
    },
    textArea: {
      display: "block",
      width: "100%"
    }
  })
);

export interface DialogProps {
  open: boolean;
  selectedValue: any;
  onClose: (value: string) => void;
}


const ScheduleDialog = (props: DialogProps) => {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;
  const [nameField, setNameField] = React.useState('');
  const [descriptionField, setDescriptionField] = React.useState('');
  const [notesField, setNotesField] = React.useState('');

  function handleClose() {
    onClose(selectedValue);
  }

  function handleNameFieldChange(e: any) {
    setNameField(e.target.value);
  }

  function handleDescriptionFieldChange(e: any) {
    setDescriptionField(e.target.value);
  }

  function handleNotesFieldChange(e: any) {
    setNotesField(e.target.value);
  }

  function addSchedule() {
    console.log({nameField, descriptionField, notesField});
  }

  return(
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle className={classes.dialogTitle}>Schedule Card</DialogTitle>
      <DialogContent>
        <form>
          <FormControl className={classes.formControl}>
            <TextField id="name-field" label="Name" className={classes.textField} margin="dense" value={nameField} onChange={handleNameFieldChange} fullWidth />
            <TextField id="description-field" label="Description" className={classes.textField} margin="dense" value={descriptionField} onChange={handleDescriptionFieldChange} fullWidth />
            <Box mt={3} px={"auto"}>
              <TextareaAutosize id="notes-field" rowsMin={3} placeholder="Notes" className={classes.textArea} value={notesField} onChange={handleNotesFieldChange} />
            </Box>
          </FormControl>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={addSchedule}>Add</Button>
      </DialogActions>
    </Dialog>
  );
}

export default ScheduleDialog;
