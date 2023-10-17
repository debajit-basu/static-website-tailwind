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
          <Card className="w-full flex-row">
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-2/5 shrink-0 rounded-r-none"
            >
              <img src={data.src} className="h-full w-full object-cover" />
            </CardHeader>
            <CardBody className="w-3/5">
              <Typography variant="h4" color="blue-gray" className="mb-2">
                {data.title}
              </Typography>
              <Typography variant="h6" color="gray" className="mb-4 uppercase">
                {data.price}
              </Typography>
              <div className="mb-2">
                <Input label="lorem" />
              </div>
              <div className="mb-2">
                <Input label="lorem" />
              </div>
              <div className="mb-2">
                <Input label="lorem" />
              </div>
              <Button variant="outlined" onClick={() => setOpen(true)}>
                proceed
              </Button>
            </CardBody>
          </Card>

          <div className="text-xl font-semibold text-center p-5 text-teal-500">
            Related Products
          </div>
          <div className="border mb-5 boxShadow">
            <div className="grid grid-cols-1 gap-8 mt-5 md:grid md:grid-cols-2 sm:grid-cols-1 md:gap-4 lg:grid lg:grid-cols-3 text-gridtext lg:gap-4 w-full">
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
      <DialogBody divider className="h-[400px] overflow-scroll"></DialogBody>
    </Dialog>
  );
};
