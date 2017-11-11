import {Component, ViewChild} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {FooterComponent} from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('sidebarState', [
      state('inactive', style({
        transform: 'translateX(-250px)'
      })),
      state('active',   style({
        transform: 'translateX(250px)'
      })),
      transition('inactive => active', animate('250ms ease-in')),
      transition('active => inactive', animate('350ms ease-in'))
    ]),
    trigger('sidebarButtonState', [
      state('toOpen', style({
        transform: 'translateY(0px)',
        backgroundColor: '#4d4d4d'
      })),
      state('toClose',   style({
        transform: 'translateY(-300px) translateX(210px)',
        backgroundColor: '#f2f2f2'
      })),
      transition('toOpen => toClose', animate('250ms ease-in')),
      transition('toClose => toOpen', animate('250ms ease-in'))
    ])
  ]
})
export class AppComponent {
  sidebar = 'inactive';
  sidebarButton = 'toOpen';
  arrow_icon = '../assets/right-arrow.png';

  @ViewChild(FooterComponent) footer;

  changeSidebarState() {
    if (this.sidebar === 'inactive') {
      this.sidebar = 'active';
      this.sidebarButton = 'toClose';
    } else {
      this.sidebar = 'inactive';
      this.sidebarButton = 'toOpen';
    }
    this.toggleArrow();
  }

  getSidebarState() {
    return this.sidebar;
  }

  getSidebarButtonState() {
    return this.sidebarButton;
  }

  toggleArrow() {
    if (this.arrow_icon === '../assets/right-arrow.png') {
      this.arrow_icon = '../assets/left-arrow.png';
    } else {
      this.arrow_icon = '../assets/right-arrow.png';
    }
  }
}
