import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// resources
import { ResourcesPageComponent } from './components/resources/resources-page/resources-page.component';
import { ResourceComponent } from './components/resources/resource/resource.component';

// recipes
import { RecipesPageComponent } from './components/recipes/recipes-page/recipes-page.component';
import { RecipeComponent } from './components/recipes/recipe/recipe.component';

// services
// import { ResourcesAPIService } from './services/resources-API/resources-API.service';
import { RecipesAPIService } from './services/recipes-API/recipes-API.service';
import { ConfigAPIService } from './services/config-API/config-api.service'

const routes: Routes = [
  {
    path: '',
    component: ResourcesPageComponent
  },
  {
    path: 'resources',
    component: ResourcesPageComponent
  },
  {
    path: 'resource/:id',
    component: ResourceComponent,
  },
  {
    path: 'recipes',
    component: RecipesPageComponent,
    resolve: { RecipesAPI : RecipesAPIService }
  },
  {
    path: 'recipe',
    component: RecipeComponent,
    resolve: { config : ConfigAPIService }
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
