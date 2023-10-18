import { Typography } from "@material-tailwind/react";
import React from "react";

const Footer = () => {
  return (
    <div className="px-4 py-4 bg-[#e8eae9f2]">
      <div className="grid grid-cols-1 gap-8 mt-2 md:grid md:grid-cols-2 md:gap-4 lg:grid lg:grid-cols-3 text-gridtext lg:gap-4 w-full">
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
      </div>
    </div>
  );
};

export default Footer;
