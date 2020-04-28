import {ApplicationRef, ComponentFactoryResolver, EmbeddedViewRef, Injectable, Injector} from '@angular/core';
import {SymplSpinnerComponent} from "./sympl-spinner.component";

@Injectable({
  providedIn: 'root'
})
export class SymplSpinnerService {
  constructor( private componentFactoryResolver: ComponentFactoryResolver, private injector: Injector, private appRef: ApplicationRef ) {}
  percentage;
  ref;
  show( percentage? ) {
    this.ref = this.componentFactoryResolver.resolveComponentFactory(SymplSpinnerComponent).create(this.injector);
    this.ref.instance.percentage = percentage;
    this.appRef.attachView( this.ref.hostView );
    const domElem = (this.ref.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
  }
  hide() {
    this.appRef.detachView( this.ref.hostView );
    this.ref.destroy();
  }
  updatePercentage( percentage ) {
    this.ref.instance.percentage = percentage;
  }
}
