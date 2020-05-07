import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

interface SelectInterface {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  configData: any;
  baseFormGroup: FormGroup;
  ingredienceFormGroup: FormGroup;

  selectDietOptions: SelectInterface[];

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.configData = data.config)

    this.baseFormGroup = this.formBuilder.group({
      name: [''],
      difficulty: [''],
      prepT: [''],
      cookT: [''],
      meals: [],
      diet: [''],
      photo: ['']
    })
    this.ingredienceFormGroup = this.formBuilder.group({
      name: [''],
      amount: [0],
      unitName: ['']
    })
    this.selectDietOptions = this.loadDiets(this.configData)
    this.formChanges()
  }

  formChanges(){
    let val = this.baseFormGroup.valueChanges.subscribe(val => {
      console.log(val)
    });
  }

  loadDiets(config: any): SelectInterface[]{
    let dietOptions: SelectInterface[] = []
    let diets = config.diet;
    for(let i:number = 0; i<diets.length; i++) {
      let d: SelectInterface = {
        value: diets[i],
        viewValue: diets[i]
      }
      dietOptions.push(d)
    }
    return dietOptions
  }

}
