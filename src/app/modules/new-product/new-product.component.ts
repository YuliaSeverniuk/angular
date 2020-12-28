import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder,  Validators } from '@angular/forms';
import { Model } from '../../interfaces/data.model';
import { ModelsService } from '../../services/models.servise';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit, OnDestroy {
  products: number;
  imgString;
  newProduct: Model = {
    id: 10,
    imgUrl: null,
    price: 1342,
    discount: 12,
    main: false,
    shop: 'Alibaba',
    name: 'Cube Bike',
    description: ' even though a youngish bike brand founded in 1993, cannot be omitted when talking about the best bike companies. This is a German brand, so Cube bikes are much more popular in Europe, than in the USA. Cube is most famous for producing top-notch mountain bikes, but they put a lot of love and skill into manufacturing trekking, hybrid, and cross bikes, road bikes, as well as triathlon bikes.',
    shipping: 'Free shipping',
    discountUntil: '2021-07-03 10:00:00',
    new: true,
    color: ['Blue', 'Grey', 'Orange'],
    size: ['S', 'L', 'XL'],
    review: [],
  }
  isSubmitted = false;
  subscription: Subscription;
  constructor(private fb: FormBuilder, private modelService: ModelsService) {}

  ngOnInit(): void {
    this.setId();
    console.log(this.products);
    console.log(this.newProduct);
   
  }
  uploadedFiles: any[] = [];

  addProductForm = this.fb.group({
       price: ['', Validators.required ],
       discount: ['', Validators.required ],
    
    });
  
  setId(): void {   
      const modelsObservable = this.modelService.getAllProducts();
      this.subscription = modelsObservable.subscribe((modelsData: Model[]) => {
        this.products = modelsData.length + 1;
      });
    }

  submitForm() {
    this.isSubmitted = true;
    
    if (!this.addProductForm.valid) {
      return false;
    } else {
      console.log(this.addProductForm.value);
 //     Object.assign(this.orderFormData, this.emptyData);
  //    console.log(this.orderFormData);
   //   this.router.navigate(['/orderSuccess']);
    }
  }

  fileUploader(event) {
    for(const file of event.files) {
      this.uploadedFiles.push(file);
    }
    console.log('UPLOAD', event);

    const reader = new FileReader();   
    reader.readAsDataURL(this.uploadedFiles[0]); 
    
    reader.onloadend = (e) => {
      console.log(reader.result);
      this.imgString = reader.result;
   };
  }

  fileSelect(event){
    console.log('SELECT', event);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
 }
}
