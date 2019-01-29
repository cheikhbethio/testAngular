import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('sideBare', [
      state('displayed', style({
        width: '100px'
      })),
      state('hidden', style({
        width: '0px'
      })),
      transition('hidden <=> displayed', animate('500ms ease-in'))
    ]),
    trigger('square', [
      state('normal', style({
        background: 'blue',
        borderRadius: '0px'
      })),
      state('wild', style({
        background: 'red',
        borderRadius: '100%'
      })),
      transition('normal => wild, wild => normal', [
        animate('2s')
      ])
    ])
  ]
})
export class AppComponent {
  title = 'testAngular';
  currentSate = 'wild';
  sideBareState = 'hidden';
  display = false;

  // tslint:disable-next-line:no-shadowed-variable
  setState(state: string): void {
    console.log('​AppComponent -> state', state);
    this.currentSate = state;
  }

  // tslint:disable-next-line:no-shadowed-variable
  setPanelState(state: string): void {
    // console.log('setPanelState -> state', state);
    this.sideBareState = state;
    this.display = this.sideBareState === 'hidden' ? false : true;
    console.log('​AppComponent -> this.display', this.display);
  }
}
