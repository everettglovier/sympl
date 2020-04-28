import {ApplicationRef, ComponentFactoryResolver, EmbeddedViewRef, Injectable, Injector} from '@angular/core';
import {SymplContextComponent} from './sympl-context.component';
import {SymplContextInterface} from "./sympl-context.interface";
import {SymplContextListComponent} from "./sympl-context-list.component";
import {SymplTooltipComponent} from "./sympl-tooltip.component";

@Injectable()
export class SymplContextService {
  constructor( private componentFactoryResolver: ComponentFactoryResolver, private appRef: ApplicationRef, private injector: Injector ) {}
  componentRef;
  async create( options: SymplContextInterface ) {
    await setTimeout( () => {
      if ( this.componentRef ) { this.destroy(); }
      this.componentRef = this.componentFactoryResolver.resolveComponentFactory( SymplContextComponent ).create( this.injector );
      for ( const option in options ) {
        this.componentRef.instance[ option ] = options[ option ];
      }
      this.componentRef.instance.destroy.subscribe( () => this.destroy() );
      this.appRef.attachView( this.componentRef.hostView );
      const domElem = ( this.componentRef.hostView as EmbeddedViewRef<any>).rootNodes[ 0 ] as HTMLElement;
      document.body.appendChild(domElem);
      return this.componentRef.instance;
    });
  }
  destroy() {
    this.appRef.detachView(this.componentRef.hostView);
    this.componentRef.destroy();
  }
  isOpen()  {
    return this.componentRef;
  }
  createList( origin, componentOptions, options: SymplContextInterface = { origin }) {
    options.origin = origin;
    options.component = SymplContextListComponent;
    options.componentOptions = componentOptions;
    this.create( options );
  }
  createTooltip( origin, tooltip, options: SymplContextInterface = { origin }) {
    options.origin = origin;
    options.component = SymplTooltipComponent;
    options.overlay = false;
    options.componentOptions = { tooltip };
    this.create( options );
  }
}
