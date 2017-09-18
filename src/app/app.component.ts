import { Component } from '@angular/core';
import { Feature, Category } from '../Models';
import { Proxy, Params_Get_Feature_By_OWNER_ID, Params_Get_Category_By_OWNER_ID } from './Proxy';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  MyTitle: string = 'Who We Are';
  MyFeatures: Feature[] = [];
  MyCategories: Category[] = [];

  constructor(private proxy: Proxy) {
    this.Fill_Features();
    this.Fill_Categories();
  }

  Fill_Categories(){
    // let c = new Category();
    // c.TITLE = "Sweet";    
    // c.DESCRIPTION = "Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, pro an eros perpetua ullamcorper.";
    // this.MyCategories.push(c);

    // c = new Category();
    // c.TITLE = "Kamil";    
    // c.DESCRIPTION = "xxxLorem ipsum dolor sit amet, ad duo fugit aeque fabulas, pro an eros perpetua ullamcorper.";
    // this.MyCategories.push(c);

   const p = new Params_Get_Category_By_OWNER_ID();
   p.OWNER_ID = 1;
    this.proxy.Get_Category_By_OWNER_ID(p).subscribe((data) => {this.MyCategories = data;});
  }

  Fill_Features() {

    let parm = new Params_Get_Feature_By_OWNER_ID();
    parm.OWNER_ID = 1;
    this.proxy.Get_Feature_By_OWNER_ID(parm).subscribe((data) => { this.MyFeatures = data; });


  }
}
