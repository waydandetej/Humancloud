import React, { useEffect, useState } from "react";
import "./Header.css";
import Signup from "../Signup/Signup";
import { useNavigate } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";
import {
  Badge,
  Button,
  Drawer,
  InputNumber,
  Table,
  Form,
  Input,
  Checkbox,
  message,
} from "antd";
import { getCart } from "../API";

const Header = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const [signupVisible, setSignupVisible] = useState(false);

  const handleTabChange = (newValue) => {
    setValue(newValue);
  };
  const toggleSignup = () => {
    setSignupVisible(!signupVisible);
  };

  return (
    <>
      <header className="app-bar">
        <div className="toolbar">
          <h1 className="logo">AJIO</h1>
          <nav className="nav">
            <button
              className={`nav-item ${value === 0 ? "active" : ""}`}
              onClick={() => navigate("/")}
            >
              HOME
            </button>

            <button
              className={`nav-item ${value === 0 ? "active" : ""}`}
              onClick={() => navigate("/men")}
            >
              PRODUCTS
            </button>
          </nav>
          <a href="/signup">
            <button
              className="login-button"
              style={{ fontWeight: "50px" }}
              onClick={toggleSignup}
            >
              Login
            </button>
          </a>
          <AppCart />
        </div>
      </header>
    </>
  );
};
function AppCart() {
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [checkoutDrawerOpen, setCheckoutDrawerOpen] = useState(false);

  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    getCart().then((res) => {
      setCartItems(res.products);
    });
  }, []);
  const onConfirmOrder = (values) => {
    console.log({ values });
    setCartDrawerOpen(false);
    setCheckoutDrawerOpen(false);
    message.success("YOUR ORDER HAS BEEN PLACED SUCCESSFULLY");
  };
  return (
    <div>
      <Badge
        onClick={() => {
          setCartDrawerOpen(true);
        }}
        count={7}
        className="badge"
        style={{ fontSize: "10px", margin: "5px" }}
      >
        <ShoppingCartOutlined style={{ fontSize: "30px", cursor: "pointer" }} />
      </Badge>
      <Drawer
        open={cartDrawerOpen}
        onClose={() => {
          setCartDrawerOpen(false);
        }}
        title="Your cart"
        width={600}
      >
        <Table
          columns={[
            {
              title: "Title",
              dataIndex: "title",
            },
            {
              title: "Price",
              dataIndex: "price",
              render: (value) => {
                return <span>${value}</span>;
              },
            },
            {
              title: "Quantity",
              dataIndex: "quantity",
              render: (value, record) => {
                return (
                  <InputNumber
                    min={0}
                    defaultValue={value}
                    onChange={(value) => {
                      setCartItems((pre) =>
                        pre.map((cart) => {
                          if (record.id === cart.id) {
                            cart.total = cart.price * value;
                          }
                          return cart;
                        })
                      );
                    }}
                  ></InputNumber>
                );
              },
            },
            {
              title: "Total",
              dataIndex: "total",
              render: (value) => {
                return <span>${value}</span>;
              },
            },
          ]}
          dataSource={cartItems}
          summary={(data) => {
            const total = data.reduce((pre, current) => {
              return pre + current.total;
            }, 0);
            return <span>Total:{total}</span>;
          }}
        />
        <Button
          onClick={() => {
            setCheckoutDrawerOpen(true);
          }}
          type="primary"
        >
          Checkout Your Cart
        </Button>
      </Drawer>
      <Drawer
        open={checkoutDrawerOpen}
        onClose={() => {
          setCheckoutDrawerOpen(false);
        }}
        title="Confirm Your Order"
      >
        <Form onFinish={onConfirmOrder}>
          <Form.Item
            rules={[
              {
                required: true,
              },
            ]}
            label="Name"
            name="name"
          >
            <Input placeholder="Enter your name" />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                type: "email",
                message: "Please enter valid email id",
              },
            ]}
            label="Email"
            name="your_name"
          >
            <Input placeholder="Enter your email" />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please enter your address",
              },
            ]}
            label="Address"
            name="your_address"
          >
            <Input placeholder="Enter your address" />
          </Form.Item>
          <Form.Item>
            <Checkbox>Cash on Delivery</Checkbox>
          </Form.Item>
          <Form.Item>
            <Checkbox>Online Payment</Checkbox>
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Confirm Order
          </Button>
        </Form>
      </Drawer>
    </div>
  );
}

export default Header;
