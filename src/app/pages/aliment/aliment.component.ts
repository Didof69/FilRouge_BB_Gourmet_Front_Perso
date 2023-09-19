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

  //tableaux de filtres par propriété
  tabCategories: string[] = [];
  tabSaisons: string[] = [];
  tabRestrictions: string[] = [];
  tabAges: number[] = [];
  //initialisation du tableau qui recapitule tous les filtres
  saveFilterTab = {
    categorie: ['a'],
    age: [1],
    restrictions: ['b'],
    saisons: ['c'],
  };

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

      this.tabAges = [
        ...new Set(
          this.alimentsToDisplay.map((aliment) => aliment.age_introduction)
        ),
      ]; //initialise le tableau des ages

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

      this.tabAges.sort((a, b) => {
        return a - b;
      }); //tri par ordre croissant les chiffres
      this.tabCategories.sort();
      this.tabRestrictions.sort();
      this.tabSaisons.sort();
      console.log('catéories :' + this.tabCategories);
      console.log('ages :' + this.tabAges);
      console.log('tableau des saisons' + this.tabSaisons);
      console.log('tableau des restrictions' + this.tabRestrictions);
      this.saveFilterTab = {
        categorie: this.tabCategories,
        age: this.tabAges,
        restrictions: this.tabRestrictions,
        saisons: this.tabSaisons,
      };

      console.log("dans oninit l'objet saveTabFilter est ", this.saveFilterTab);
    });
  }

  onFiltreCategorie(filtreCategorie: string[]) {
    this.saveFilterTab.categorie = [...filtreCategorie];
    this.saveFilter(this.saveFilterTab);
  }

  onFiltreAge(filtreAge: number[]) {
    this.saveFilterTab.age = [...filtreAge];
    this.saveFilter(this.saveFilterTab);
  }

  onFiltreRestrictions(filtreRestriction: string[]) {
    this.saveFilterTab.restrictions = [...filtreRestriction];
    this.saveFilter(this.saveFilterTab);
  }

  onFiltreSaisons(filtreSaison: string[]) {
    this.saveFilterTab.saisons = filtreSaison;
    this.saveFilter(this.saveFilterTab);
  }

  //cette methode permet d'iterer sur un aliment et de renvoyer un boolean nécessaire pour que le .include fasse le taf dans saveFilter()
  filtreRestriction(e: Aliment): boolean {
    // console.log("coucou c'est moi", e);
    for (let i = 0; i < e.restrictions.length; i++) {
      if (this.saveFilterTab.restrictions.includes(e.restrictions[i].libelle)) {
        return true;
      }
      // console.log("libelle", this.saveFilterTab.restrictions.includes(
      //   e.restrictions[i].libelle
      // ));
    }
    return false;
  }

  //cette methode permet d'iterer sur un aliment et de renvoyer un boolean nécessaire pour que le .include fasse le taf dans saveFilter()
  filtreSaison(e: Aliment): boolean {
    for (let i = 0; i < e.saisons.length; i++) {
      if (this.saveFilterTab.saisons.includes(e.saisons[i].libelle)) {
        return true;
      }
    }
    return false;
  }

  //  rechercher le bon typage
  saveFilter(saveFilter: any) {
    console.log("le saveTabFilter à l'entrée de saveFilter()", this.saveFilterTab);
      
    if (
      this.saveFilterTab.categorie.length >= 1 ||
      this.saveFilterTab.age.length >= 1 ||
      this.saveFilterTab.restrictions.length >= 1 ||
      this.saveFilterTab.saisons.length >= 1
    ) {
      this.alimentsToDisplayFilter = this.alimentsToDisplay
        .filter((e) =>
          this.saveFilterTab.categorie.includes(e.category.libelle)
        )
        .filter((e) => this.saveFilterTab.age.includes(e.age_introduction))
        // .filter((e) => this.filtreRestriction(e))
        .filter((e) => this.filtreSaison(e));
    }

    console.log(
      'le saveTabFilter à la sortie de saveFilter()',
      this.saveFilterTab
    );
  }
}
