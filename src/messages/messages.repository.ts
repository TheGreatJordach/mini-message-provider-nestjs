import { readFile, writeFile } from "fs/promises";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MessageRepository {
  async findOne(id: string) {
    const contents = await readFile("messages.json", "utf8");
    const messages = JSON.parse(contents);
    return messages[id];
  }

  async findAll() {
    const contents = await readFile("messages.json", "utf8");
    if (!contents) {
      return "File is Empty";
    }
    return JSON.parse(contents);
  }
  async create(content: string) {
    console.log(content, "is going to be saved");

    let messages = {};
    try {
      const contents = await readFile("messages.json", "utf8");
      if (contents) {
        messages = JSON.parse(contents);
      }
    } catch (err) {
      if (err.code !== "ENOENT") {
        throw err; // Rethrow if it's not a file-not-found error
      }
    }

    const id = Math.floor(Math.random() * 999 * 1000 + 73);
    messages[id] = { id, content };

    console.log("Message to save is", messages);
    await writeFile("messages.json", JSON.stringify(messages), "utf8");
  }
}
