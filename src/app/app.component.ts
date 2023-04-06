
import { Component, Input, ViewChild } from "@angular/core";
import { MatMenu } from "@angular/material/menu";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public myMenuItems: MenuItems = new MenuItems();
  opened=false;
  constructor() {
    console.log(this.myMenuItems);
  }

  selectedmenudetail: any;
  clickeventhandler(menu: any) {
    //  console.log('Menu Click Call' , [menu]);
    this.selectedmenudetail = menu;
  }
}

export class MenuItem {
  Name: string = '';
  Value: string='';
  SubMenuItems: Array<MenuItem> = new Array<MenuItem>();
  matmenuname: string = '';
}

export class MenuItems {
  AllMenus: Array<MenuItem> = new Array<MenuItem>();
  MainMenu1: MenuItem = new MenuItem();
  MainMenu2: MenuItem = new MenuItem();

  CreatethirdOrdermenu(index: number): Array<MenuItem> {
    let SendOrdersubMenu: Array<MenuItem> = new Array<MenuItem>();
    for (let i: number = 1; i <= 3; i++) {
      let Submenu: MenuItem = new MenuItem();
      Submenu.Name = 'third Order Sub Menu Index ' + index + ', on ' + i;
      Submenu.Value =
        'third Order Sub Menu Action Index ' + index + ', on ' + i;
      SendOrdersubMenu.push(Submenu);
    }
    return SendOrdersubMenu;
  }

  CreateSecondOrdermenu(index: number): Array<MenuItem> {
    let SendOrdersubMenu: Array<MenuItem> = new Array<MenuItem>();
    for (let i: number = 1; i <= 3; i++) {
      let Submenu: MenuItem = new MenuItem();
      Submenu.Name = 'Second Order Sub Menu Index ' + index + ', on ' + i;
      Submenu.Value =
        'Second Order Sub Menu Action Index ' + index + ', on ' + i;
      if (index % 2) {
        Submenu.SubMenuItems = this.CreatethirdOrdermenu(i);
      }
      SendOrdersubMenu.push(Submenu);
    }
    return SendOrdersubMenu;
  }

  constructor() {
    this.MainMenu1.Name = 'Dynamic Main Menu 1 ';
    this.MainMenu1.Value = '';
    this.MainMenu1.matmenuname = 'Dynamic1';
    for (let i: number = 1; i <= 10; i++) {
      let Submenu: MenuItem = new MenuItem();
      Submenu.Name = 'Dynamic sub menu On 1 as ' + i;
      Submenu.Value = 'sub menu action ' + i;
      Submenu.SubMenuItems = this.CreateSecondOrdermenu(i);
      this.MainMenu1.SubMenuItems.push(Submenu);
    }
    this.AllMenus.push(this.MainMenu1);
    this.MainMenu2.Name = 'Dynamic Main Menu 2';
    this.MainMenu2.Value = '';
    this.MainMenu2.matmenuname = 'Dynamic2';
    for (let i: number = 1; i <= 10; i++) {
      let Submenu: MenuItem = new MenuItem();
      Submenu.Name = 'Dynamic sub menu on 2  ' + i;
      Submenu.Value = 'sub menu action ' + i;
      this.MainMenu2.SubMenuItems.push(Submenu);
    }
    this.AllMenus.push(this.MainMenu2);
  }
}
