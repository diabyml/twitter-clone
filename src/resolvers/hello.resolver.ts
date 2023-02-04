import { MyContext } from "src/utils/context";
import { Ctx, Query, Resolver } from "type-graphql";
import { User } from "../graphql/models/User";

@Resolver()
export class HelloResolver {
  @Query(() => String)
  hello(): string {
    return "hello, world";
  }

  @Query(() => User)
  async test(@Ctx() { prisma }: MyContext): Promise<User | null> {
    const firstUser = await prisma.user.findFirst();
    return firstUser;
  }
}
