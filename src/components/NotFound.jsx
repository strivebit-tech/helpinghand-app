import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const NotFound = () => {
  return (
    <div className="text-center mt-5 py-5">
      <h1 style={{ fontSize: "5rem" }} className="text-muted text-center">
        404
      </h1>
      <h2>Page not found</h2>
      <Link to="/">
        <Button variant={"accent"} className="mt-3">
          <strong>Go to home</strong>
        </Button>
      </Link>
    </div>
  );
};
