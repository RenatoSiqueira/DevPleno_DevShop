import { Query, Resolver } from '@nestjs/graphql'
import { CategoryService } from './category.service'
import { CategoryPublic } from './dto/category'

@Resolver(of => CategoryPublic)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query(returns => [CategoryPublic], { name: 'getAllCategories' })
  async getAllCategories(): Promise<CategoryPublic[]> {
    return this.categoryService.findAll()
  }
}
