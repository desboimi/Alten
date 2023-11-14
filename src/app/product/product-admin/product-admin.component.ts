import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { Product } from "../product.model";

@Component({
  selector: "app-product-admin",
  templateUrl: "./product-admin.component.html",
  styleUrls: ["./product-admin.component.scss"],
})
export class ProductAdminComponent implements OnInit {
  productList: Product[];
  selectedProducts: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService
      .getProductList()
      .subscribe(
        (productList) => (this.productList = Object.values(productList))
      );
  }

  openNew(): void {
    console.log("New Product Modal");
  }

  openUpdate(product: Product): void {
    console.log("Update Product Modal : " + product);
  }

  createProduct(value: any): void {
    let body = {
      id: value.id,
      code: value.code,
      name: value.name,
			description: value.description,
			image: value.image,
			price: value.price,
			category: value.category,
			quantity: value.quantity,
			inventoryStatus: value.inventoryStatus,
			rating: value.rating
    };

    this.productService.postProduct(body).subscribe((response) => {
      console.log(response);
    });
  }

  updateProduct(value: any) {
    let body = {
      id: value.id,
      code: value.code,
      name: value.name,
			description: value.description,
			image: value.image,
			price: value.price,
			category: value.category,
			quantity: value.quantity,
			inventoryStatus: value.inventoryStatus,
			rating: value.rating
    };

    this.productService.updateProduct(body, body.id)
      .subscribe(response => {
        console.log(response)
      })
  }

  deleteSelectedProducts(products: Product[]): void {
    products.forEach(product => {
      return this.deleteProduct(product.id);
    });
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id)
      .subscribe(response => {
        console.log(response);
      })
  }
}
