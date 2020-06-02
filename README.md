# MealPlanner
Aplication is structured into three main parts.

1. [MealPlannerAdmin](./MealPlannerAdmin/README.md)
2. [MealPlannerApp](./MealPlannerApp/README.md)
3. [MealPlannerService](./MealPlannerServer/README.md)

Autorization and authentication is handled by JWT. Most of the content will be protected.

## MealPlannerAdmin
Client part created for administrator purposes on database.

Features:
* **login** - login into admin account, add, delete, edit admin account 
* **users** - list, add, delete, edit 
* **resources** - list, add, delete, edit 
* **recipes** - list, add, delete, edit 

The app is written in Agular, compiled into `./MealPlannerAdmin/dist` and served by nginx (later docker).
App can be served on localhost:4200 with command `npm serve` in root folder of app `./MealPlannerAdmin/`

## MealPlannerApp
Client part created for users which will be using app.

Features:
* **login**
* **set users parameters**
* **settings preferences**
* **get a diet**
* **edit diet**
* **get buy list for a given period**

The app is written in Agular, compiled into `./MealPlannerApp/dist` and served by nginx (later docker).
App can be served on localhost:4200 with command `npm serve` in root folder of app `./MealPlannerApp/`

## MealPlannerService
Backend REST API for MealPlanner app. It serves both [MealPlannerAdmin](#mealplannerapp) and [MealPlannerApp](#mealplanneradmin) frontend applications.

.
.

## Used Technologies

