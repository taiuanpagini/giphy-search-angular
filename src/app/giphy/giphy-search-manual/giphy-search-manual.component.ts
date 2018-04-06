///<reference path="../giphy-search.service.ts"/>
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import {GiphySearchService} from '../giphy-search.service';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'giphy-search-manual',
    templateUrl: './giphy-search-manual.component.html',
    styleUrls: ['./giphy-search-manual.component.css']
})
export class GiphySearchManualComponent implements OnInit {

    gifs: any[] = [];
    limit: string;
    term: string;

    constructor(private title: Title, private giphySearchService: GiphySearchService) { }

    ngOnInit() {
      this.title.setTitle('By Taiuan');
    }

    pesquisarGiphy() {
      this.giphySearchService.pesquisarGiphy(this.limit, this.term)
        .subscribe((response: Response) => this.gifs = response.json().data);

      this.title.setTitle('Termo: ' + this.term + ' Limite: ' + this.limit);
    }
}
