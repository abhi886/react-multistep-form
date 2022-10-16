import React from "react";
import { FormWrapper } from "./FormWrapper";

export default function contactInfo() {
  return (
    <FormWrapper title={"Contact Information"}>
      <label>Enter your address:</label>
      <input autoFocus required type='text' />
    </FormWrapper>
  );
}
