import {
  JsonController,
  Get,
  // Post,
  // HttpCode,
  Body,
  Param,
  NotFoundError,
  Put
} from "routing-controllers";
import Game from "./entity";

//import { myShips } from "../logicConstants";

///----------dit werkt--------
// @JsonController()
// export default class gameController {
//   @Get("/setupGames")
//   async allBatchs() {
//     const game = await Game.find();
//     return game;
//   }
//http get :4000/games

//--------------eind--------------

//--------------delete en add--------------

@JsonController()

// async deleteQuiz(@Param("id") id: number) {
//   const student = await Students.findOne(id);

//   if (!student) throw new NotFoundError("Nothing to Delete here!");

//   if (student) student.remove();
//   return "student Deleted with" + id;
// }
export default class gameController {
  @Get("/setupGames")
  async allBatchs() {
    const game = await Game.find();
    return game;
  }
  // http get :4000/games

  @Put("/placeShips/:id")
  async updatePage(@Param("id") id: number, @Body() update: Partial<Game>) {
    const game = await Game.findOne(id);
    if (!game) throw new NotFoundError("No game id find");
    // if (!game)  Game.findOne(id).save();
    console.log(update, "update");

    Game.merge(game, update).save();
    const ALLgame = await Game.find();

    return ALLgame;
  }
  // http put :4000/placeShips/1 ships="newname"
}

//----------post proberen---------
// @Post("/placeShips")
// @HttpCode(201)
// async newbatch(@Body() game: Game) {
//   return game.save();
// }

//http Post :4000/placeShips ships="henksadfa"
