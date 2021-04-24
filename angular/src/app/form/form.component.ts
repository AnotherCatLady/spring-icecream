import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {MatChipInputEvent} from "@angular/material/chips";
import {IcecreamService} from "../service/icecream.service";
import {Icecream} from "../model/icecream";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  ingredients: string[] = [];
  fruits: string[] = [];
  flavours: string[] = [];
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  icecreamForm = this.fb.group({
    name: [''],
    category: [''],
    calories: [''],
    wholesalePrice: [''],
    retailPrice: [''],
    intolerances: [''],
    fruitContent: ['']
    // creamContent: ['']
  });

  constructor(private fb: FormBuilder, private icecreamService: IcecreamService) {
  }

  get category() {
    return this.icecreamForm.controls['category'].value;
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    let icecream = new Icecream(this.icecreamForm.value);
    if (icecream.category == 'FRUIT') {
      icecream.fruits = this.fruits
    }
    if (icecream.category == 'WATER') {
      icecream.flavours = this.flavours;
    }
    console.log(icecream);
    this.icecreamService.saveIcecream(icecream).subscribe(data => {
      console.log(data);
    });
  }

  /**
   * Removes an item from a lits.
   * @param list list to remove item from.
   * @param value item to remove.
   */
  remove(list: string[], value: string): void {
    const index = list.indexOf(value);
    if (index >= 0) {
      list.splice(index, 1);
    }
  }

  /**
   * Adds new item to list and resets input value of input field.
   * @param list list to add item to.
   * @param event contains item to add.
   */
  add(list: string[], event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      list.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }
}
