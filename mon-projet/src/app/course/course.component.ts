import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input() contenu! : Course ;  // infos parent -> enfant
  @Output() newNb = new EventEmitter<number>(); // infos enfant -> parent
  // Ici, newNB va etre un event que l'enfant va déclencher et le parent écouter
  lastNb! : number // va servir à calculer le nbre que l'on émet vers le parent
  constructor() { }

  ngOnInit(): void { this.lastNb = this.contenu.nb_etud;
  }
  updateNb() { // appelée quand on change l'input
    let nb = this.contenu.nb_etud - this.lastNb;
    this.lastNb = this.contenu.nb_etud;
    this.newNb.emit(nb); // transmet l'event au parent

  }

}
