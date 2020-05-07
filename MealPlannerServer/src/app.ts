import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import resourcesRoutes from './routes/resources';
import recipesRoutes from './routes/recipes';
const app = express();

var mongoOpt = {
  "user":process.env.DB_USER,
  "pass":process.env.DB_PW,
   useNewUrlParser: true,
   useUnifiedTopology: true
}

mongoose.connect("mongodb://176.222.224.212:27017/mealPlannerdb?authSource=mealPlannerdb", mongoOpt);

app.use(morgan('dev'))

app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// ROUTES
app.use("/resources", resourcesRoutes)
app.use("/recipes", recipesRoutes)

// ERRORS
interface ResponseError extends Error { // just extemd
  status?: number;
}
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {  // every request that reaches this line (not route handeled it before)
  const error = new Error('Not found') as ResponseError;
  error.status = 404;
  next(error);
})

app.use((error: ResponseError, req: express.Request, res: any, next: express.NextFunction) => {  // other errors
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  })
})

export = app;
