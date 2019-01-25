import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContatoComponentService } from './contato.component.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'contato-component',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  data: Observable<Array<any>>;
  size: Observable<any>;
  page = 1;

  newMessage = { from: 'your nickname', message: 'RESTHeart rocks' };
  constructor(private service: ContatoComponentService) { }

  load() {
    this.size = this.service.size();
    this.data = this.service.get(this.page);
 }

 ngOnInit() {
   this.load();
 }

 postMessage() {
   this.service.post(this.newMessage)
   .subscribe(resp => this.load());
 }

 pageUp() {
   this.page++;
   this.load();
 }

 pageDown() {
   this.page--;
   this.load();
 }
}
