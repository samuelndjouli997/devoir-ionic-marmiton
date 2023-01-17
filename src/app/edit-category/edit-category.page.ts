import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.page.html',
  styleUrls: ['./edit-category.page.scss'],
})
export class EditCategoryPage implements OnInit {
  c: any;
  category: any;
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private cm: AppModule) {
    this.c = this.http.post('http://localhost:8888/marmiton_devoir/src/category.php?action=getone', JSON.stringify({ 'id': this.route.snapshot.paramMap.get('id') })).toPromise().then((response: any) => { this.category = response; });
    this.category = this.cm.waitFor(this.c);
  }

  editCategory(f: NgForm) {
    this.http.post('http://localhost:8888/marmiton_devoir/src/category.php?action=edit', JSON.stringify(f.value)).toPromise().then((response: any) => { this.category = response.title; });

    this.router.navigate(['category-list'])
    this.ngOnInit();

  }

  ngOnInit() {
  }

}
