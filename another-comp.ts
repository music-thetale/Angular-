import {Component, Input} from '@angular/core';

@Component({
selector: 'fb-stars',
template: ˋ <p> another-comp works!</p>ˋ,
styles: []
})
export class StarsComponent{
@Input() value: number;
}
