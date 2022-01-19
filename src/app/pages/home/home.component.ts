import { Ifilms, NetflixModel } from './models/netflix-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public netflixModel: NetflixModel;
  public dramaFilms: Ifilms;
  public comedyFilms: Ifilms;
  constructor() {
    this.netflixModel = {
      nav: {
        logo: {
          src: "../../../assets/LOGO/2560px-Netflix_2015_logo.svg.png",
          alt: 'Logo de Netflix'
        },
      },
      hero: {
        img: {
          src: '../../../assets/hero-principal.PNG',
          alt: 'Fue la mano de Dios',
        },
        title: 'Los 5 más populares en España hoy',
        imgGallery: [
          {
            src: '../../../assets/Top10/Top-con-num/1.PNG',
            alt: 'La casa de papel'
          },
          {
            src: '../../../assets/Top10/Top-con-num/2.PNG',
            alt: 'La reina del flow'
          },
          {
            src: '../../../assets/Top10/Top-con-num/3.PNG',
            alt: 'Imperdonable'
          },
          {
            src: '../../../assets/Top10/Top-con-num/4.PNG',
            alt: 'Titanes'
          },
          {
            src: '../../../assets/Top10/Top-con-num/5.PNG',
            alt: 'Donde caben dos'
          }
        ]
      },
      films: {
        title: 'Películas',
        imgGallery: [
          {
            src: '../../../assets/Drama/millaverde.webp',
            alt: 'La milla verde'
          },
          {
            src: '../../../assets/Accion/renacido.webp',
            alt: 'El renacido'
          },
          {
            src: '../../../assets/Comedia/regresofuturo.webp',
            alt: 'Regreso al futuro'
          },
          {
            src: '../../../assets/Anime/chihiro.webp',
            alt: 'El viaje de Chihiro'
          },
          {
            src: '../../../assets/Terror/reflejos.webp',
            alt: 'Reflejos'
          }
        ],
      },
      footer:{
        links: [
          "Zona de prensa",
          "Privacidad",
          "Contáctanos",
          "Preferencias de cookies",
          "Términos de uso",
          "Información corporativa"]}

    },
    this.dramaFilms = {
      title: 'Dramas',
        imgGallery: [
          {
            src: '../../../assets/Drama/naufrago.webp',
            alt: 'Náufrago'
          },
          {
            src: '../../../assets/Drama/expiacion.webp',
            alt: 'Expiación'
          },
          {
            src: '../../../assets/Drama/salvaralsoldado.webp',
            alt: 'Salvar al soldado Ryan'
          },
          {
            src: '../../../assets/Drama/schindler.webp',
            alt: 'La lista de Schindler'
          },
          {
            src: '../../../assets/Drama/sombradiablo.webp',
            alt: 'La sombra del diablo'
          }
        ],
    },
    this.comedyFilms = {
      title: 'Comedias',
        imgGallery: [
          {
            src: '../../../assets/Comedia/rickandmorty.webp',
            alt: 'Rick and Morty'
          },
          {
            src: '../../../assets/Comedia/cazafantasmas.webp',
            alt: 'Los cazafantasmas'
          },
          {
            src: '../../../assets/Comedia/casi300.webp',
            alt: 'Casi 300'
          },
          {
            src: '../../../assets//Comedia/family guy.webp',
            alt: 'Padre de familia'
          },
          {
            src: '../../../assets/Comedia/padresella.webp',
            alt: 'Los padres de ella'
          }
        ],
    }
  }

  ngOnInit(): void {
  }

}
