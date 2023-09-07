import { Auth0Provider } from "@bcwdev/auth0provider";
import { birdsService } from "../services/BirdsService.js";
import BaseController from "../utils/BaseController.js";
import { logger } from "../utils/Logger.js";
import { birdWatchersService } from "../services/BirdWatchersService.js";



export class BirdsController extends BaseController{
  constructor(){
    super('api/birds')
    this.router
    // NOTE .use is used to run middleware, everything below this .use will have to run it's instructions
    .use((request, response, next)=> {
      logger.log('middleware baby!')
      // @ts-ignore
      request.sandwich = 'banana' // this attaches sandwhich to the request
      next()
    })
    .get('', this.getBirds) // because this is above the .use, you can get to this request without being logged in.
    .get('/:birdId',this.getBirdById)
    .get('/:birdId/birdwatchers', this.getBirdWatchers)
    .use(Auth0Provider.getAuthorizedUserInfo) // this takes the jwt from the request headers, and verifys it with auth0, then attaches that users info to the request
    .post('', this.createBird)
  }

  async createBird(req, res, next){
    try {
      const body = req.body
      body.reporterId = req.userInfo.id
      const bird = await birdsService.createBird(body)
      res.send(bird)
    } catch (error) {
      next(error)
    }
  }

  async getBirds(req, res, next){
    try {
      const birds = await birdsService.getBirds(req.query)
      res.send(birds)
    } catch (error) {
      next(error)
    }
  }

  async getBirdById(req, res, next){
    try {
      const bird = await birdsService.getBirdById(req.params.birdId)
      res.send(bird)
    } catch (error) {
      next(error)
    }
  }

  async getBirdWatchers(req, res, next){
    try {
      const watchers = await birdWatchersService.getBirdWatchers(req.params.birdId)
      res.send(watchers)
    } catch (error) {
      next(error)
    }
  }
}
