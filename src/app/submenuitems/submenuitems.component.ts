import { Component, OnInit,ViewChild,Input,Output,EventEmitter } from '@angular/core';
import { MenuItem } from '../app.component';

@Component({
  selector: 'app-submenuitems',
  templateUrl: './submenuitems.component.html',
  styleUrls: ['./submenuitems.component.css']
})
export class SubmenuitemsComponent implements OnInit {
  @Input() SubMenuItems!: Array<MenuItem>;
  @ViewChild('Submenuitem') public Submenuitem: any;
  @Output() SelectedMenu: EventEmitter<MenuItem> = new EventEmitter();

  constructor() { }
  ngOnInit() {

  }

clickeventhandler(menu: any) {
   this.SelectedMenu.emit(menu);
 }


}