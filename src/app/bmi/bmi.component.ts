import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bmi',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {
  weight: number = 0;
  height: number = 0;
  bmi: number | null = null;
  category: string = '';

  calculateBMI(): void {
    if (this.weight && this.height) {
      const meter = this.height / 100;
      const bmiValue = this.weight / (meter * meter);
      this.bmi = parseFloat(bmiValue.toFixed(2));

      if (this.bmi < 18.5) {
        this.category = 'Underweight';
      } else if (this.bmi >= 18.5 && this.bmi < 24.9) {
        this.category = 'Normal weight';
      } else if (this.bmi >= 25 && this.bmi < 29.9) {
        this.category = 'Overweight';
      } else {
        this.category = 'Obesity';
      }
    } else {
      alert('Please fill in both fields.');
    }
  }
}