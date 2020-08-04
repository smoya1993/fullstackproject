import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { post } from 'src/app/models/post';

@Component({
  selector: 'app-reg-post',
  templateUrl: './reg-post.component.html',
  styleUrls: ['./reg-post.component.css']
})
export class RegPostComponent implements OnInit {
  public cats = [];
  public myPost: post = new post();

  constructor(
    private firestoreService: FirestoreService
  ) { }
  ngOnInit() {
    debugger;
    this.firestoreService.getPosts().subscribe((catsSnapshot) => {
      this.cats = [];
      catsSnapshot.forEach((catData: any) => {
        debugger;
        this.cats.push({
          id: catData.payload.doc.id,
          data: catData.payload.doc.data()
        });
      });
      console.log(this.cats[0].data);
      this.myPost = this.cats[0].data;
    });
  }
}
