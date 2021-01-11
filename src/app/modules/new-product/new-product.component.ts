import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';
import { Model } from '../../interfaces/data.model';
import { ModelsService } from '../../services/models.servise';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit, OnDestroy {

  productId: number;
  imgString = '';
  newProduct = {};
  anewProduct: Model = {
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
  uploadedFiles: any[] = [];
  isSubmitted = false;

  subscription: Subscription;
  constructor(
    private fb: FormBuilder, 
    private modelService: ModelsService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.setId();
  }


  addProductForm = this.fb.group({
       price: ['', [Validators.required, Validators.pattern("^\\d+$")]],
       discount: ['', [Validators.required, Validators.pattern("^\\d+$")]],
       main: [false],
       shop: ['', Validators.required ],
       name: ['', Validators.required ],
       description: ['', Validators.required ],
       shipping: ['', Validators.required ],
       discountUntil: ['', Validators.required ],
       isNew: [true],
       colorArray: this.fb.array([this.fb.control('', Validators.required)]),
       sizeArray: this.fb.array([this.fb.control('', Validators.required)]),
    });
  
  setId(): void {   
      const modelsObservable = this.modelService.getAllProducts();
      this.subscription = modelsObservable.subscribe((modelsData: Model[]) => {
        this.productId = modelsData.length + 1;
      });
    }

  fileUploader(event: any): void {
    for(const file of event.files) {
      this.uploadedFiles.push(file);
    }
    const reader = new FileReader();   
    reader.readAsDataURL(this.uploadedFiles[0]); 
      
    reader.onloadend = () => {
      this.imgString = String(reader.result);
    };
  }
  
  fileSelect(event: any): void {
    console.log('SELECT', event);
  }

  get colorArray(): FormArray {
    return this.addProductForm.get('colorArray') as FormArray;
  }

  addColor(): void {
    this.colorArray.push(this.fb.control('', Validators.required));
  }

  getColorValidity(i: any): boolean {
    return (<FormArray>this.addProductForm.get('colorArray')).controls[i].invalid;
  }

  removeColor(index): void {
    this.colorArray.removeAt(index);
  }

  get sizeArray(): FormArray {
    return this.addProductForm.get('sizeArray') as FormArray;
  }

  addSize(): void {
    this.sizeArray.push(this.fb.control('', Validators.required));
  }

  getSizeValidity(i: any): boolean {
    return (<FormArray>this.addProductForm.get('sizeArray')).controls[i].invalid;
  }

  removeSize(index): void {
    this.sizeArray.removeAt(index);
  }


  submitForm(): boolean {
    this.isSubmitted = true;
    if (this.addProductForm.valid && this.imgString.length != 0) {
      this.newProduct['id'] = this.productId;
      this.newProduct['imgUrl'] = this.imgString;
      this.newProduct['price'] = this.addProductForm.get('price').value;
      this.newProduct['discount'] = this.addProductForm.get('discount').value;
      this.newProduct['main'] = this.addProductForm.get('main').value;
      this.newProduct['shop'] = this.addProductForm.get('shop').value;
      this.newProduct['name'] = this.addProductForm.get('name').value;
      this.newProduct['description'] = this.addProductForm.get('description').value;
      this.newProduct['shipping'] = this.addProductForm.get('shipping').value;
      this.newProduct['discountUntil'] = this.addProductForm.get('discountUntil').value.toISOString().substr(0, 19).replace('T', ' ');
      this.newProduct['new'] = this.addProductForm.get('isNew').value;
      this.newProduct['color'] = this.colorArray.value;
      this.newProduct['size'] = this.sizeArray.value;
      this.newProduct['review'] = [];
    } else {
      return false;
    }
      this.modelService.addToData(this.newProduct);
      this.router.navigateByUrl('/newProductSuccess', {  state: this.newProduct });
    
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
 }
}
