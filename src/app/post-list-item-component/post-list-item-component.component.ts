import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  //je récupère mon posts
  @Input() article: object; 
  constructor() { }

  ngOnInit() {
  }

  //incrémente de 1 la valeur de loveIts
  LoveIt(){
  	this.article.loveIts++;
  	this.article.created_at = new Date();
  }
  //décrémente de 1 la valeur de loveIts
  DontLoveIt(){
  	this.article.loveIts--;
  	this.article.created_at = new Date();
  }
}
