import { AppState } from "../AppState.js";
import { birdsService } from "../services/BirdsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawBirds() {
  const birds = AppState.birds

  let content = ''
  birds.forEach(bird => content += bird.BirdTemplate)

  setHTML('birds', content)
}

function _drawBirdDetails() {
  const bird = AppState.activeBird
  setHTML('birdDetails', bird.BirdDetailsTemplate)
}


export class BirdsController {
  constructor () {
    this.getBirds()

    AppState.on('birds', _drawBirds)
    AppState.on('activeBird', _drawBirdDetails)
  }

  async getBirds() {
    try {
      await birdsService.getBirds()
    } catch (error) {
      Pop.error(error)
    }
  }

  setActiveBird(birdId) {
    birdsService.setActiveBird(birdId)
  }
}