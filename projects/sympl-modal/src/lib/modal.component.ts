import {
  Component,
  ComponentFactoryResolver,
  ElementRef,
  EmbeddedViewRef,
  EventEmitter,
  HostBinding, HostListener,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {animate, query, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'lib-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [trigger(
    'fadePopAnimation', [
      transition(':enter', [
        query('.modal-container', [
          style({opacity: 0, transform: 'scale(.8)'}),
          animate('100ms ease', style({ opacity: 1, transform: 'scale(1.1)'})),
          animate('150ms ease-in-out', style({ opacity: 1, transform: 'scale(1)'})),
        ])
      ]),
      transition(':leave', [
        query('.modal-container', [
          style({opacity: 1, transform: 'scale(1)'}),
          animate('100ms ease', style({ opacity: .5, transform: 'scale(1.1)'})),
          animate('100ms ease', style({ opacity: 0, transform: 'scale(.8)'}))
        ]),
        style({opacity: 1}),
        animate('300ms ease', style({ opacity: 0 })),
      ]),
    ]
  )]
})
export class SymplModalComponent implements OnInit {
  @HostBinding('@fadePopAnimation') show = false;
  @Input() options;
  @Input() header: string | boolean = false;
  @Input() closeButton = true;
  @Input() onClose;
  @Input() closeOnBlur = true;
  @Input() body;
  @Input() styles = { width: 'fit-content' };
  @Input() closeButtonStyles = {};
  @Input() classes;
  @Input() component;
  @Input() template: TemplateRef<any>;
  @Input() padding = '0';
  @Output() destroy = new EventEmitter();
  @Output() init = new EventEmitter();
  @ViewChild('modal', {read: ViewContainerRef, static: true}) modal;
  @ViewChild('modal', {read: ElementRef, static: true}) modalElem;
  @Input() componentRef;
  @HostListener('mousedown', ['$event']) click( $event ) {
    if ( $event.target.parentElement.nodeName.toUpperCase() === 'BODY' && this.closeOnBlur ) {
      this.destroy.emit();
    }
  }

  constructor(public componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    if ( this.component ) {
      console.log( this.component );
      const component = this.componentFactoryResolver.resolveComponentFactory(this.component);
      console.log( component );
      this.componentRef = this.modal.createComponent(component);
      if (this.options) {
        for (const key in this.options) {
          this.componentRef.instance[key] = this.options[key];
        }
      }
      if (this.componentRef.instance.destroy) {
        this.componentRef.instance.destroy.subscribe(() => this.close());
      }
      const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
      this.modalElem.nativeElement.appendChild(domElem);
      this.init.emit(this.componentRef);
    }
    this.show = true;
  }

  async close() {
    if (this.onClose) {
      await this.onClose();
    }
    this.destroy.emit(true);
  }
}

