import { Schema } from "mongoose";



export const BirdWatcherSchema = new Schema({
  accountId: {type: Schema.Types.ObjectId, required: true, ref: 'Account'},
  birdId: {type: Schema.Types.ObjectId, required: true, ref: 'Bird'},
  watcherNote: {type: String, minlength: 5, maxlength: 55}
}, {timestamps: true, toJSON: {virtuals: true}})


BirdWatcherSchema.virtual('bird', {
  localField: 'birdId',
  ref: 'Bird',
  foreignField: '_id',
  justOne: true
})
// NOTE as a practice. the account should always be used when referencing yourself as a logged in individual. If something is mean to represent another user on your app, the practice would dictate you call them a 'profile'
BirdWatcherSchema.virtual('profile',{
localField: 'accountId',
ref: 'Account',
foreignField: '_id',
justOne: true
})
