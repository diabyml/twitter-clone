import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateProfileArgs } from "./args/AggregateProfileArgs";
import { Profile } from "../../../models/Profile";
import { AggregateProfile } from "../../outputs/AggregateProfile";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Profile)
export class AggregateProfileResolver {
  @TypeGraphQL.Query(_returns => AggregateProfile, {
    nullable: false
  })
  async aggregateProfile(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProfileArgs): Promise<AggregateProfile> {
    return getPrismaFromContext(ctx).profile.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
