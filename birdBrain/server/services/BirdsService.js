import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class BirdsService{
  async createBird(birdData) {
    const newBird = await dbContext.Birds.create(birdData)
    await newBird.populate('reporter')
    return newBird
  }
  async getBirds(query) {
    const birds = await dbContext.Birds.find(query).populate('reporter')
    return birds
  }
  async getBirdById(birdId) {
    const bird = await dbContext.Birds.findById(birdId).populate('reporter')
    if(!bird) throw new BadRequest(`No bird at id: ${birdId}`)

    return bird
  }

}

export const birdsService = new BirdsService()
