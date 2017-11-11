import {Injectable} from '@angular/core';

@Injectable()
export class Memory {

  constructor(
    private index: number,
    public story: string = '',
    public images: string[] = [],
    private hover_state: string = 'inactive') { }

  toggleHoverState() {
    this.hover_state = this.hover_state === 'active' ? 'inactive' : 'active';
  }

  getPX() {
    return String(this.index) + 'px';
  }

  getHoverState() {
    return this.hover_state;
  }
}


