import React from "react";
import { FormWrapper } from "./FormWrapper";

export default function personalInfo() {
  return (
    <FormWrapper title={"Personal Information"}>
      <label>Enter your first name:</label>
      <input autoFocus required type='text' />
      <label>Enter your last name:</label>
      <input type='text' />
    </FormWrapper>
  );
}
