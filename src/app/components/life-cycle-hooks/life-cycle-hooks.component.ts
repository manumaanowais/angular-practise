import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  imports: [],
  templateUrl: './life-cycle-hooks.component.html',
  styleUrl: './life-cycle-hooks.component.less'
})
export class LifeCycleHooksComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  logs: string[]=[];

  constructor() {
    this.logMessage("Constructor - component is being constructed");
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.logMessage("ngOnChanges - input property is changed : " + JSON.stringify(changes));
  }

  ngOnInit(): void {
    this.logMessage("ngOnInit - component initialized");
  }

  ngDoCheck(): void {
    this.logMessage("ngDoCheck - change detection run");
  }

  ngAfterContentInit(): void {
    this.logMessage("ngAfterContentInit - content projected");
  }

  ngAfterContentChecked(): void {
    this.logMessage("ngAfterContentChecked - projected content checked");
  }

  ngAfterViewInit(): void {
    this.logMessage("ngAfterViewInit - view initialized");
  }

  ngAfterViewChecked(): void {
    this.logMessage("ngAfterViewChecked - view checked");
  }

  ngOnDestroy(): void {
    this.logMessage("ngOnDestroy - component is about to be destroyed");
  }

  

  private logMessage(message: string): void {
    console.log(message);
    this.logs.push(message);
  }
}
