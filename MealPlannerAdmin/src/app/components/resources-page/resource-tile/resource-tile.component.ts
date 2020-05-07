import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resource-tile',
  templateUrl: './resource-tile.component.html',
  styleUrls: ['./resource-tile.component.scss']
})
export class ResourceTileComponent implements OnInit {
  @Input() resource: any;
  constructor() { }

  ngOnInit(): void {
  }

}
