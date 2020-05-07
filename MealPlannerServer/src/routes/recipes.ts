import express from 'express';
const router = express.Router();

router.get('/', (req: any, res: any, next: any) => {
  res.status(200).json({
    message: "GET request"
  })
})

router.post('/', (req: any, res: any, next: any) => {
  res.status(200).json({
    message: "POST request"
  })
})

export = router;
