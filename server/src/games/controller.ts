import {
  JsonController,
  Get,
  Post,
  HttpCode,
  Body,
  Param,
  NotFoundError,
  Put
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

  @Put("/game/:id")
  // @HttpCode(200)
  async editStudent(@Param("id") id: number, @Body() update: Partial<Game>) {
    const game = await Game.findOne(id);
    if (!game) throw new NotFoundError("put Student doesn't exist");
    console.log("test");

    return "Game.merge(game, update).save()";
  }
}

//http put :4000/game/1 ships=[[null,1,null],[null,1,null],[null,1,null]]

// @Put("/students/:id")
// // @HttpCode(200)
// async editStudent(
//   @Param("id") id: number,
//   @Body() update: Partial<Students>
// ) {
//   const student = await Students.findOne(id);
//   if (!student) throw new NotFoundError("put Student doesn't exist");

//   return Students.merge(student, update).save();
// }
