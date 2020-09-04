import { Field, InputType } from "type-graphql";

@InputType()
class OrderByInputType {
  @Field({ defaultValue: "created_at", nullable: true })
  fieldName: string;

  @Field({ defaultValue: "DESC", nullable: true,description:"can only work with DESC or ASC" })
  direction: string;
}
@InputType()
class PaginationInputType {
  @Field({ defaultValue: 2, nullable: true })
  take: number;
  @Field({ defaultValue: 0, nullable: true })
  skip: number;
}

@InputType()
export class Pagination {
  @Field({ nullable: true })
  order: OrderByInputType;
  @Field({ nullable: true })
  pagination: PaginationInputType;
  @Field({ nullable: true })
  search: string;
}
