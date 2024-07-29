// src/form/form.model.ts

import { Schema, Document } from 'mongoose';

export interface Form extends Document {
  username: string;
  phoneNumber: string;
  email: string;
  name: string;
  dateOfBirth: string;
}

export const FormSchema = new Schema<Form>({
  username: String,
  phoneNumber: String,
  email: String,
  name: String,
  dateOfBirth: String,
});
