import { Component } from '@angular/core';
import { Aliment } from 'src/app/models/aliment';
import { AlimentService } from 'src/app/services/aliment.service';

@Component({
  selector: 'app-aliment',
  templateUrl: './aliment.component.html',
  styleUrls: ['./aliment.component.css'],
})
export class AlimentComponent {
  alimentsToDisplay: Aliment[] = []; //tableau d'aliments reçu de l'api
  alimentsToDisplayFilter: Aliment[] = []; //tableau que l'on filtre

  //tableaux de filtres
  tabCategories: string[] = [];
  tabSaisons: string[] = [];
  tabRestrictions: string[] = [];
  tabAges: number[] = [];

  constructor(private alimentService: AlimentService) {}

  ngOnInit(): void {
    this.alimentService.getAliments().subscribe((aliments) => {
      this.alimentsToDisplay = aliments;

      this.alimentsToDisplayFilter = [...this.alimentsToDisplay]; //permet d'initialiser le tableau à filtrer
      console.log(this.alimentsToDisplayFilter);

      this.tabCategories = [
        ...new Set(
          this.alimentsToDisplay.map((aliment) => aliment.category.libelle)
        ),
      ]; //initialise le tableau des catégories
      console.log('catéories :' + this.tabCategories);

      this.tabAges = [
        ...new Set(
          this.alimentsToDisplay.map((aliment) => aliment.age_introduction)
        ),
      ]; //initialise le tableau des ages
      console.log('ages :' + this.tabAges);

      // this.tabSaisons = [
      //   ...new Set(
      //     this.alimentsToDisplay.map((tabSaisons)=> tabSaisons.saisons)
      //   ),
      // ]; //initialise le tableau des saisons
      // console.log('saisons :' + this.tabSaisons);
      // this.tabCategories.length

      // console.log('saisons :' + this.tabSaisons);

      this.alimentsToDisplay.forEach((aliment) => {
        aliment.saisons.forEach((saison) => {
          // Vérifiez si la saison n'est pas déjà présente dans tabSaisons
          const saisonExisteDeja = this.tabSaisons.some(
            (s) => s === saison.libelle
          );

          if (!saisonExisteDeja) {
            this.tabSaisons.push(saison.libelle);
          }
        });
      });
      console.log('tableau des saisons'+this.tabSaisons);

      this.alimentsToDisplay.forEach((aliment) => {
        aliment.restrictions.forEach((restriction) => {
          // Vérifiez si la restriction n'est pas déjà présente dans tabRestrictions
          const restrictionExisteDeja = this.tabRestrictions.some(
            (r) => r === restriction.libelle
          );

          if (!restrictionExisteDeja) {
            this.tabRestrictions.push(restriction.libelle);
          }
        });
      });
      console.log('tableau des restrictions'+this.tabRestrictions);
    });
  }
}
