import { Component } from '@angular/core';
import { EditEvent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public gridData = [
    {
      productId: 5,
      productName: 'Air Force 1',
      unitPrice: 100,
      category: {
        categoryId: 1,
        categoryName: 'Mens / Shoes'
      }
    },
    {
      productId: 2,
      productName: 'Nike Pro',
      unitPrice: 30,
      category: {
        categoryId: 2,
        categoryName: "Women's / Shorts"
      }
    },
    {
      productId: 3,
      productName: 'Nike Pants',
      unitPrice: 50,
      category: {
        categoryId: 3,
        categoryName: "Men's / Shorts"
      }
    },
  ]

  removeRow(dataItem:any): void {
    const rowIndex = this.gridData.indexOf(dataItem);
    if(rowIndex !== -1) {
      this.gridData.splice(rowIndex,1)
    }
  }

}