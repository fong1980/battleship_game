import {
  JsonController,
  Get,
  Post,
  HttpCode,
  Body,
  Param
} from "routing-controllers";
import Game from "./entity";

@JsonController()
export default class gameController {
  @Get("/games")
  async allBatchs() {
    const game = await Game.find();
    return game;
  }
  //http get :4000/games
}
