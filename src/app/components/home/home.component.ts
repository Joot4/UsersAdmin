import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilterService } from '../shared/filter.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  searchForm!: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private filterService: FilterService
  ) {}

  ngOnInit(): void {
    this.buildForm()
    this.searchForm.get('searchText')?.valueChanges.subscribe((searchText: string) => {
      this.filterService.setSearchText(searchText);
    });
  }

  buildForm(){
    this.searchForm = this.formBuilder.group({
      searchText: [''],
    })
  }


}
