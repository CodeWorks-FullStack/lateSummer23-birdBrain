import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { birdWatchersService } from "../services/BirdWatchersService.js";



export class BirdWatchersController extends BaseController {
  constructor () {
    super('api/birdwatchers')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createBirdWatcher)
      .delete('/:birdWatcherId', this.removeBirdWatcher)

  }
  async createBirdWatcher(req, res, next) {
    try {
      const body = req.body
      body.accountId = req.userInfo.id
      const watcher = await birdWatchersService.createBirdWatcher(body)
      res.send(watcher)
    } catch (error) {
      next(error)
    }
  }

  async removeBirdWatcher(req, res, next) {
    try {
      const birdWatcherId = req.params.birdWatcherId
      const message = await birdWatchersService.removeBirdWatcher(birdWatcherId, req.userInfo)
      res.send(message)
    } catch (error) {
      next(error)
    }
  }
}
