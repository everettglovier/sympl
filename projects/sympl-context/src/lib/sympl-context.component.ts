import {
  Component, ComponentFactoryResolver, ElementRef, EmbeddedViewRef, EventEmitter, HostListener, Input, OnInit, Output,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {fadePopInAnimation} from './sympl-context.animations';
@Component({
  selector: 'sympl-context',
  templateUrl: './sympl-context.component.html',
  styleUrls: ['./sympl-context.component.scss'],
  animations: [fadePopInAnimation]
})
export class SymplContextComponent implements OnInit {
  style: any = {};
  caretStyle: any = {};
  containerStyle: any = {};
  caretClass = 'top';
  componentRef;
  componentElement;
  srcElement;
  // The dropdown
  @ViewChild('dropdown', {static: false}) dropdown;
  // The component
  @ViewChild('component', {static: true, read: ViewContainerRef}) set content(content: ElementRef) { this.componentElement = content; }
  // Sends destroy to service
  @Output() destroy = new EventEmitter();
  // Sends events to service
  @Output() events = new EventEmitter();
  @Output() componentInstance() { return this.componentRef.instance; }
  // Element or Location
  @Input() origin;
  // The Component
  @Input() component;
  @Input() componentOptions = {};
  // Additional styling
  @Input() classes = '';
  // Show a caret
  @Input() caret = true;
  // Align Dropdown to origin
  @Input() align = 'center';
  // Dropdown width
  @Input() width;
  // Padding from window edge
  @Input() padding = 10;
  // Margin from origin
  @Input() margin = 5;
  // The max height
  @Input() maxHeight;
  // Set an overlay behind dropbox
  @Input() overlay = true;
  // Close callback
  @Input() onClose() {}
  // Close the dropdown
  @Input() close() {
    if ( this.onClose ) {
      console.log('CLosing');
      this.onClose();
    }
    this.destroy.emit( true );
  }
  @HostListener('document:keydown', ['$event']) keypress( $event ) {
    if ( $event.key === 'Escape' ) {
      this.close();
    }
  }
  constructor( public componentFactoryResolver: ComponentFactoryResolver ) {}
  async ngOnInit() {
    /* Generate a component */
    if ( this.component ) {
      const component = this.componentFactoryResolver.resolveComponentFactory(this.component);
      this.componentRef = this.componentElement.createComponent(component);
      for (const key in this.componentOptions ) {
        this.componentRef.instance[key] = this.componentOptions[key];
      }
      if (this.componentRef.instance.destroy) {
        this.componentRef.instance.destroy.subscribe(() => this.close());
      }
      const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
      this.componentElement.element.nativeElement.appendChild( domElem );
    }
    await setTimeout( () => true );
    this.style = this.updateStyle();
  }

  resetStyle() {
    delete this.style.height;
  }

  getDims() {
    let dims: any = {};
    if ( !this.origin ) {
      throw new Error('Could not determine a location for the dropdown. Please specify an origin.');
    }
    if ( this.origin instanceof MouseEvent ) {
      console.log('Mouse event detected');
      this.origin = this.origin.target;
     /* dims = this.origin.srcElement.getBoundingClientRect();
      this.srcElement = this.origin.srcElement;*/
    }

    if ( this.origin instanceof Element ) {
      this.srcElement = this.origin;
      dims = this.origin.getBoundingClientRect();
    } else if ( this.origin.length > 2 ) {
      dims.left = this.origin[0];
      dims.top = this.origin[1];
      dims.height = this.origin[2] || 0;
      dims.width = this.origin[3] || 0;
    }
    return dims;
  }

  updateStyle() {
    this.caretStyle = {};
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    /** The final style that will be set **/
    const style: any = { visibility: 'visible' };

    /** The required fields for placement of the dropdown **/
    const dropdownWidth = this.dropdown.nativeElement.offsetWidth;
    let dropdownHeight = this.dropdown.nativeElement.offsetHeight;

    /** If the caret is visible, account for its height **/
    const caretHeight = this.caret ? 10 : 0;
    const caretWidth = this.caret ? 28 : 0;

    /** Set the max height **/
    dropdownHeight = this.maxHeight && dropdownHeight > this.maxHeight ? this.maxHeight : dropdownHeight;

    /** Dimensions of the source element **/
    const dims = this.getDims();

    /** If the source element is past the vertical center **/
    if ( dims.top + dims.height > screenHeight / 2 ) {
      style.bottom = screenHeight - dims.top + this.margin + caretHeight;
      this.caretClass = 'bottom';
      this.classes += ' bottom';
      style['max-height'] = screenHeight - style.bottom - this.padding;
    } else {
      style.top = dims.top + dims.height + caretHeight + this.margin;
      style['max-height'] = screenHeight - style.top - this.padding;
      this.caretClass = 'top';
      this.classes += ' top';
    }

    console.log( dims );

    /** If the source element is offscreen vertically **/
    let left;

    /** Set x coorindate based on alignment **/
    if ( this.align === 'left' ) {
      left = dims.left - 10;
    } else if ( this.align === 'right' ) {
      left = dims.left - dropdownWidth + 10 + dims.width;
    } else if ( this.align === 'center' ) {
      left = dims.left + (dims.width - dropdownWidth) / 2;
    }

    /** If left is offscreen **/
    if ( left + dropdownWidth + this.padding > screenWidth ) {
      style.left = left - ( left + dropdownWidth + this.padding - screenWidth );
    } else {
      style.left = left;
    }

    if ( style.left < this.padding ) {
      style.left = this.padding;
    }

    /** Get the offset between the dropdown and the native element **/
    const originOffset = dims.left - style.left;

    if ( this.align === 'left' ) {
      this.caretStyle.left = 10;
    } else if ( this.align === 'right' ) {
      this.caretStyle.right = caretWidth / 2;
    } else if ( this.align === 'center' ) {
      this.caretStyle.left = (dims.width) / 2 + originOffset - caretWidth / 2;
    }

    if ( style['max-height'] > this.maxHeight ) {
      style['max-height'] = this.maxHeight;
    }

    this.containerStyle['max-height'] = style['max-height'] + 'px';

    console.log( style );

    /** Add px to values for css **/
    const pixels = [ 'top', 'bottom', 'left', 'right', 'width', 'height', 'max-height' ];
    for ( const pixel of pixels ) {
      if ( style[ pixel ] ) {
        style[ pixel ] = style[ pixel ] + 'px';
      }
    }
    for ( const pixel of pixels ) {
      if ( this.caretStyle[ pixel ] ) {
        this.caretStyle[ pixel ] = this.caretStyle[ pixel ] + 'px';
      }
    }
    console.log( style );
    return style;
  }

  @HostListener('document:click', ['$event'])
  documentClick( event ) {
    if ( this.srcElement === event.target ) {
    } else {
      this.close();
    }
  }
}
