import {Component, OnInit} from '@angular/core';
import {IcecreamService} from "../service/icecream.service";
import {Icecream} from "../model/icecream";

/**
 * Component to display list of all icecreams.
 */
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  icecreams: Icecream[] = [];
  columns: string[] = ['name', 'category'];

  constructor(private icecreamService: IcecreamService) {
  }

  ngOnInit(): void {
    this.icecreamService.getIcecreams().subscribe(data => {
      console.log(data);
      this.icecreams = data;
    })
  }

  /**
   * Display category name as text.
   * @param icecream icecream to display category text of.
   */
  displayCategory(icecream: Icecream) {
    switch (icecream.category) {
      case 'CREAM': {
        return 'Sahne-Eis'
      }
      case 'FRUIT': {
        return 'Frucht-Eis'
      }
      case 'WATER': {
        return 'Wasser-Eis'
      }
      default:
        return ''
    }
  }
}
