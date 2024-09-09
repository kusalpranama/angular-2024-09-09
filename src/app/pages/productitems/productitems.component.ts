import { NgIf } from '@angular/common';
import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-productitems',
  standalone: true,
  imports: [],
  templateUrl: './productitems.component.html',
  styleUrl: './productitems.component.css'
})
export class ProductitemsComponent {

  @Input()
  public productInfo:any;
}
