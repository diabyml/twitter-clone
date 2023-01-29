import { MyContext } from "src/utils/context";
import { Ctx, Query, Resolver } from "type-graphql";

@Resolver()
export class HelloResolver {
  @Query(() => String)
  hello(): string {
    return "hello, world";
  }

  @Query(() => String)
  async test(@Ctx() { prisma }: MyContext): Promise<any> {
    const allUsers = await prisma.user.findMany({ include: { posts: true } });
    return JSON.stringify(allUsers);
  }
}
