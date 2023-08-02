import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private searchTextSubject = new BehaviorSubject<string>('');

  setSearchText(searchText: string) {
    this.searchTextSubject.next(searchText);
  }

  get searchText$() {
    return this.searchTextSubject.asObservable();
  }
}
