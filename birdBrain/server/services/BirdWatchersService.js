import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"



class BirdWatchersService{
  async removeBirdWatcher(birdWatcherId, userInfo) {
    const birdWatcherToRemove = await dbContext.BirdWatchers.findById(birdWatcherId).populate('bird')
// NOTE checks if there was a birdWatcher at the provided id
    if(!birdWatcherToRemove) throw new BadRequest(`no bird watcher with id: ${birdWatcherId}`)
// NOTE checks if the user making the request is the same as the birdWatcher's accountId (who created in the first place)
    if(birdWatcherToRemove.accountId != userInfo.id) throw new Forbidden("You don't own this, can't delete.")

    await birdWatcherToRemove.remove()
    // @ts-ignore
    return `you have unseen the ${birdWatcherToRemove.bird.name}`
  }
  async createBirdWatcher(birdWatcherData) {
    const watcher = await dbContext.BirdWatchers.create(birdWatcherData)
    await watcher.populate('bird profile', '-email')
    // await watcher.populate('bird profile', 'name picture')
    // await watcher.populate('profile', '-email')
    // await watcher.populate('profile', 'name picture')
    return watcher
  }
  async getBirdWatchers(birdId) {
    // --------------------------------------------------find all the birdwatchers that have a matching key and value
    const watchers = await dbContext.BirdWatchers.find({birdId}).populate('profile', '-email') // {birdId: '64fa017e934a92163bf3a667'}
    return watchers
  }

}

export const birdWatchersService = new BirdWatchersService()
