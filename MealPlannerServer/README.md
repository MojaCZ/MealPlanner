ROUTES:
* `/resources`
  * GET `/getRange/0-20`  will list first 21 from database
  * GET `/startsWith/An`  will list first 21 from database
  * POST `/` not ready yet
  * DELETE `/:productId` not ready yet
  * PATCH `/:productId` not ready yet

* `/recipes`
  * GET `/` not ready yet

mongoServer:
  * `mongodb://176.222.224.212:27017/mealPlannerdb?authSource=mealPlannerdb`

## npm installations
* `npm i express`
* `npm install --save mongoose`
* `npm install --save morgan`   // tunnel all requests through logger
* `npm install --save @types/morgan`
