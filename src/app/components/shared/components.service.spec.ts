import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentsService } from './components.service';
import { UsersInterface } from '../models/UsersInterface';
import { environment } from 'src/app/enviroments/enviroments';

describe('ComponentsService', () => {
  let service: ComponentsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ComponentsService],
    });
    service = TestBed.inject(ComponentsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should return a list of users', () => {
    const usersData: UsersInterface[] = [
      { id: 1, name: 'John Doe', username: 'johnDoe', email: 'john@example.com', address: { city: 'City 1' }, company: { name: 'Company 1' }, phone: 123456789, website: 'www.example.com' },
      { id: 2, name: 'Jane Smith', username: 'janeSmith', email: 'jane@example.com', address: { city: 'City 2' }, company: { name: 'Company 2' }, phone: 987654321, website: 'www.example.com' },
    ];

    service.list().subscribe((result) => {
      expect(result).toEqual(usersData);
    });

    const req = httpTestingController.expectOne(`${environment.apiUrl}users`);
    expect(req.request.method).toEqual('GET');
    req.flush(usersData);
  });
});
