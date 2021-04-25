import {Component, OnInit} from '@angular/core';
import {Icecream} from "./model/icecream";
import {IcecreamService} from "./service/icecream.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'icecream-app';
  icecreams: Icecream[] = [];

  constructor(private icecreamService: IcecreamService) {
  }

  ngOnInit(): void {
    this.icecreamService.getIcecreams().subscribe(data => {
      this.icecreams = data;
    })
  }

  addIcecream($event: Icecream) {
    this.icecreams.push($event);
  }
}
