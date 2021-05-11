import React, { useContext } from 'react';
import { createStyles, makeStyles, Typography } from '@material-ui/core';
import { Row, Col } from "react-bootstrap";
import { DateTime } from 'luxon';

import ScheduleContext from "../../Contexts/ScheduleContexts";

const useStyles = makeStyles(() =>
  createStyles({
    centerDisplay: {
      textAlign: "center",
    },
    borderDisplay: {
      border: "1px solid #dee2e6",
      padding: "15px",
    }
  })
);

function calculateCurrentUnitOfTime(unitOfTime: any): string {
  if (unitOfTime === 'day') {
    return DateTime.now().toFormat('EEEE - MMMM dd, yyyy');
  } else if (unitOfTime === 'week') {
    return DateTime.now().startOf(unitOfTime).plus({ days: -1 }).toFormat('MMMM dd') + ' to ' + DateTime.now().endOf(unitOfTime).plus({ days: -1 }).toFormat('MMMM dd');
  } else if (unitOfTime === 'month') {
    return DateTime.now().startOf(unitOfTime).toFormat('MMMM dd') + ' to ' + DateTime.now().endOf(unitOfTime).toFormat('MMMM dd');
  } else {
    return 'Error';
  }
}

const ElapsedTimeDisplay = () => {
  const classes = useStyles();
  const schedule = useContext(ScheduleContext);

  return (
      <Row className={classes.centerDisplay}>
        <Col>
          <Row>
            <Col className={classes.borderDisplay}>
              <Typography variant="h6">Month</Typography>
              <Typography variant="subtitle2">{calculateCurrentUnitOfTime('month')}</Typography>
              <Typography variant="subtitle2">{schedule}</Typography>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col className={classes.borderDisplay}>
              <Typography variant="h6">Week</Typography>
              <Typography variant="subtitle2">{calculateCurrentUnitOfTime('week')}</Typography>
              <Typography variant="subtitle2">1</Typography>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col className={classes.borderDisplay}>
              <Typography variant="h6">Day</Typography>
              <Typography variant="subtitle2">{calculateCurrentUnitOfTime('day')}</Typography>
              <Typography variant="subtitle2">1</Typography>
            </Col>
          </Row>
        </Col>
      </Row>
  );
}

export default ElapsedTimeDisplay;
