import { ComplimentRepository } from "../repositories/ComplimentRepository";
import { getCustomRepository } from "typeorm";

class ListUserSendComplimentsService {
    async execute(user_id: string) {
        const complimentRepository = getCustomRepository(ComplimentRepository);

        const compliments = await complimentRepository.find({
            where: {
                user_receiver: user_id
            }
        });

        return compliments
    }
}

export { ListUserSendComplimentsService }