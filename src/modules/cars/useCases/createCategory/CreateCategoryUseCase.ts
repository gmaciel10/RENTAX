import {
    ICategoriesRepository,
    ICreateCategoryDTO,
} from "../../repositories/ICategoriesRepository";

class CreateCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    execute({ name, description }: ICreateCategoryDTO): void {
        const categoryAlreadyExists =
            this.categoriesRepository.findByName(name);
        if (categoryAlreadyExists) {
            throw new Error("Category already exixsts!");
        }
        this.categoriesRepository.create({ name, description });
    }
}
export { CreateCategoryUseCase };