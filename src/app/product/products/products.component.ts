import { Component, OnInit } from "@angular/core";
import { Product } from "../product.model";
import { ProductService } from "../product.service";
import { SelectItem } from "primeng/api";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  productList: Product[];
  layout: string = "list";
  sortOptions!: SelectItem[];
  sortOrder!: number;
  sortField!: string;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProductList().subscribe((productList) => {
      this.productList = Object.values(productList);
      console.log(this.productList);
    });

    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
  ];
  }

  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf("!") === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  getSeverity(product: Product) {
    switch (product.inventoryStatus) {
      case "INSTOCK":
        return "success";

      case "LOWSTOCK":
        return "warning";

      case "OUTOFSTOCK":
        return "danger";

      default:
        return null;
    }
  }
}
