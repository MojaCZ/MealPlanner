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
import { ResourcesPageComponent } from './components/resources/resources-page/resources-page.component';
import { ResourceTileComponent } from './components/resources/resources-page/resource-tile/resource-tile.component';
import { RecipesPageComponent } from './components/recipes/recipes-page/recipes-page.component';
import { RecipeTileComponent } from './components/recipes/recipes-page/recipe-tile/recipe-tile.component';
import { ResourceComponent } from './components/resources/resource/resource.component';
import { RecipeComponent } from './components/recipes/recipe/recipe.component';

// SERVICES
import { ResourcesService } from './components/resources/resources.service';

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
  providers: [ResourceComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
