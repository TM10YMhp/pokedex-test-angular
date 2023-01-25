import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  ProgressBarComponent,
  HouseSvgComponent,
  LoaderSvgComponent,
  ArrowsSvgComponent,
  ArrowLeftComponent
} from '@/app/components';

import {
  BaseInfoComponent,
  BaseStatsComponent,
  FormPokedexComponent,
  PokedexComponent,
  ScreenPokedexComponent,
  ToolsPokedexComponent,
} from './components';

import { PokemonComponent } from './pokemon.component';

import { PokemonRoutingModule } from './pokemon-routing.module';
import {DetailPokedexComponent} from './components/pokedex/detail-pokedex.component';

@NgModule({
  declarations: [
    PokemonComponent,
    ScreenPokedexComponent,
    DetailPokedexComponent,
    BaseInfoComponent,
    BaseStatsComponent,
    PokedexComponent,
    FormPokedexComponent,
    ToolsPokedexComponent,
    ProgressBarComponent,
    ArrowsSvgComponent,
    ArrowLeftComponent,
    HouseSvgComponent,
    LoaderSvgComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PokemonRoutingModule
  ]
})
export class PokemonModule { }
