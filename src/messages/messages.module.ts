import { Module } from "@nestjs/common";
import { MessageController } from "./message.controller";
import { MessagesService } from "./messages.service";
import { MessageRepository } from "./messages.repository";

@Module({
  controllers: [MessageController],
  providers: [MessagesService, MessageRepository],
})
export class MessagesModule {}
