import {Component, Input} from '@angular/core';

@Component({
selector: 'fb-stars',
template: ˋ <div>
  <i class="fa fa-star"></i>
  {{value}}
           </div>ˋ,
styles: []
})
export class StarsComponent{
@Input() value: number;
}
