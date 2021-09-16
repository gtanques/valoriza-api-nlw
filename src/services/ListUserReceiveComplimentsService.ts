import { ComplimentRepository } from "../repositories/ComplimentRepository";
import { getCustomRepository } from "typeorm";

class ListUserReceiveComplimentsService {
    async execute(user_id: string) {
        const complimentRepository = getCustomRepository(ComplimentRepository);

        const compliments = await complimentRepository.find({
            where: {
                user_sender: user_id
            },
            relations: ["userSender", "userReceiver", "tag"]
        });

        return compliments
    }
}

export { ListUserReceiveComplimentsService }