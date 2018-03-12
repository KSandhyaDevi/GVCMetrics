import { Component, OnInit, HostBinding, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, ViewEncapsulation } from '@angular/router';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from '@angular/forms';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {
  gvcMetricsMenuOptions: FormGroup;
  dataRefreshOptions: any[];
  menuOptionsList: any[];
  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.dataRefreshOptions = [{ name: '5min', key: 5 }, { name: '15min', key: 15 }, { name: '30min', key: 30 }, { name: '1Hr', key: 1 }];
    this.menuOptionsList = [{ name: 'Title', key: '0', checked:false },
    { name: 'GGR', key: '1', checked:true },
    { name: 'GGR Margin', key: '2', checked:true },
    { name: 'NGR', key: '3', checked:true },
    { name: 'NB Cost', key: '4', checked:true },
    { name: 'NB & Lty Cost ', key: '5', checked:true },
    { name: 'NB & Lty Rate', key: '6', checked:true },
    { name: 'Other Revenue', key: '7', checked:true },
    { name: 'Deposit AMt', key: '8', checked:true },
    ]
    this.gvcMetricsMenuOptions =  this.fb.group({
      dataRefreshInterwell: '5',
      dataRefresh: true,
      menuOptionsListFromArray: this.fb.array([])
    });

    for(var i=0;i<this.menuOptionsList.length;i++){
      this.menuOptionsListFromArray.push(this.fb.group(this.menuOptionsList[i]));;
    }
  }

  get menuOptionsListFromArray(): FormArray {
    return this.gvcMetricsMenuOptions.get('menuOptionsListFromArray') as FormArray;
  };

  getMenuOptList(){
    return this
  }
  onRefreshEnable() {
    if (this.gvcMetricsMenuOptions.controls['dataRefresh'].value) {
      console.log(1);
        //this.gvcMetricsMenuOptions.controls['dataRefreshInterwell'];
    } else {
        //this.gvcMetricsMenuOptions.controls['dataRefreshInterwell'].disabled = false;
    }
}
  ngOnInit() {
  }
  goToLoginPage(){
    this.router.navigate(["/login"]).then(() =>
            this.router.navigate([".", { outlets: { outlet: null } }]));
  }
}
