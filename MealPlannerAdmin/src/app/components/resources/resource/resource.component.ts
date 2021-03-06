import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Resource } from '../interfaces';
import { ResourcesService } from '../resources.service';


interface SelectInterface {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss']
})

export class ResourceComponent implements OnInit {
  formGroup: FormGroup;
  resource: Resource;
  id: string;

  allergens: string[] = ['Obiloviny obsahující lepek', 'Korýši', 'Vejce', 'Ryby', 'Podzemnice olejná (arašídy)',
    'Sójové boby (sója)', 'Mléko', 'Skořápkové plody', 'Celer', 'Hořčice', 'Sezamová semena (sezam)',
    'Oxid siřičitý a siřičitany', 'Vlčí bob (Lupina)', 'Měkkýši'
  ];

  category: string[] = [
    'Olivy',
    'Rajčata',
    'Cibule',
    'Ryby',
    'Mořské plody',
    'Maso - Hovězí',
    'Maso - Vepřové',
    'Maso - Drůbež',
    'Maso - Obecně',
    'Houby',
    'Játra',
    'Pohanka',
    'Mléko',
    'Brokolice'
  ];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private resourcesService: ResourcesService,
  ) { }

  ngOnInit() {
    if (this.resourcesService.resources.length <= 0) {
      this.router.navigate(['/']);
    }
    this.route.params.subscribe((params) => {
      this.id = params.id;
      this.resourcesService.getResourceById(params.id).subscribe(data => {
        this.resource = data;
        this.loadParams(this.resource);
      });
    });
  }

  loadParams(resource: Resource) {
    this.formGroup = this.formBuilder.group({
      name: [resource.name],
      prot: [resource.prot],
      carb: [resource.carb],
      fat: [resource.fat],
      fib: [resource.fib],
      energy: [resource.energy],
      unitName: [resource.units[0].name],
      unitGrammage: [resource.units[0].grammage],
      allergens: [resource.allergens],
      category: [resource.category]
    });
  }
}
