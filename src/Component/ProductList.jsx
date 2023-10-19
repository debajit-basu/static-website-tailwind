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
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { featureProducts, topProducts } from "../utils";
import PerProduct from "./products/PerProduct";

export default function ProductList() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [related, setRelated] = useState([]);
  const [where, setWhere] = useState("");
  const [open, setOpen] = useState(false);

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

      if (item) setData(item);
      setRelated(reletedItem);
    }
  }, [id]);

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
                  <Input label="Name" />
                </div>
                <div className="mb-2">
                  <Input label="Mobile Number" />
                </div>
                <div className="mb-2">
                  <Input label="Quantity" type="number" />
                </div>
                <div className="mb-2">
                  <Textarea label="Shipping Address" />
                </div>

                <div className="flex align-end justify-end">
                  <Button
                    className="bg-[#da9d1dd1] text-black"
                    variant="contained"
                    onClick={() => setOpen(true)}
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
          handleClose={() => setOpen(false)}
        />
      )}
    </div>
  );
}

const DialogView = ({ item, open, handleClose }) => {
  return (
    <Dialog open={open} handler={handleClose} size="lg">
      <DialogHeader className="justify-center">
        <Typography className="text-center">
          Final step to request product at 10% advance
        </Typography>
      </DialogHeader>
      <DialogBody divider className="h-[80vh] overflow-y-scroll">
        <div className="grid grid-cols-1 gap-8 mt-1 md:grid md:grid-cols-2 md:gap-4 text-gridtext w-full">
          <div>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Billing Information
            </Typography>
            <div className="mb-2">
              <Input label="name" />
            </div>
            <div className="mb-2">
              <Input label="email" />
            </div>
            <div className="mb-2">
              <Input label="Phone" />
            </div>
            <div className="mb-2">
              <Textarea label="Billing Address" />
            </div>
            <div className="mb-2">
              <Textarea label="Shipping Address" />
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
                      1
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
                      {item.price}
                    </Typography>
                  </td>
                </tr>
              </tbody>
            </table>
            <Typography variant="h6" color="blue-gray" className="my-2">
              Total: {item.price}
            </Typography>
            <div className="my-2">
              <Select label="Payment Method">
                <Option>Gpay/Paytm/phonepe</Option>
                <Option>Debit/credit card</Option>
                <Option>Net banking</Option>
              </Select>
            </div>
            <Button variant="contained" className="bg-[#da9d1dd1] text-black">
              Pay Now
            </Button>
          </div>
        </div>
      </DialogBody>
    </Dialog>
  );
};
