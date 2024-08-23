import { Injectable } from "@nestjs/common";
import { CreateMessageDto } from "./dtos/create-message.dto";
import { MessageRepository } from "./messages.repository";

@Injectable()
export class MessagesService {
  constructor(public messagesRepo: MessageRepository) {}
  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }
  create(createMessageDto: CreateMessageDto) {
    return this.messagesRepo.create(createMessageDto.content);
  }
  findAll() {
    return this.messagesRepo.findAll();
  }
}
