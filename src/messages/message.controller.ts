import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  NotFoundException,
} from "@nestjs/common";
import { CreateMessageDto } from "./dtos/create-message.dto";
import { MessagesService } from "./messages.service";

@Controller("messages")
export class MessageController {
  constructor(public messageService: MessagesService) {}
  @Get()
  getAllMessages() {
    return this.messageService.findAll();
  }

  @Post()
  createMessage(
    @Body()
    body: CreateMessageDto
  ) {
    return this.messageService.create(body);
  }

  @Get(":id")
  async getMessageById(@Param("id") id: string) {
    const message = await this.messageService.findOne(id);
    if (!message) {
      throw new NotFoundException(`Message with ID ${id} not found`);
    }
    return message;
  }
}
