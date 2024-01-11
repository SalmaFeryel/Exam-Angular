import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  updateForm! : FormGroup
  id! : number
  product!: Product
  constructor(public _service: ProductService, private fb: FormBuilder, private route: ActivatedRoute, private ro: Router){}

  ngOnInit(){
    this.route.params.subscribe(params=> this.id=params['id'])
    this._service.getProductById(this.id).subscribe(res => this.product=res)

    this.updateForm = this.fb.group({
      name: ['', Validators.required],
      brand: ['', [Validators.required]],
      model: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      image: ['', [Validators.required]],
    });
  }

  updateProduct(){
  
    this._service.updateProduct(this.product.id,this.updateForm.value).subscribe(res=> this.ro.navigateByUrl(''))
   
  }
}
