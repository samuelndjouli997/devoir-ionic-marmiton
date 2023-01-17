import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.page.html',
  styleUrls: ['./category-form.page.scss'],
})
export class CategoryFormPage implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  addCategory(form: NgForm) {

    this.http.post('http://localhost:8888/marmiton_devoir/src/category.php?action=add', JSON.stringify(form.value)).toPromise().then((response: any) => { console.log(response) })
    this.ngOnInit(); //  sert à vider le formulaire au click 'enregistrer'
    this.router.navigate(['/'])

  }

  ngOnInit() {
  }

}
