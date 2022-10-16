import React from "react";
import { FormWrapper } from "./FormWrapper";

export default function accountInfo() {
  return (
    <FormWrapper title={"Account Information"}>
      <label>Enter Your Email address</label>
      <input autoFocus required type='text' />
      <label>Enter Your password</label>
      <input autoFocus required type='text' />
    </FormWrapper>
  );
}
