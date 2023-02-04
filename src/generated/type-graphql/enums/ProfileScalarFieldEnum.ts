import * as TypeGraphQL from "type-graphql";

export enum ProfileScalarFieldEnum {
  id = "id",
  bio = "bio",
  location = "location",
  website = "website",
  userId = "userId"
}
TypeGraphQL.registerEnumType(ProfileScalarFieldEnum, {
  name: "ProfileScalarFieldEnum",
  description: undefined,
});
