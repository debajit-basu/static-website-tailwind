import React from "react";
import { Input, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const onChange = ({ target }) => setEmail(target.value);
  return (
    <div className="px-4 py-4 bg-[#e6e7e8] min-h-[60vh]">
      {/* <div className="grid grid-cols-1 gap-8 mt-2 md:grid md:grid-cols-2 md:gap-4 lg:grid lg:grid-cols-3 text-gridtext lg:gap-4 w-full">
        <div>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Contact Us
          </Typography>
          <Typography>Lorem, ipsum.</Typography>
          <Typography>Lorem, ipsum dolor</Typography>
          <Typography>Lorem, ipsum.</Typography>
        </div>
        <div>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Policies
          </Typography>
          <Typography>Lorem, ipsum.</Typography>
          <Typography>Lorem, ipsum dolor</Typography>
          <Typography>Lorem, ipsum.</Typography>
        </div>
        <div>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Follow Us
          </Typography>
          <Typography>Facebook</Typography>
          <Typography>Instagram</Typography>
          <Typography>Twitter</Typography>
        </div>
      </div> */}
      <div className="mx-10 mt-7">
        <div className="text-2xl font-thin text-[#6b6e70]">
          Explore Nayanika
        </div>
        <div className="border-t border-yellow-900 mt-7"></div>
      </div>
      <div className="flex justify-between mx-10 mt-7 flex-col md:flex-row">
        <div className="text-[#6b6e70]">
          <ul className="flex gap-3 flex-col">
            <li>
              Contact us
              <p className="mx-5 my-1">Nayanika jewellers</p>
              <p className="mx-5 my-1">
                162, M M Feeder Road. Kolkata - 700057 (Ramkrishna pally)
              </p>
              <p className="mx-5 my-1">Ph: 9051026929</p>
            </li>

            <li
              className="cursor-pointer hover:text-gray-900 hover:font-semibold"
              onClick={() => navigate("/policy")}
            >
              Policy
            </li>
            <li
              className="cursor-pointer hover:text-gray-900 hover:font-semibold"
              onClick={() => navigate("/terms-conditions")}
            >
              Terms & Conditions
            </li>
            <li>Our story</li>
          </ul>
        </div>
        <div className="mt-24 md:mt-0 text-[#6b6e70]">
          <p>Sign up to receive exclusive offers and news</p>
          <div className="relative flex w-full max-w-[24rem] mt-5">
            <Input
              type="email"
              label="Email Address"
              value={email}
              onChange={onChange}
              className="pr-20"
              containerProps={{
                className: "min-w-0",
              }}
            />
            <Button
              size="sm"
              color={email ? "gray" : "blue-gray"}
              disabled={!email}
              className="!absolute right-1 top-1 rounded"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <div className="mx-5 mt-14 text-[#6b6e70]">
        @2023 Nayanika Jwellery All Right Reserved
      </div>
    </div>
  );
};

export default Footer;
