import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UsuarioService } from './usuario.service';
import { Usuario } from '../model/usuario'; // Ajusta si tu modelo está en otra ruta

describe('UsuarioService', () => {
  let service: UsuarioService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsuarioService]
    });

    service = TestBed.inject(UsuarioService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('debería enviar un usuario con POST y recibir la respuesta', () => {
    const mockUsuario: Usuario = { nombre: 'Juan', email: 'juan@mail.com' };

    service.guardarUsuario(mockUsuario).subscribe((response) => {
      expect(response).toEqual(mockUsuario);
    });

    const req = httpMock.expectOne('http://localhost:8080/api/usuarios');
    expect(req.request.method).toBe('POST');
    req.flush(mockUsuario);
  });

  it('debería obtener una lista de usuarios con GET', () => {
    const usuariosMock: Usuario[] = [
      { nombre: 'Juan', email: 'juan@mail.com' },
      { nombre: 'Ana', email: 'ana@mail.com' }
    ];

    service.obtenerUsuarios().subscribe((data: Usuario[]) => {
      expect(data.length).toBe(2);
      expect(data).toEqual(usuariosMock);
    });

    const req = httpMock.expectOne('http://localhost:8080/api/usuarios');
    expect(req.request.method).toBe('GET');
    req.flush(usuariosMock);
  });
});
