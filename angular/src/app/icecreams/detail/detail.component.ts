import {Component, OnInit} from '@angular/core';
import {Icecream} from "../../model/icecream";
import {ActivatedRoute, Router} from "@angular/router";
import {IcecreamService} from "../../service/icecream.service";

/**
 * Component for icecream details.
 */
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  icecream: Icecream | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private icecreamService: IcecreamService) {
  }

  ngOnInit(): void {
    const icecreamId = this.route.snapshot.paramMap.get("id");
    if (icecreamId != null) {
      this.icecreamService.getIcecream(icecreamId).subscribe(data => {
          this.icecream = data;
        }
      );
    }
  }

  /**
   * Display category name as text.
   * @param icecream icecream to display category text of.
   */
  displayCategory(icecream: Icecream) {
    return this.icecreamService.getCategoryName(icecream.category);
  }
}
