import { Component, Input, OnInit } from '@angular/core';

import { movie } from 'src/app/interfaces/cartelera.response';

@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.css']
})
export class PeliculasPosterGridComponent implements OnInit {

  @Input() movies: movie[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.movies);
  }

}
