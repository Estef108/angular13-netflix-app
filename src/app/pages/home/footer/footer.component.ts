import { Component, Input, OnInit } from '@angular/core';
import { Ifooter } from '../models/netflix-model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() public footer!: Ifooter;
  constructor() { }

  ngOnInit(): void {
  }

}
