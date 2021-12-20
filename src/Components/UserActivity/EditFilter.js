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
import { useDispatch, useSelector } from "react-redux";
import { addFilterInput } from "../../features/Users/UsersSlice";

const EditFilter = () => {
  const data = useSelector((state) => state.user.filterInput);
  console.log(data.from, data.to);
  const previousStartDate = data.from;
  const previousEndDate = data.to;
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
      from: data.from,
      to: data.to,
      userType: data.userType,
    },
  });
  const onSubmit = (data) => {
    if (previousStartDate !== data.from) {
      data.from = data.from.toLocaleDateString("en-ZA");
    }
    if (previousEndDate !== data.to) {
      data.to = data.to.toLocaleDateString("en-ZA");
    }
    dispatch(addFilterInput(data));
    navigate("/filteredUsers");
  };
  return (
    <div>
      <Navigation />
      <Container className="py-5 mt-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="textAqua mb-4">Edit Filter</h1>
          <div className="datePickerWrapper p-4">
            <h1 className="text-start textAqua">Date</h1>
            <hr />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={3}>
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
            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
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
                      label="Other"
                    />
                  </RadioGroup>
                )}
              />
            </FormControl>
            <div className="d-flex justify-content-center">
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

export default EditFilter;
