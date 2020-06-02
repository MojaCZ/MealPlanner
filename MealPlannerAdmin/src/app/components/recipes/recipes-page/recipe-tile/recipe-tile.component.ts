import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-tile',
  templateUrl: './recipe-tile.component.html',
  styleUrls: ['./recipe-tile.component.scss']
})
export class RecipeTileComponent implements OnInit {
  @Input() recipe: any;
  constructor() { }

  ngOnInit(): void {
  }

}
