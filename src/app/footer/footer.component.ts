import {AfterContentInit, Component, OnInit, ViewChild} from '@angular/core';
import {Memory} from './timeline/memory.service';
import {TimelineComponent} from './timeline/timeline.component';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  animations: [
    trigger('plusHover', [
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
export class FooterComponent implements OnInit, AfterContentInit {
  @ViewChild(TimelineComponent) try_timeline;
  new_memory = false;
  plusHoverState = 'inactive';
  timeline = null;
  memories = [
    new Memory(30, 'This is just text', null),
    new Memory(80, 'May she rest in peace', ['https://images-production.global.ssl.fastly.net/uploads/photos/file/153441/princess-diana-facts-makeup.jpg?auto=compress&crop=top&fit=clip&h=500&q=55&w=698']),
    new Memory(130, null, ['http://thatgrapejuice.net/wp-content/uploads/2012/03/Michael-Jackson.jpg']),
  ];

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.timeline = this.try_timeline;
  }
  togglePlusHover() {
    if (this.plusHoverState === 'inactive') {
      this.plusHoverState = 'active';
    } else {
      this.plusHoverState = 'inactive';
    }
  }
  setNewMemory() {
    this.new_memory = true;
  }
}
