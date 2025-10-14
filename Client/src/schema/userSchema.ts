// <== IMPORTS ==>
import { z } from "zod";

// <== USER SIGNUP VALIDATION SCHEMA ==>
export const userSignUpSchema = z.object({
  email: z.email("Invalid Email Address Provided!"),
  fullName: z.string().min(3, "Invalid FullName Provided!"),
  contact: z.string().min(10, "Invalid Contact No Provided!"),
  password: z.string().min(8, "Password must be at least 8 Characters!"),
});

// <== SIGNUP INPUT DATA TYPE ==>
export type SignUpInputState = z.infer<typeof userSignUpSchema>;

// <== USER LOGIN VALIDATION SCHEMA ==>
export const userLoginSchema = z.object({
  email: z.email("Invalid Email Address Provided!"),
  password: z.string().min(8, "Password must be at least 8 Characters!"),
});

// <== LOGIN INPUT DATA TYPE ==>
export type LoginInputState = z.infer<typeof userLoginSchema>;
