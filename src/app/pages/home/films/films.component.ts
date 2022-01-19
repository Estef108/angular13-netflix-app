import { Component, Input, OnInit } from '@angular/core';
import { Ifilms } from '../models/netflix-model';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  @Input() public films!: Ifilms;
  constructor() { }

  ngOnInit(): void {
  }

}
