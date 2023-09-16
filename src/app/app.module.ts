import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommencerComponent } from './pages/commencer/commencer.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { AlimentComponent } from './pages/aliment/aliment.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UtilisateurComponent } from './pages/utilisateur/utilisateur.component';
import { AjoutAlimentComponent } from './components/ajout-aliment/ajout-aliment.component';
import { AjoutEnfantComponent } from './components/ajout-enfant/ajout-enfant.component';
import { CardEnfantComponent } from './components/card-enfant/card-enfant.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { ListeAlimentComponent } from './components/liste-aliment/liste-aliment.component';
import { ModifAlimentComponent } from './components/modif-aliment/modif-aliment.component';
import { ModifEnfantComponent } from './components/modif-enfant/modif-enfant.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { ProfilEnfantComponent } from './components/profil-enfant/profil-enfant.component';
import { ProfilUtilisateurComponent } from './components/profil-utilisateur/profil-utilisateur.component';
import { SupprAlimentComponent } from './components/suppr-aliment/suppr-aliment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CommencerComponent,
    FooterComponent,
    AccueilComponent,
    AlimentComponent,
    NotFoundComponent,
    UtilisateurComponent,
    AjoutAlimentComponent,
    AjoutEnfantComponent,
    CardEnfantComponent,
    ConnexionComponent,
    InscriptionComponent,
    ListeAlimentComponent,
    ModifAlimentComponent,
    ModifEnfantComponent,
    PresentationComponent,
    ProfilEnfantComponent,
    ProfilUtilisateurComponent,
    SupprAlimentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
