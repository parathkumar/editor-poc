import { CommonModule } from '@angular/common';
import { Component, computed, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FroalaEditorModule } from 'angular-froala-wysiwyg';
import { QuillEditorComponent, QuillModule, QuillModules } from 'ngx-quill';
import Table from 'quill/modules/table';
import * as sanitize from 'sanitize-html';
import { quillModuleConfig } from './editor-comparison-container.helper';


@Component({
  selector: 'app-editor-comparison-container',
  standalone: true,
  imports: [CommonModule, FroalaEditorModule, QuillModule, FormsModule],
  templateUrl: './editor-comparison-container.component.html',
  styleUrl: './editor-comparison-container.component.scss'
})
export class EditorComparisonContainerComponent {
  //froalaContent = '';
  quillContent = '';
  sanitizedContent = '';
  quillComponent = viewChild<QuillEditorComponent>('quillComp');
  // froalaOptions = {
  //   pluginsEnabled: ['table', 'align', 'link', 'image'],
  //   toolbarButtons: ['insertTable', 'bold', 'italic', 'underline', 'formatOL', 'formatUL']
  // };
  modules = quillModuleConfig;
  tableModule = computed(() => this.quillComponent()?.quillEditor.getModule('table') as Table);
  protected openDocumentation(url: string) {
    window.open(url, '_blank');
  }
  protected logContent() {
    //console.log(this.froalaContent);
    console.log(this.quillContent);
    this.sanitizedContent = sanitize(this.quillContent);
  }
}