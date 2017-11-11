import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Memory } from './memory.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
  animations: [
    trigger('memoryState', [
      state('inactive', style({
        transform: 'scale(1)'
      })),
      state('active',   style({
        transform: 'scale(1.4)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class TimelineComponent implements OnInit {
  @Input() memories: Memory[];
  current_memory = null;
  constructor() { }

  ngOnInit() {
    console.log(this.current_memory);
  }
  setCurrentMemory(memory) {
    this.current_memory = memory;
  }

}
