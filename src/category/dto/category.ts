import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Category {
  @Field({ nullable: true })
  id: string

  @Field({ nullable: true })
  name: string
}
