import { Card, Image, List, Typography, Rate, Button, message } from "antd";
import { useEffect, useState } from "react";
import { getAllProducts, addToCart } from "../API";

const Men = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getAllProducts().then((res) => {
      setItems(res.products);
    });
  }, []);

  return (
    <div>
      <List
        grid={{ column: 3 }}
        renderItem={(product, index) => {
          return (
            <List.Item>
              <Card
                title={product.title}
                key={index}
                cover={
                  <Image
                    className="itemCardImage"
                    style={{
                      height: "250px",
                      width: "80%",
                      margin: "30px",
                      fontSize: "50px",
                    }}
                    src={product.thumbnail}
                    alt={product.title}
                  />
                }
                actions={[
                  <Rate allowHalf value={product.rating} />,
                  <AddToCartButton item={product} />,
                ]}
              >
                <Card.Meta
                  title={
                    <Typography.Paragraph>
                      Price:${product.price}{" "}
                      <Typography.Text delete type="danger">
                        {/* {parseFloat(
                          product.price +
                            (product.price * product.discoutPercentage) / 100
                        ).toFixed(2)} */}
                      </Typography.Text>
                    </Typography.Paragraph>
                  }
                  description={product.description}
                ></Card.Meta>
              </Card>
            </List.Item>
          );
        }}
        dataSource={items}
      />
    </div>
  );
};
function AddToCartButton({ item }) {
  const addProductToCart = () => {
    addToCart(item.id).then((res) => {
      message.success(`${item.title} has been added to the cart`);
    });
  };
  return (
    <Button
      type="link"
      onClick={() => {
        addProductToCart();
      }}
    >
      Add to cart
    </Button>
  );
}

export default Men;
