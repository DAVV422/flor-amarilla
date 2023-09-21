import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public contador: number = 0;
  title = 'flores_amarillas';
  messages: string[] = ['Hola mi niña bonita', 'Se que no es mucho...', 'pero no dejaría que...',
                        'pase este día...', 'sin darte tus...', 'Florecitas Amarillas', 'Te amo mi Amor ♥'];
  public fin: number = this.messages.length - 1;
  message: string = this.messages[this.contador];
  count(){
    this.contador++;
    if(this.contador== this.fin + 1){
      this.contador = 0;
    }
    this.message = this.messages[this.contador];
  }

}
