import { CommonModule } from '@angular/common';
import { Component, computed, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FroalaEditorModule } from 'angular-froala-wysiwyg';
import { QuillEditorComponent, QuillModule, QuillModules } from 'ngx-quill';
import Table from 'quill/modules/table';


@Component({
  selector: 'app-editor-comparison-container',
  standalone: true,
  imports: [CommonModule, FroalaEditorModule, QuillModule, FormsModule],
  templateUrl: './editor-comparison-container.component.html',
  styleUrl: './editor-comparison-container.component.scss'
})
export class EditorComparisonContainerComponent {
  froalaContent = '';
  quillContent = '';
  quillComponent = viewChild<QuillEditorComponent>('quillComp'); 
  froalaOptions = {
    pluginsEnabled: ['table', 'align', 'link', 'image'],
    toolbarButtons: ['insertTable', 'bold', 'italic', 'underline', 'formatOL', 'formatUL']
  };
  modules: QuillModules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
  
      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction
  
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],
  
      ['clean'],                                         // remove formatting button
  
      ['link'],
      ['table']
    ],
    table: true
  };
  tableModule = computed(() => this.quillComponent()?.quillEditor.getModule('table') as Table);
  protected openDocumentation(url: string) {
    window.open(url, '_blank');
  }
  protected logContent() {
    console.log(this.froalaContent);
    console.log(this.quillContent);
    console.log(this.tableModule().getTable());
  }
}
