import { Component, Input } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  Prod!:Product
  id!:number
  constructor(private service: ProductService, private ActRoute: ActivatedRoute){}
  ngOnInit(){
 this.ActRoute.params.subscribe(params=>this.id=params["id"])
 this.service.getProductById(this.id).subscribe(result=>this.Prod=result)
  }
}
