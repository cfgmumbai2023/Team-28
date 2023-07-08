import React from "react";
// import "../styles/RegiserStyles.css";
import { Form, Input, message } from "antd";
import SignImg from "./SignImg"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();

  //form handler
  const onfinishHandler = async (values) => {
    try {
      const res = await axios.post("/api/v1/user/register", values);
      if (res.data.success) {
        message.success("Register Successfully!");
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Something Went Wrong");
    }
  };
  return (
    <>

      <div className='container mt-3 ' >
        <section className='d-flex justify-content-between align-items-center' >
          <div className='left_data mt-3 p-3' style={{ width: "100%" }}>
            <Form
              layout="vertical"
              onFinish={onfinishHandler}
              className="register-form container col-lg-6"
            >
              <h3 className="text-center col-lg-12">Register</h3>
              <Form.Item className="mb-3 col-lg-12" label="Name" name="name">
                <Input type="text" required />
              </Form.Item>
              <Form.Item className="mb-3 col-lg-12" label="Email" name="email">
                <Input type="email" required />
              </Form.Item>
              <Form.Item className="mb-3 col-lg-12" label="Password" name="password">
                <Input type="password" required />
              </Form.Item>
              <Link to="/login" className="m-2">
                Sign in
              </Link>
              <button className="btn btn-primary" type="submit">
                Register
              </button>
            </Form>

          </div>
          <SignImg />
        </section>
      </div>

    </>
  );
};

export default Register;
