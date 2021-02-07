import { Component, OnInit } from '@angular/core';
import { Course } from '../course/course'

@Component({
  selector: 'app-courses', // balise d'insertion
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  titre = 'Liste des cours';
  UE : Course[] = [{titre: 'c1', nb_etud : 2}, 
                   {titre: 'c2', nb_etud : 5}];

  nb_etuds! : number;

  constructor() { }

  ngOnInit(): void { this.getNbEtuds();
  }

  getTitle(){
    return this.titre;
  }
  getNbEtuds () {
    this.nb_etuds = 0;
    for(let ue of this.UE) { this.nb_etuds += ue.nb_etud; }
  }
  onNewNb(delta :number) { this.nb_etuds += delta;} // callback quand newNb arrive

}
