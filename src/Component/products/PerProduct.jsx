import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const PerProduct = ({ product, from }) => {
  const navigate = useNavigate();
  return (
    <Card className="mt-6 mb-10 w-96 bg-[#e2e2ff] shadow-[#ad780a] shadow-xl">
      <CardHeader color="blue-gray" className="relative h-56">
        <img src={product.src} alt="product_img" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="#da9d1dd1" className="mb-2 text-center">
          {product.title}
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
          Price: {product.price}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          className="w-full bg-[#da9d1dd1] text-black"
          onClick={() => navigate(`/product/${product.id}-${from}`)}
        >
          View
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PerProduct;
