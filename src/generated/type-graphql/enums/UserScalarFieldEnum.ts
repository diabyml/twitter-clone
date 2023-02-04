import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  id = "id",
  username = "username",
  fullname = "fullname",
  email = "email",
  birthday = "birthday",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  role = "role"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
