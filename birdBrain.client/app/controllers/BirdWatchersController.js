import { AppState } from "../AppState.js";
import { birdWatchersService } from "../services/BirdWatchersService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawBirdWatchers() {
  const birdWatchers = AppState.birdWatchers
  let content = ''
  birdWatchers.forEach(birdWatcher => content += birdWatcher.BirdWatcherTemplate)
  setHTML('birdWatchers', content)
}


export class BirdWatchersController {
  constructor () {
    AppState.on('activeBird', this.getBirdWatchers)
    AppState.on('birdWatchers', _drawBirdWatchers)
  }


  async getBirdWatchers() {
    try {
      await birdWatchersService.getBirdWatchers()
    } catch (error) {
      Pop.error(error)
    }
  }

  async createBirdWatcher() {
    try {
      await birdWatchersService.createBirdWatcher()
    } catch (error) {
      Pop.error(error)
    }
  }
}