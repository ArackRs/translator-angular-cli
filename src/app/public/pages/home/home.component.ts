import { Component, OnInit } from '@angular/core';
import { FruitEntity } from "../../../fruits/model/fruit.entity";
import { FruitsApiService } from "../../../fruits/services/fruits-api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cocktails: Array<any> = [];

  constructor(private api: FruitsApiService) { }

  ngOnInit() {
    this.api.getCocktails().subscribe((data: any) => {
      this.cocktails = data.drinks;
      console.log(this.cocktails);
    });
  }
}
