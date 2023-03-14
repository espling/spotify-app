"use client";

import React from "react";
import { Boundary } from "#/ui/Boundary";
import Button from "#/ui/Button/Button";
import styles from "#/styles/error.module.scss";

export default function Error({ error, reset }: any) {
  React.useEffect(() => {
    console.log("logging error:", error);
  }, [error]);

  return (
    <Boundary labels={["Home page Error UI"]} color="pink">
      <div
        style={{
          marginBlock: "1rem",
        }}
      >
        <div>
          <strong
            style={{
              fontWeight: 700,
            }}
          >
            Error:
          </strong>{" "}
          {error?.message}
        </div>
        <div>
          <Button onClick={() => {}}>Try Again</Button>
        </div>
      </div>
    </Boundary>
  );
}
