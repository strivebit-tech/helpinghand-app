import React from "react";

export const ContributionItem = ({ data }) => {
  const { name, street, city } = data;
  return (
    <>
      <div className="border p-3 mb-3">
        <h4 className="font-weight-bold">{name}</h4>
        <div>{street + " " + city}</div>
      </div>
    </>
  );
};
