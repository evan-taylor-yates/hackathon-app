import {Component, Input, OnInit} from '@angular/core';
import {Memory} from '../footer/timeline/memory.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  @Input() current_memory: Memory;
  @Input() new_memory: boolean;

  constructor() {
    console.log(this.current_memory);
  }

  ngOnInit() {
    console.log(this.current_memory);
  }

}
