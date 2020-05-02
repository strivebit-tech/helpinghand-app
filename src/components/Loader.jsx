import React from "react";
import { FaCircleNotch } from "react-icons/fa";

export const Loader = ({ loading }) => {
  if (loading)
    return (
      <div className="text-center">
        <div className="text-primary rotate text-center">
          <FaCircleNotch size={25} />
        </div>
        <span>Please wait..</span>
      </div>
    );

  return null;
};
