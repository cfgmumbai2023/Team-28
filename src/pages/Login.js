import React from "react";
import "../styles/RegiserStyles.css";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import SignImg from "./SignImg";


const Login = () => {
  const navigate = useNavigate();
  //form handler
  const onfinishHandler = async (values) => {
    try {
      const res = await axios.post("/api/v1/user/login", values);
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successfully");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("something went wrong");
    }
  };
  return (
    <>

      <div className='container mt-3' >
        <section className='d-flex justify-content-between align-items-center' >
          <div className='left_data mt-3 p-3' style={{ width: "100%" }} >
            <Form
              layout="vertical"
              onFinish={onfinishHandler}
              className="register-form col-lg-6"
            >
              <h3 className='text-center col-lg-12'>Login</h3>

              <Form.Item  className="mb-3 col-lg-12" label="Email" name="email">
                <Input type="email" required />
              </Form.Item>
              <Form.Item  className="mb-3 col-lg-12" label="Password" name="password">
                <Input type="password" required />
              </Form.Item>
              <Link to="/register" className="m-2">
                Not a user? Sign up!
              </Link>
              <button className="btn btn-primary" type="submit">
                Login
              </button>
            </Form>
          </div>
          <SignImg />
        </section>
        
      </div>

    </>

  );
};

export default Login;
