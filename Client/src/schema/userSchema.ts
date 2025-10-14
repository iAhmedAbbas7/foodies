// <== IMPORTS ==>
import { z } from "zod";

// <== USER SIGNUP VALIDATION SCHEMA ==>
export const userSignUpSchema = z.object({
  fullName: z
    .string()
    .min(1, { message: "FullName is required" })
    .min(3, { message: "FullName must be at least 3 characters" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid Email Address provided" }),
  contact: z
    .string()
    .min(1, { message: "Contact Number is required" })
    .min(10, { message: "Contact Number must be at least 10 digits" }),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters" }),
});

// <== SIGNUP INPUT DATA TYPE ==>
export type SignUpInputState = z.infer<typeof userSignUpSchema>;

// <== USER LOGIN VALIDATION SCHEMA ==>
export const userLoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid Email Address provided" }),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters" }),
});

// <== LOGIN INPUT DATA TYPE ==>
export type LoginInputState = z.infer<typeof userLoginSchema>;
