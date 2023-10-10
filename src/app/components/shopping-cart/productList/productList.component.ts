import { Component, EventEmitter, Output } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'product-list-app',
  templateUrl: './productList.component.html'
})
export class ProductListComponent implements OnInit {
  title = 'web-app';

  items: any;

  @Output()
  onNewState : EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
    initFlowbite();
  }

  setNewState = (state : number) =>{
    this.onNewState.emit(state)
  }
}