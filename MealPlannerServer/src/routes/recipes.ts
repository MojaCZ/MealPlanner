import express from 'express';
const router = express.Router();

router.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(200).json({
    message: "GET request"
  })
})

router.post('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(200).json({
    message: "POST request"
  })
})

export = router;
