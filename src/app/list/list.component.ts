// The Component decorator from '@angular/core' is used to define an Angular component.
import { Component } from '@angular/core';

// CommonModule from '@angular/common' provides common directives (like *ngIf, *ngFor)
// that can be used in this component's templates.
import { CommonModule } from '@angular/common';

@Component({
  // The 'selector' is the custom HTML tag used to embed this component in templates.
  selector: 'app-list',

  // The 'imports' array specifies other Angular modules or standalone components
  // that this component requires (e.g., CommonModule for *ngIf, *ngFor).
  imports: [CommonModule],

  // 'templateUrl' points to the external HTML file that contains this component's view markup.
  templateUrl: './list.component.html',

  // 'styleUrl' (often 'styleUrls' in Angular) refers to the external CSS file
  // that defines the styles for this component.
  styleUrl: './list.component.css'
})
export class ListComponent {
  // This array contains the names of several Presidents of Ireland as simple strings.
  presidents: string[] = ["Higgins", "McAleese", "Robinson",
    "Hillery", "O Dalaigh"];

  // This array holds objects with 'name' and 'term' properties
  // to detail each president along with their term in office.
  mypresidents: any[] = [
    {name: "Higgins", term:"2011-"},
    {name: "McAleese", term:"1997-2011"},
    {name: "Robinson", term:"1990-1997"},
    {name: "Hillery", term:"1976-1990"},
    {name: "O Dalaigh", term:"1974-1976"}
  ];
}

