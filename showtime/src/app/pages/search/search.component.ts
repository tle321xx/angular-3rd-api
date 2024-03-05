import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieApiServiceService } from '../../services/movie-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

  constructor(private service: MovieApiServiceService){

  }

  ngOnInit(): void {
      
  }

  searchResult : any;

  searchForm = new FormGroup({
    'movieName': new FormControl(null)
  })

  submitForm(){
    console.log(this.searchForm.value);
    this.service.getSearchMovie(this.searchForm.value).subscribe((res)=>{
      // console.log(res, 'searchMovie');
      this.searchResult = res.results
    })
    
  }

}
