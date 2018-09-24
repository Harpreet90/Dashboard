import { Component, OnInit } from '@angular/core';
import { NewCmpService } from './new-cmp.services';
import { single, multi } from './data';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css'],
  providers: [NewCmpService]
})
export class NewCmpComponent implements OnInit {
  students:any = [];

  single: any[];
  multi: any[];

  view: any[] = [700, 400];
  
  // options
  showLegend = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';


  // line, area
  autoScale = true;

  constructor(private newCmpService: NewCmpService) {
    Object.assign(this, {single, multi})   
   }


  ngOnInit() {
    this.newCmpService.getStudents().subscribe(res => {
      this.students = res;
    });
  }

  onSelect(event) {
    console.log(event);
  }
  

}
