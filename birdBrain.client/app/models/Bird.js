export class Bird {
  constructor (data) {
    this.id = data.id
    this.name = data.name
    this.imgUrl = data.imgUrl
    this.canFly = data.canFly
    this.size = data.size
    this.reporterId = data.reporterId
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    this.reporter = data.reporter
  }

  get BirdTemplate() {
    return /*html*/`
    <div class="col-md-3 mb-3">
      <div class="rounded border border-dark border-2">
        <img src="${this.imgUrl}" alt="${this.name}"
          class="img-fluid bird-img rounded-top">
        <div class="d-flex justify-content-between align-items-center p-1">
          <div>
            <p class="fs-4">${this.name}</p>
            <button onclick="app.BirdsController.setActiveBird('${this.id}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <i class="mdi mdi-binoculars"></i> See Details
            </button>
          </div>
          <img class="img-fluid rounded-circle reporter-picture"
            src="${this.reporter.picture}" alt="${this.reporter.name}">
        </div>
      </div>
    </div>
    `
  }

  get BirdDetailsTemplate() {
    return /*html*/`
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
          <img class="img-fluid" src="${this.imgUrl}"
            alt="${this.name}">
        </div>
        <div class="col-md-6">
          <h2>${this.name}</h2>
          <img src="${this.reporter.picture}" alt="${this.reporter.name}"
            class="reporter-picture img-fluid rounded-circle">
          <p>Reported by ${this.reporter.name} on ${this.createdAt.toLocaleDateString()}</p>
          <p>AKA ${this.createdAt.toDateString()}</p>
          <p>Size: ${this.size}</p>
          ${this.ComputeFlightDetails}
          <button onclick="app.BirdWatchersController.createBirdWatcher()">I have seen it</button>
        </div>
      </div>
      <div id="birdWatchers" class="row">
      
      </div>
    </div>
    `
  }
  get ComputeFlightDetails() {
    return this.canFly ?
      '<p>Flys? <i class="mdi mdi-airplane"></i></p>'
      :
      '<p>Flys? <i class="mdi mdi-penguin"></i></p>'
  }
}


let data = {
  "_id": "64fa00fc934a92163bf3a663",
  "name": "Hopped Up Herron",
  "imgUrl": "https://live.staticflickr.com/7217/7312655738_817ce1a768_z.jpg",
  "canFly": true,
  "size": "juiced",
  "reporterId": "64cc1425c4a35c72079736fb",
  "createdAt": "2023-09-07T16:57:32.376Z",
  "updatedAt": "2023-09-07T16:57:32.376Z",
  "__v": 0,
  "reporter": {
    "_id": "64cc1425c4a35c72079736fb",
    "subs": [
      "auth0|64cc14247ad6882ff01d7300"
    ],
    "email": "weather@report.com",
    "name": "weather",
    "picture": "https://unblob.blob.core.windows.net/authpics/JonathanManga.png",
    "createdAt": "2023-09-07T15:54:15.885Z",
    "updatedAt": "2023-09-07T15:54:15.885Z",
    "__v": 0,
    "id": "64cc1425c4a35c72079736fb"
  },
  "id": "64fa00fc934a92163bf3a663"
}