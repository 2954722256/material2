import {AutofillMonitor} from '@angular/cdk/text-field';
import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';

/** @title Monitoring autofill state with AutofillMonitor */
@Component({
  selector: 'text-field-autofill-monitor-example',
  templateUrl: './text-field-autofill-monitor-example.html',
  styleUrls: ['./text-field-autofill-monitor-example.css'],
})
export class TextFieldAutofillMonitorExample implements OnDestroy, OnInit {
  @ViewChild('first', {read: ElementRef}) firstName: ElementRef;
  @ViewChild('last', {read: ElementRef}) lastName: ElementRef;
  firstNameAutofilled: boolean;
  lastNameAutofilled: boolean;

  constructor(private autofill: AutofillMonitor) {}

  ngOnInit() {
    this.autofill.monitor(this.firstName.nativeElement)
        .subscribe(e => this.firstNameAutofilled = e.isAutofilled);
    this.autofill.monitor(this.lastName.nativeElement)
        .subscribe(e => this.lastNameAutofilled = e.isAutofilled);
  }

  ngOnDestroy() {
    this.autofill.stopMonitoring(this.firstName.nativeElement);
    this.autofill.stopMonitoring(this.lastName.nativeElement);
  }
}
