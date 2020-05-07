import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { ResourcesPageComponent } from './components/resources-page/resources-page.component';
import { RecipesPageComponent } from './components/recipes-page/recipes-page.component';
import { ResourceComponent } from './components/resource/resource.component';
import { RecipeComponent } from './components/recipe/recipe.component';

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
    path: 'resource',
    component: ResourceComponent,
    resolve: { config : ConfigAPIService }
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
