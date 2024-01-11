import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { faTrash,faPen } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  Prod!:any[]
  faTrash=faTrash;
  faPen=faPen;
  constructor(public service:ProductService){}
  ngOnInit(){
 this.service.getProductsList().subscribe(result=>this.Prod=result)
  }
  searchProduct(prod: string){
    this.service.getProductsByName(prod).subscribe(result =>this.Prod=result)
  }
  deleteProduct(Prod: Product){
    this.service.deleteProduct(Prod).subscribe(res => {
      this.Prod=res
      this.ngOnInit()
    })
  }
 

}
