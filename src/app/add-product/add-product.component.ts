import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  addForm! : FormGroup
  constructor(public service: ProductService, private fb: FormBuilder){}

  ngOnInit(){
      this.addForm = this.fb.group({
      name: ['', Validators.required],
      brand: ['', [Validators.required]],
      model: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      image: ['', [Validators.required]],
    });
  }


  addProduct(){
    if(!this.addForm.valid)
    alert("all fields are required !")
  else{
    this.service.addProduct(this.addForm.value).subscribe(res => window.location.reload())
  }
  }
}
