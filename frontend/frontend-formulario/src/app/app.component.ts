import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  usuario = {
    nombre: '',
    email: ''
  };

  constructor(private http: HttpClient) {}

  enviarFormulario() {
    this.http.post('http://localhost:8080/api/usuarios', this.usuario)
      .subscribe({
        next: (response) => {
          console.log('Respuesta del servidor:', response);
          alert('Formulario enviado con éxito');
        },
        error: (error) => {
          console.error('Error al enviar datos:', error);
          alert('Hubo un error al enviar los datos');
        }
      });
  }
}
