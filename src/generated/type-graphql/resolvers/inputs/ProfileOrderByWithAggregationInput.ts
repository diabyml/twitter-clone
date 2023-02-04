import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfileCountOrderByAggregateInput } from "../inputs/ProfileCountOrderByAggregateInput";
import { ProfileMaxOrderByAggregateInput } from "../inputs/ProfileMaxOrderByAggregateInput";
import { ProfileMinOrderByAggregateInput } from "../inputs/ProfileMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ProfileOrderByWithAggregationInput", {
  isAbstract: true
})
export class ProfileOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  bio?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  location?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  website?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ProfileCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ProfileCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProfileMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ProfileMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProfileMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ProfileMinOrderByAggregateInput | undefined;
}
