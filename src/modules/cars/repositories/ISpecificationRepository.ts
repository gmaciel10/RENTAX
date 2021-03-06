import { ISpecificationDTO } from "@modules/cars/dtos/ISpecificationDTO";
import { Specification } from "@modules/cars/infra/typeorm/entities/Specification";

interface ISpecificationRepository {
    create({ name, description }: ISpecificationDTO): Promise<void>;
    list(): Promise<Specification[]>;
    findByName(name: string): Promise<Specification>;
}

export { ISpecificationRepository };
