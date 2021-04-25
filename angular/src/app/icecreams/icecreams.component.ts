import {Component, OnInit} from '@angular/core';
import {Icecream} from "../model/icecream";
import {IcecreamService} from "../service/icecream.service";

/**
 * Component for icecreams!
 */
@Component({
  selector: 'app-icecreams',
  templateUrl: './icecreams.component.html',
  styleUrls: ['./icecreams.component.scss']
})
export class IcecreamsComponent implements OnInit {

  icecreams: Icecream[] = [];

  constructor(private icecreamService: IcecreamService) {
  }

  ngOnInit(): void {
    this.icecreamService.getIcecreams().subscribe(data => {
      this.icecreams = data;
    })
  }

  /**
   * Add icecream when event about adding icecream is received.
   * @param $event icecream to add.
   */
  addIcecream($event: Icecream) {
    this.icecreams.push($event);
  }
}
