import {
  ApplicationRef, Component,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  Injectable,
  Injector,
  TemplateRef
} from '@angular/core';
import {SymplModalComponent} from './modal.component';

@Injectable()
export class SymplModalService {
  constructor( private componentFactoryResolver: ComponentFactoryResolver, private appRef: ApplicationRef, private injector: Injector ) {}
  destroy( modal ) {
    this.appRef.detachView( modal.ref.hostView );
    modal.ref.destroy();
  }
  async create( componentOptions?, modalOptions?: ModalOptions ): Promise<Modal> {
    const modal = new Modal();
    console.log(componentOptions);
    modal.ref = this.componentFactoryResolver.resolveComponentFactory(SymplModalComponent).create(this.injector);
    if ( modalOptions ) {
      for (const option in modalOptions) {
        modal.ref.instance[option] = modalOptions[option];
      }
    }
    if ( componentOptions instanceof TemplateRef ) {
      modal.ref.instance.template = componentOptions;
    }
    if ( typeof componentOptions ===  'object' ) {
      modal.component = componentOptions.component;
      modal.ref.instance.component = componentOptions.component;
      modal.ref.instance.options = componentOptions.options;
    }

    modal.ref.instance.destroy.subscribe(() => this.destroy(modal));
    this.appRef.attachView(modal.ref.hostView);
    const domElem = (modal.ref.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
    const ref = await modal.ref.instance.init.toPromise();
    modal.instance = ref.instance;


    return modal;
  }
}

export interface ModalOptions {
  header?: string;
  closeButton?: boolean;
  body?: string;
  padding?: string;
  width?: string;
}

export class Modal {
  component;
  ref;
  instance;
}
