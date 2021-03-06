import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-foo',
  template: `
    <h2>FOO Component</h2>
    {{ mobileRes }}
  `
})
export class FooComponent implements OnInit, OnDestroy {
  
  mobileRes = false;
  myArray: string[] = [];
  subscription: Subscription;

  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.generateDummyData();
    this.subscription = this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        this.mobileRes = state.matches;
        if (state.matches) {
          console.log('Matches small viewport or handset in portrait mode');
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  generateDummyData(){
    for (let index = 0; index < 100000; index++) {
      this.myArray.push(`alo ${index}`);
    }
  }
}
