export class BirdWatcher {
  constructor (data) {
    this.id = data.id
    this.birdId = data.birdId
    this.accountId = data.accountId
    this.profile = data.profile
    this.watcherNote = data.watcherNote || ''
  }

  get BirdWatcherTemplate() {
    return /*html*/`
    <div class="col-1">
      <img src="${this.profile.picture}" alt="${this.profile.name}" title="${this.watcherNote}" class="img-fluid rounded-circle reporter-picture">
    </div>
    `
  }
}

let data = {
  "_id": "64fa0de2c310435885cf8a7d",
  "accountId": "64cc1425c4a35c72079736fb",
  "birdId": "64fa017e934a92163bf3a667",
  "createdAt": "2023-09-07T17:52:34.829Z",
  "updatedAt": "2023-09-07T17:52:34.829Z",
  "__v": 0,
  "profile": {
    "_id": "64cc1425c4a35c72079736fb",
    "subs": [
      "auth0|64cc14247ad6882ff01d7300"
    ],
    "name": "weather",
    "picture": "https://unblob.blob.core.windows.net/authpics/JonathanManga.png",
    "createdAt": "2023-09-07T15:54:15.885Z",
    "updatedAt": "2023-09-07T15:54:15.885Z",
    "__v": 0,
    "id": "64cc1425c4a35c72079736fb"
  },
  "id": "64fa0de2c310435885cf8a7d"
}