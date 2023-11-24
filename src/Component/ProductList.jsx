import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Input,
  Dialog,
  DialogHeader,
  DialogBody,
  Textarea,
  Select,
  Option,
} from "@material-tailwind/react";
// import axios from "axios";
import swal from "sweetalert";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { featureProducts, topProducts, imitationProduct } from "../utils";
import PerProduct from "./products/PerProduct";
import { data } from "autoprefixer";

export default function ProductList() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [related, setRelated] = useState([]);
  const [where, setWhere] = useState("");
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "Ram Das",
    phone: "9830254789",
    email: "demo@topmail.com",
    quantity: "2",
    shippingAddress: "Sample addresss kolkata",
  });
  const [validation, setValidation] = useState(true);

  useEffect(() => {
    if (id) {
      const [pId, from] = id.split("-");
      let item = null,
        reletedItem = [];
      if (from === "top") {
        item = topProducts.find((e) => e.id === +pId);
        reletedItem = topProducts.filter((e) => e.id !== +pId);
        setWhere("top");
      }

      if (from === "feat") {
        item = featureProducts.find((e) => e.id === +pId);
        reletedItem = featureProducts.filter((e) => e.id !== +pId);
        setWhere("feat");
      }

      if (from === "imitation") {
        item = imitationProduct.find((e) => e.id === +pId);
        reletedItem = imitationProduct.filter((e) => e.id !== +pId);
        setWhere("imitation");
      }

      if (item) setData(item);
      setRelated(reletedItem);
    }
  }, [id]);

  const handelOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setValidation(true);
  };

  const handelProceed = () => {
    if (
      formData.name !== "" &&
      formData.phone !== "" &&
      formData.quantity !== "" &&
      formData.shippingAddress !== "" &&
      formData.email !== ""
    ) {
      setOpen(true);
    } else {
      setValidation(false);
    }
  };

  const handelClearData = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      quantity: "",
      shippingAddress: "",
    });
  };

  return (
    <div className="m-3">
      {data !== null && (
        <div>
          <div className="w-[80vw] mx-auto">
            <Card className="w-full  bg-[#dcdbff] shadow-[#ad780a] shadow-2xl sm:flex-row">
              <CardHeader
                shadow={false}
                floated={false}
                className="m-0 sm:w-2/5 shrink-0 rounded-r-none"
              >
                <img src={data.src} className="h-full w-full object-cover" />
              </CardHeader>
              <CardBody className="w-3/5">
                <Typography
                  variant="h4"
                  color="blue-gray"
                  className="mb-2 text-center"
                >
                  {data.title}
                </Typography>
                <Typography
                  variant="h6"
                  color="gray"
                  className="mb-4 uppercase text-center"
                >
                  {data.price}
                </Typography>
                <div className="mb-2">
                  <Input
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handelOnChange}
                    error={!validation && formData.name === ""}
                  />
                </div>
                <div className="mb-2">
                  <Input
                    label="Mobile Number"
                    type="number"
                    name="phone"
                    value={formData.phone}
                    onChange={handelOnChange}
                    error={!validation && formData.phone === ""}
                  />
                </div>
                <div className="mb-2">
                  <Input
                    label="email"
                    name="email"
                    value={formData.email}
                    onChange={handelOnChange}
                    error={!validation && formData.email === ""}
                  />
                </div>
                <div className="mb-2">
                  <Input
                    label="Quantity"
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handelOnChange}
                    error={!validation && formData.quantity === ""}
                  />
                </div>
                <div className="mb-2">
                  <Textarea
                    label="Shipping Address"
                    name="shippingAddress"
                    value={formData.shippingAddress}
                    onChange={handelOnChange}
                    error={!validation && formData.shippingAddress === ""}
                  />
                </div>

                <div className="flex align-end justify-end">
                  <Button
                    className="bg-[#da9d1dd1] text-black"
                    variant="contained"
                    onClick={() => {
                      handelProceed();
                    }}
                  >
                    proceed
                  </Button>
                </div>
              </CardBody>
            </Card>
          </div>

          <div className="mt-10 text-2xl font-semibold text-center p-5 text-[#6b6e70]">
            Related Products
          </div>
          <div className="mb-5 boxShadow">
            <div className="flex gap-4 flex-wrap justify-center align-center w-full">
              {related.length > 0 &&
                related.map((e) => (
                  <PerProduct product={e} key={e.id} from={where} />
                ))}
            </div>
          </div>
        </div>
      )}

      {open && (
        <DialogView
          open={open}
          item={data}
          handleClose={() => {
            handelClearData();
            setOpen(false);
          }}
          data={formData}
        />
      )}
    </div>
  );
}

