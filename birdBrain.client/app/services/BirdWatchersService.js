import { AppState } from "../AppState.js"
import { BirdWatcher } from "../models/BirdWatcher.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class BirdWatchersService {
  async createBirdWatcher() {
    const birdData = { birdId: AppState.activeBird.id }
    const res = await api.post('api/birdwatchers', birdData)
    logger.log('created bird watcher', res.data)
    AppState.birdWatchers.push(new BirdWatcher(res.data))
    AppState.emit('birdWatchers')
  }
  async getBirdWatchers() {
    const birdId = AppState.activeBird.id
    const res = await api.get(`api/birds/${birdId}/birdwatchers`)
    logger.log('Got bird watchers, baby', res.data)
    AppState.birdWatchers = res.data.map(bwPojo => new BirdWatcher(bwPojo))
  }
}

export const birdWatchersService = new BirdWatchersService()