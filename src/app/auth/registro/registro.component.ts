import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formRegistro: FormGroup;

  constructor(
    private _fromBuilder: FormBuilder,
  ) { 
    this.formRegistro = this._fromBuilder.group({
      email:['',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password:['', [Validators.required, Validators.minLength(8)]]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("Registro -> ", this.formRegistro.value);
  }
}
