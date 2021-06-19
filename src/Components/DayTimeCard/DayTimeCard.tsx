import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Add from '@material-ui/icons/Add';
import ScheduleDialog from '../ScheduleDialog/ScheduleDialog';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    titleCenter: {
      textAlign: "center",
      fontWeight: "bold"
    },
    titleRight: {
      textAlign: "right",
      marginRight: "15px"
    },
    addIcon: {
      fontWeight: "bold",
      cursur: "pointer",
      position: "relative",
      right: "10px",
      cursor: "pointer"
    },
    addScheduleText: {
      fontWeight: "bold",
      position: "relative",
      top: "1px"
    }
  })
);

const DayTimeCard = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState<any>(null);

  function openScheduleDialog() {
    setOpen(true);
  }

  function closeScheduleDialog(value: any) {
    setOpen(false);
    setSelectedValue(value);

    console.log(value);
  }

  return (
    <div className="pt-3">
      <Row>
        <Col>
          <Row>
            <Col>
            </Col>
            <Col>
              <Typography paragraph className={classes.titleCenter}>Description</Typography>
            </Col>
            <Col>
              <Typography paragraph className={classes.titleCenter}>Notes</Typography>
            </Col>
            <Col>
              <Typography paragraph className={classes.titleCenter}>Duration</Typography>
            </Col>
            <Col className={classes.titleRight}>
              <Add className={classes.addIcon} onClick={openScheduleDialog}/>
              <Typography paragraph display="inline" className={classes.addScheduleText}>Add Schedule</Typography>
              <ScheduleDialog selectedValue={selectedValue} open={open} onClose={closeScheduleDialog} />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default DayTimeCard;