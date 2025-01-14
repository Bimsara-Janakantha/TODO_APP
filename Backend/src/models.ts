import { InferSchemaType, model, Schema } from "mongoose";

const adminSchema = new Schema({
  avatar: { type: String, required: false },
  name: { type: String, required: true },
  role: { type: String, required: true },
  org: { type: String, required: true },
});

type Admin = InferSchemaType<typeof adminSchema>;

export default model<Admin>("admins", adminSchema); // (<collection_name_in_plural>, <schema_name>)
