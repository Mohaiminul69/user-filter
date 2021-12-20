import React from "react";
import { Col } from "react-bootstrap";
import "./user.css";

const Users = ({ profile }) => {
  const { name, pictureUrl, userId } = profile;
  return (
    <Col md={2} xs={6} className="mb-4">
      <div className="userDiv">
        <div>
          <img src={pictureUrl} alt="" />
        </div>
        <div className="pt-2 ps-3 p-4">
          <h6 className="text-muted">{name}</h6>
          <h6 className="text-muted">{userId}</h6>
        </div>
      </div>
    </Col>
  );
};

export default Users;
