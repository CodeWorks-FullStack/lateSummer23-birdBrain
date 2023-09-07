import { Schema } from "mongoose";



export const BirdSchema = new Schema({
  name: {type: String, required: true, maxlength: 500},
  imgUrl: {type: String, required: true, maxlength: 500, default: 'https://static.jojowiki.com/images/b/bf/latest/20200118092832/Pet_Shop_Infobox_Manga.png'},
  canFly: {type: Boolean, required: true, default: true},
  size: {type: String, enum: ['small', 'medium', 'large', 'buff', 'micro', 'chunky', 'extra-medium', 'juiced']},
  reporterId: {type: Schema.Types.ObjectId, ref: 'Account', required: true}
}, {timestamps: true, toJSON: {virtuals: true}})



BirdSchema.virtual('reporter', {
  localField: 'reporterId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})
