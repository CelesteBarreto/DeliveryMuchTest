import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-generate-list',
  templateUrl: './generate-list.component.html',
  styleUrls: ['./generate-list.component.css']
})
export class GenerateListComponent implements OnInit {

  items = [];

  result : any;
  readonly apiURL: string;
  constructor(private http: HttpClient) {
    this.apiURL = 'https://pokeapi.co/api/v2/'; 

    /* this.http.get(this.apiURL).toPromise().then(response => {
      console.log(response);

      for (let key in response)
                if (response.hashOwnProperty(key))
                this.items.push(response[key]);
    }) */
    
  }

  ngOnInit(): void {
    this.http.get(`${ this.apiURL }pokemon/ditto`)
            .subscribe(resultado => {
              console.log(resultado),
              this.result = resultado;

              
            });


    
  }

}
