import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Typography, Divider, message } from "antd";
import {
  GoogleOutlined,
  FacebookFilled,
  TwitterOutlined,
} from "@ant-design/icons";

import "./Signup.css";

function Signup() {
  const navigate = useNavigate();

  const login = (values) => {
    const { myEmail, myPassword } = values;

    // Validate email and password here
    if (myEmail && myPassword) {
      // Validation successful
      message.success("Login successful");
      navigate("/");
    } else {
      // Validation failed
      message.error("Please enter valid email and password");
    }
  };

  return (
    <div className="signbg">
      <Form className="loginForm" onFinish={login}>
        <Typography.Title> Welcome Back!</Typography.Title>
        <Form.Item
          rules={[
            {
              required: true,
              type: "email",
              message: "Please enter valid email",
            },
          ]}
          label="Email"
          name="myEmail"
        >
          <Input placeholder="Enter your email" />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: "Please enter valid password",
            },
          ]}
          label="Password"
          name="myPassword"
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>
        <Button type="primary" htmlType="submit" block>
          Login
        </Button>
        <Divider style={{ borderColor: "black" }}>or Login with</Divider>
        <div className="sociallogin">
          <GoogleOutlined className="iocons" onClick={login} />
          <FacebookFilled className="iocons" onClick={login} />
          <TwitterOutlined className="iocons" onClick={login} />
        </div>
      </Form>
    </div>
  );
}

export default Signup;
