import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { Container } from "react-bootstrap";
import Navigation from "../Shared/Navigation/Navigation";
import Footer from "./../Shared/Footer/Footer";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useForm, Controller } from "react-hook-form";
import "./userActivity.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFilterInput } from "../../features/Users/UsersSlice";

const UserActivity = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value1, setValue1] = useState(new Date("2014-08-18T21:11:54"));
  const [value2, setValue2] = useState(new Date("2014-08-18T21:11:54"));

  const handleChange1 = (newValue1) => {
    setValue1(newValue1);
  };
  const handleChange2 = (newValue2) => {
    setValue2(newValue2);
  };
  const { handleSubmit, control } = useForm({
    defaultValues: {
      from: "",
      to: "",
      userType: "",
    },
  });
  // Filter inputs are stored to the redux store on form submit
  // Filter inputs are stored to the redux store on form submit
  const onSubmit = (data) => {
    data.from = data.from.toLocaleDateString("en-ZA");
    data.to = data.to.toLocaleDateString("en-ZA");
    dispatch(addFilterInput(data));
    navigate("/filteredUsers");
  };
  return (
    <div>
      <Navigation />
      <Container className="py-5 mt-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="textAqua text-center">User Analyzer</h1>
          <h4 className="text-muted text-center mb-5">
            Select filters to generate report
          </h4>
          <div className="datePickerWrapper p-4">
            <h1 className="text-start textAqua">Date</h1>
            <hr />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={3}>
                {/*
<------------------- Date Picker Input that dates dates as input ------------------->
*/}
                <Controller
                  name="from"
                  control={control}
                  render={({ field }) => (
                    <DesktopDatePicker
                      label="From"
                      name="from"
                      value={value1}
                      onChange={handleChange1}
                      {...field}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  )}
                />
                {/*
<------------------- Date Picker Input that dates dates as input ------------------->
*/}
                <Controller
                  name="to"
                  control={control}
                  render={({ field }) => (
                    <DesktopDatePicker
                      label="To"
                      name="from"
                      value={value2}
                      onChange={handleChange2}
                      {...field}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  )}
                />
              </Stack>
            </LocalizationProvider>
            <h1 className="text-start textAqua mt-3">Status</h1>
            <hr />
            {/*
<------------------- Radio inputs that take the input of the user type ------------------->
*/}
            <FormControl component="fieldset">
              <FormLabel component="legend">User Type</FormLabel>
              <Controller
                rules={{ required: true }}
                control={control}
                name="userType"
                render={({ field }) => (
                  <RadioGroup {...field}>
                    <FormControlLabel
                      value="active"
                      control={<Radio />}
                      label="Active"
                    />
                    <FormControlLabel
                      value="super-active"
                      control={<Radio />}
                      label="Super Active"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Bored"
                    />
                  </RadioGroup>
                )}
              />
            </FormControl>
            <div className="d-flex justify-content-center">
              {/*
<------------------- Submit Button that submits the form with inputs ------------------->
*/}
              <Button
                type="submit"
                className="customBtn btnAqua mt-3"
                variant="contained"
              >
                Generate
              </Button>
            </div>
          </div>
        </form>
      </Container>
      <Footer />
    </div>
  );
};

export default UserActivity;
