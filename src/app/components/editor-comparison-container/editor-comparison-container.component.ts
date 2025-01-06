import { Component } from '@angular/core';
import { FroalaEditorModule } from 'angular-froala-wysiwyg';
import { QuillModule, QuillModules } from 'ngx-quill';

@Component({
  selector: 'app-editor-comparison-container',
  standalone: true,
  imports: [FroalaEditorModule, QuillModule],
  templateUrl: './editor-comparison-container.component.html',
  styleUrl: './editor-comparison-container.component.scss'
})
export class EditorComparisonContainerComponent {
  protected openDocumentation(url: string) {
    window.open(url, '_blank');
  }
}
