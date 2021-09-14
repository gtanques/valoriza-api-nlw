import { getCustomRepository } from "typeorm";
import { TagRepository } from "../repositories/TagRepository"

class CreateTagService {
    async execute(name: string) {

        console.log(`tag: ${name}`)

        const tagRepository = getCustomRepository(TagRepository);

        if (!name) {
            throw new Error("name incorrect");
        }

        const TagAlreadyExists = await tagRepository.findOne({
            name
        });

        if (TagAlreadyExists) {
            throw new Error("Tag already exists");
        }


        const tag = tagRepository.create({
            name,
        })

        await tagRepository.save(tag);

        return tag;
    }
}

export { CreateTagService }