import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-app');
  
  count = 0;

  handleCount(value:string){
    if(value == 'plus'){
      this.count = this.count + 1;
    }else if(value == 'minus'){
      if(this.count <= 0 ){
        this.count = 0;
      }else{
        this.count = this.count - 1;
      }
    }else{
      this.count = 0;
    }
  }
}
