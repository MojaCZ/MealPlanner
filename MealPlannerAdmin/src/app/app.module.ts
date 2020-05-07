import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './materials.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

// COMPONENTS
import { NavigationComponent } from './components/navigation/navigation.component';
import { ResourcesPageComponent } from './components/resources-page/resources-page.component';
  import { ResourceTileComponent } from './components/resources-page/resource-tile/resource-tile.component';
import { RecipesPageComponent } from './components/recipes-page/recipes-page.component';
  import { RecipeTileComponent } from './components/recipes-page/recipe-tile/recipe-tile.component';
import { ResourceComponent } from './components/resource/resource.component';
import { RecipeComponent } from './components/recipe/recipe.component';

// SERVICES

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ResourcesPageComponent,
    RecipesPageComponent,
    RecipeTileComponent,
    ResourceTileComponent,
    ResourceComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
