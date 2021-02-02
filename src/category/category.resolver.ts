import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { Category } from './category.entity'
import { CategoryService } from './category.service'
import { CategoryPublic } from './dto/category'
import { CategoryCreateInput } from './dto/category-create.input'
import { CategoryMapper } from './dto/category.mapper'

@Resolver(of => CategoryPublic)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query(returns => [CategoryPublic], { name: 'getAllCategories' })
  async getAllCategories(): Promise<CategoryPublic[]> {
    return this.categoryService.findAll()
  }

  @Mutation(returns => CategoryPublic, { name: 'createCategory' })
  async createCategory(
    @Args('input') input: CategoryCreateInput
  ): Promise<CategoryCreateInput> {
    return this.categoryService.create(CategoryMapper.toEntity(input))
  }

   @Mutation(returns => Boolean, { name: 'deleteCategory' })
  async deleteCategory(
    @Args('id') input: string
  ): Promise<boolean> {
    return this.categoryService.delete(input)
  }
}
