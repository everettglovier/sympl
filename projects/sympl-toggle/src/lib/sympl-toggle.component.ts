import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'sympl-toggle',
  template: `
      <label class="switch">
          <input type="checkbox" [(ngModel)]="ngModel">
          <span class="slider round"></span>
      </label>
  `,
  styleUrls: ['sympl-toggle.component.scss']
})
export class SymplToggleComponent implements OnInit {
  @Input() ngModel;
  @Output() ngModelChange;
  constructor() { }
  ngOnInit() {}
}
