import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bmi',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './bmi.component.html',
  styleUrl: './bmi.component.css'
})
export class BmiComponent {
  weight:number=0
  height:number=0
  bmi:string=""

  calculateBMI(): void {
    if(this.weight&&this.height){
      let meter = this.height/100;
      let metsq =  meter**2;
      let result = this.weight/metsq
      let resultround = Math.round(result)
      this.bmi = resultround.toString();
      
    }
    else{
      alert("fill the feld")
    }

}
}
