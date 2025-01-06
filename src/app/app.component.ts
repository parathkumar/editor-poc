import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { EditorComparisonContainerComponent } from './components/editor-comparison-container/editor-comparison-container.component';
import 'froala-editor/js/third_party/font_awesome.min';
import { QuillModule } from 'ngx-quill';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FroalaEditorModule,
    FroalaViewModule,
    EditorComparisonContainerComponent,
    QuillModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'editor-poc';
}
