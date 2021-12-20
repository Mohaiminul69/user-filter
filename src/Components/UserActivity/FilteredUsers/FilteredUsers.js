import React, { useEffect, useState } from "react";
import { Container, FormControl, InputGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Users from "./Users";
import "./filteredUsers.css";
import { Link } from "react-router-dom";

const FilteredUsers = () => {
  const [displayUsers, setDisplayUsers] = useState([]);
  const data = useSelector((state) => state.user.filterInput);
  const allUsersdata = useSelector((state) => state.user.allUserData);
  console.log(data);
  // console.log(allUsersdata);
  const mealsTaken = [];
  const usersProfileInfo = [];

  // This function filters the type of the user by user Activity
  // This function filters the type of the user by user Activity
  // This function filters the type of the user by user Activity
  const filterUserType = (userData, userId) => {
    const userProfileInfoWithId = { ...userData.profile, userId };
    if (data.userType === "super-active" && mealsTaken.length > 10) {
      console.log("Super Active User");
      usersProfileInfo.push(userProfileInfoWithId);
    }
    if (
      data.userType === "active" &&
      mealsTaken.length > 5 &&
      mealsTaken.length <= 10
    ) {
      console.log("Active User");
      usersProfileInfo.push(userProfileInfoWithId);
    }
    if (
      data.userType === "other" &&
      mealsTaken.length > 0 &&
      mealsTaken.length <= 5
    ) {
      console.log("Bored User");
      usersProfileInfo.push(userProfileInfoWithId);
    }
  };

  const filterUsers = (userData) => {
    const activeDates = userData.calendar.dateToDayId;
    const daysWithDetails = userData.calendar.daysWithDetails;
    // console.log(daysWithDetails[Object.keys(daysWithDetails)[0]].day.userId);
    const datesFound = [];
    const userId = daysWithDetails[Object.keys(daysWithDetails)[0]].day.userId;
    for (const activeDate in activeDates) {
      // console.log(activeDate, activeDates[activeDate]);
      const date = new Date(activeDate).toLocaleDateString("en-ZA");
      if (data.from <= date && data.to >= date) {
        // console.log(date);
        datesFound.push(activeDates[activeDate]);
      }
    }
    for (const dateId in daysWithDetails) {
      // console.log(dateId, daysWithDetails[dateId]);
      for (const dateFound of datesFound) {
        if (parseInt(dateId) === dateFound) {
          // console.log(daysWithDetails[dateId].details.mealsWithDetails);
          const mealsFound = daysWithDetails[dateId].details.mealsWithDetails;
          for (const meal in mealsFound) {
            mealsTaken.push(daysWithDetails[dateId]);
            console.log(meal);
          }
        }
      }
    }

    // Filtering the type of user based on user activity by calling filterUserType Function
    // Filtering the type of user based on user activity by calling filterUserType Function
    // Filtering the type of user based on user activity by calling filterUserType Function
    filterUserType(userData, userId);

    // console.log(data);
    // console.log(daysWithDetails);
    // console.log(mealsTaken);
    // console.log(usersProfileInfo);
    //console.log(datesFound); // User was active in these days.
  };

  console.log(usersProfileInfo);
  allUsersdata.map((user) => filterUsers(user));
  useEffect(() => {
    setDisplayUsers([...usersProfileInfo]);
  }, []);

  const handleSearch = (e) => {
    const searchText = e.target.value;
    const matchedUsers = usersProfileInfo.filter((user) =>
      user.name.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(matchedUsers);
    setDisplayUsers(matchedUsers);
  };

  console.log(displayUsers);
  console.log(usersProfileInfo);

  if (displayUsers.length === 0)
    return (
      <div>
        <Navigation />
        <Container className="py-5 mt-5 customHeight">
          <Row>
            <div className="d-flex justify-content-between">
              <h6 className="text-capitalize mb-4">
                Showing {data.userType === "other" ? "Bored" : data.userType}{" "}
                Users
              </h6>
              <Link to="/editFilter">
                <div className="textAqua d-flex">
                  <p>Edit Filter</p>
                  <i className="fas fa-sliders-h ms-1 mt-1"></i>
                </div>
              </Link>
            </div>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1" className="bg-light">
                <i className="fas fa-search"></i>
              </InputGroup.Text>
              <FormControl
                onChange={handleSearch}
                placeholder="Search by name"
              />
            </InputGroup>
            <h1 className="textAqua">
              No {data.userType === "other" ? "Bored" : data.userType} user
              found
            </h1>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  return (
    <div>
      <Navigation />
      <Container className="py-5 mt-5 customHeight">
        <Row>
          <div className="d-flex justify-content-between">
            <h6 className="text-capitalize mb-4">
              Showing {data.userType === "other" ? "Bored" : data.userType}{" "}
              Users
            </h6>
            <Link to="/editFilter">
              <div className="textAqua d-flex">
                <p>Edit Filter</p>
                <i className="fas fa-sliders-h ms-1 mt-1"></i>
              </div>
            </Link>
          </div>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1" className="bg-light">
              <i className="fas fa-search"></i>
            </InputGroup.Text>
            <FormControl onChange={handleSearch} placeholder="Search by name" />
          </InputGroup>
          {displayUsers.map((profile) => (
            <Users key={profile.name} profile={profile} />
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default FilteredUsers;
