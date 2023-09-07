import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { BirdSchema } from '../models/Bird.js';
import { BirdWatcherSchema } from '../models/BirdWatcher.js';

class DbContext {
  Account = mongoose.model('Account', AccountSchema);
  Birds = mongoose.model('Bird', BirdSchema)

  BirdWatchers = mongoose.model('BirdWatcher', BirdWatcherSchema)
}

export const dbContext = new DbContext()
