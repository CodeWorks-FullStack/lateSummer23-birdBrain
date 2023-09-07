import { AppState } from "../AppState.js"
import { Bird } from "../models/Bird.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class BirdsService {
  setActiveBird(birdId) {
    const foundBird = AppState.birds.find(bird => bird.id == birdId)
    // console.log(foundBird);
    AppState.activeBird = foundBird
  }
  async getBirds() {
    const res = await api.get('api/birds')
    logger.log('got birds', res.data)
    AppState.birds = res.data.map(birdPojo => new Bird(birdPojo))
  }
}

export const birdsService = new BirdsService()