const DialogView = ({ item, open, handleClose, data }) => {
  const [paymentMethod, setPaymentMethod] = useState("");

  const handelPay = () => {
    swal("Your order is successfull. we will get back to you within 24 hours.");
    handleClose();
  };
  return (
    <Dialog open={open} handler={handleClose} size="lg">
      <DialogHeader className="justify-center">
        <Typography className="text-center">
          Final step to request product at 10% advance
        </Typography>
      </DialogHeader>
      {Object.entries(data).length > 0 && (
        <DialogBody divider className="h-[80vh] overflow-y-scroll">
          <div className="grid grid-cols-1 gap-8 mt-1 md:grid md:grid-cols-2 md:gap-4 text-gridtext w-full">
            <div>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Billing Information
              </Typography>
              <div className="mb-2">
                <Input label="name" value={data.name} />
              </div>
              <div className="mb-2">
                <Input label="email" value={data.email} />
              </div>
              <div className="mb-2">
                <Input label="Phone" value={data.phone} />
              </div>
              <div className="mb-2">
                <Textarea
                  label="Billing Address"
                  value={data.shippingAddress}
                />
              </div>
              <div className="mb-2">
                <Textarea
                  label="Shipping Address"
                  value={data.shippingAddress}
                />
              </div>
            </div>
            <div>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Order Summary
              </Typography>
              <table className="w-full min-w-max table-auto text-left">
                <thead>
                  <tr>
                    <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        Product
                      </Typography>
                    </th>

                    <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        Price
                      </Typography>
                    </th>
                    <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        Quantity
                      </Typography>
                    </th>
                    <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        Total
                      </Typography>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border-b border-blue-gray-50">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {item.title}
                      </Typography>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {item.price}
                      </Typography>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {data.quantity}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        {parseInt(item.price.split("Rs")[1]) *
                          parseInt(data.quantity)}
                      </Typography>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Typography variant="h6" color="blue-gray" className="my-2">
                Total:{" "}
                {parseInt(item.price.split("Rs")[1]) * parseInt(data.quantity)}
              </Typography>
              <Typography variant="h6" color="blue-gray" className="my-2">
                Total with 10% booking amount:{" "}
                {Math.round(
                  (parseInt(item.price.split("Rs")[1]) *
                    parseInt(data.quantity) *
                    10) /
                    100
                )}
              </Typography>
              <div className="my-2">
                <Select
                  label="Payment Method"
                  onChange={(e) => setPaymentMethod(e)}
                  value={paymentMethod}
                >
                  <Option value={"Payment gateway"}>Payment gateway</Option>
                  <Option value="Initial booking">Initial booking</Option>
                </Select>
                {paymentMethod === "Payment gateway" && (
                  <span className="font-semibold text-sm">
                    **Pay via payment gateway is in progress
                  </span>
                )}
              </div>
              <Button
                variant="contained"
                className="bg-[#da9d1dd1] text-black"
                disabled={
                  paymentMethod === "Payment gateway" || paymentMethod == ""
                }
                onClick={handelPay}
              >
                Pay Now
              </Button>
            </div>
          </div>
        </DialogBody>
      )}
    </Dialog>
  );
};
