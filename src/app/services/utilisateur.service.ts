import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from '../models/utilisateur';
import { LoginUtilisateur } from '../models/loginUtilisteur';
import { ReponseConnexion } from '../models/reponseConnexion';

@Injectable({
  providedIn: 'root',
})
export class UtilisateurService {
  private baseApiUrl = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) {}

  inscriptionUtilisateur(data: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(`${this.baseApiUrl}/register`, data);
  }

  connexionUtilisateur(data: LoginUtilisateur): Observable<ReponseConnexion> {
    return this.http.post<ReponseConnexion>(`${this.baseApiUrl}/login`, data);
  }
}
