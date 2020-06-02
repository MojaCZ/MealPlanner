import express from 'express';
  const router = express.Router()
// import mongoose from 'mongoose';
  import Resource = require('../models/resource')
import "dotenv/config";


// *************** GET ***************
// return resource by _id
router.get('/getById/:id', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  Resource.find({ _id: req.params.id})
    .exec()
    .then( (doc:any) => {
      res.status(200).json(doc)
    })
    .catch( (err:any) => {
      res.status(500).json(err)
    })
})

// return list of all resources
router.get('/getResourcesList/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  Resource.find({})
    .exec()
    .then( (doc:any) => {
      const resourcesList: {id: string, name: string}[] = [];
      doc.forEach( (resource: any) => {
        resourcesList.push({id: resource._id, name: resource.name})
      })
      res.status(200).json(resourcesList);
    })
    .catch( (err:any) => {
      res.status(500).json(err)
    })
})

// getRange will return documents from database by :start-end
router.get('/getRange/:range', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.log(req.params.range)
  const range: string[] = req.params.range.split('-',2);
  console.log("RANGE:", range)
  let skip: number = parseInt(range[0]);
  let limit: number = parseInt(range[1]);
  limit = limit-skip
  console.log(skip, limit)

  Resource.find().skip(skip).limit(limit)
    .exec()
    .then( (doc:any) => {
      res.status(200).json(doc)
    })
    .catch( (err:any) => {
      res.status(500).json(err)
    })
})

// *************** POST ***************
router.post('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(200).json({
    message: "POST request"
  });
});

// *************** DELETE ***************
// delete will remove resource by given _id
router.delete('/:productId', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(200).json({
    message: "PATCH request"
  });
});

// *************** PATCH ***************
router.patch('/:productId', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(200).json({
    message: "PATCH request"
  });
});

export = router;
