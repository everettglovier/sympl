import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sympl-chat',
  templateUrl: 'sympl-chat.component.html',
  styleUrls: ['sympl-chat.component.scss']
})
export class SymplChatComponent implements OnInit {




  constructor() { }

  ngOnInit() {
  }

  input( $event ) {

  }

  change( $event ) {

  }

  keydown( $event ) {
    const selection = document.getSelection();
    console.log( document.getSelection() );

    switch ( $event.key ) {
      case 'Backspace':
      case 'Del':
      case 'Delete':
        if ( selection.anchorNode.parentElement.nodeName === 'SPAN' ) {
          selection.anchorNode.parentElement.parentElement.removeChild( selection.anchorNode.parentElement  );
        }
        break;
      case '@':
        console.log('@');
        break;
    }

    this.preventSelection( $event );
  }

  keyup( $event ) {
    this.preventSelection( $event );
  }

  /** Prevent a tag from being selected **/
  preventSelection( $event ) {
    console.log('preventing...');
    const selection = document.getSelection();
    if ( selection.anchorNode.parentElement.nodeName === 'SPAN' ) {
      selection.collapse( selection.anchorNode.parentElement, 0 );
      // selection.modify("move", "left", "character");
      $event.preventDefault();
    }
  }
}

export class SymplEditorOptions {
  /** Max height of the editor before overflow */
  maxHeight: boolean | number = false;
  placeholder = 'Enter a message...';

}
