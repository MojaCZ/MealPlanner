import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: [''],
      prot:[0],
      carb: [0],
      fat: [0],
      fib: [0],
      energy: [0],
      unitName: [''],
      unitGrammage: [0],
      allergens: [''],
      category: ['']
    })
    this.formChanges()
  }

  formChanges() {
    this.formGroup.get("prot").valueChanges.subscribe(val => {this.setEnergy()})
    this.formGroup.get("carb").valueChanges.subscribe(val => {this.setEnergy()})
    this.formGroup.get("fat").valueChanges.subscribe(val => {this.setEnergy()})
    this.formGroup.get("fib").valueChanges.subscribe(val => {this.setEnergy()})
  }

  setEnergy() {
    let prot = this.formGroup.value.prot
    let carb = this.formGroup.value.carb
    let fat = this.formGroup.value.fat
    let fib = this.formGroup.value.fib
    let weight = prot + carb + fat + fib
    console.log(`
      prot ${prot*4.063}
      carb ${carb*4.063}
      fat ${fat*9.08}
      fib ${fib*1.91}
      ener ${prot*4.063 + carb*4.063 + fat*9.08}
      weight ${prot + carb + fat + fib}
      `)
    let energy = (prot*4.060380243 + carb*4.060380243 + fat*9.076144072)/weight*100
    this.formGroup.get("energy").setValue(energy)

  }


}
