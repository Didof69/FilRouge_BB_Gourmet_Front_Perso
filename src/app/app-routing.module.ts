import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommencerComponent } from './pages/commencer/commencer.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { AlimentComponent } from './pages/aliment/aliment.component';
import { UtilisateurComponent } from './pages/utilisateur/utilisateur.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { ProfilEnfantComponent } from './components/profil-enfant/profil-enfant.component';
import { ProfilUtilisateurComponent } from './components/profil-utilisateur/profil-utilisateur.component';
import { AjoutEnfantComponent } from './components/ajout-enfant/ajout-enfant.component';
import { ModifEnfantComponent } from './components/modif-enfant/modif-enfant.component';
import { ModifAlimentComponent } from './components/modif-aliment/modif-aliment.component';
import { SupprAlimentComponent } from './components/suppr-aliment/suppr-aliment.component';

const routes: Routes = [
  { path: '', component: CommencerComponent },
  { path: 'home', component: AccueilComponent },
  { path: 'aliment', component: AlimentComponent },
  { path: 'aliment/add', component: AjoutEnfantComponent },
  { path: 'aliment/update', component: ModifAlimentComponent },
  { path: 'aliment/delete', component: SupprAlimentComponent },
  { path: 'profil', component: UtilisateurComponent },
  { path: 'profil/signup', component: InscriptionComponent },
  { path: 'profil/login', component: ConnexionComponent },
  { path: 'profil/child', component: ProfilEnfantComponent },
  { path: 'profil/child/add', component: AjoutEnfantComponent },
  { path: 'profil/child/update/:id', component: ModifEnfantComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
