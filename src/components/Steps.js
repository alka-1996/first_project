import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useForm, FormProvider, UseFormContext, Controller } from "react-hook-form";

//import PaymentLocation from './PaymentLocation';
import BillingAddress from './BillingAddress';
import DateTime from './DateTime';

import Template from './Template';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Date & Time', 'Personal details', 'Payment'];
}

//export const DateTime =()=>{
//return (<h1> manoj patidar </h1>);
//};
// export const PersonalDetails =()=>{};
// export const Payment =()=>{};


function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <DateTime />;
    case 1:
      return <Template />;
    case 2:
      return <BillingAddress />;
    default:
      return 'Unknown stepIndex';
  }
}

export default function Steps() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([])
  const steps = getSteps();
  const methods = useForm();

  const isStepOptional = (step) => {
    return step === 1 || step === 2
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step)
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep])
    }
    setActiveStep(activeStep + 1);
  };

  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <div className="container" style={{ backgroundColor: "rgba(243, 238, 238, 0.69)"}}>


      <div>
        <h3>Book appointment</h3>
      </div>
      <div>
      <Stepper activeStep={activeStep} alternativeLabel style={{backgroundColor:"rgba(243, 238, 238, 0.69)"}}>
        {steps.map((step, index) => {
          const lableProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            lableProps.optional = (
              <Typography
                variant="caption"
                align='center'
                style={{ display: "block" }}
              >
                Optional
              </Typography>
            )
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false
          }
          return (
            <Step{...stepProps} key={index}>
              <StepLabel {...lableProps}>{step}</StepLabel>
            </Step>
          )

        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (

          <Typography variant='h3' align='center'>thank you</Typography>
        ) : (
          <>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>{getStepContent(activeStep)}</form>
            </FormProvider>

            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              className={classes.button}
            >
              Back
            </Button>
            {isStepOptional(activeStep) && (
              <Button
                onClick={handleSkip}
                className={classes.button}
                variant="contained"
                color="primary"
                style={{marginRight:"2rem"
              }}
              >Reset</Button>

            )}



            <Button className='classes.button' variant="contained" color="primary" onClick={handleNext} type="Submit">
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>


          </>
        )}
      </div>
    </div>
    </div>

  );
}
