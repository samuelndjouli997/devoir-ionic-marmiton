import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { AppModule } from "../app.module";

@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.page.html',
  styleUrls: ['./one-product.page.scss'],
})
export class OneProductPage implements OnInit {

  p: any;
  product: any;
  constructor(private http: HttpClient, private route: ActivatedRoute, private am: AppModule) {
    this.p = this.http.get('http://localhost:8888/marmiton_devoir/src/product.php?action=getone&id=' + this.route.snapshot.paramMap.get('id')).toPromise().then((response: any) => { this.product = response });
    this.product = this.am.waitFor(this.p);


  }

  ngOnInit() {

    this.http.get('http://localhost:8888/marmiton_devoir/src/product.php?action=getone&id=' + this.route.snapshot.paramMap.get('id')).toPromise().then((response: any) => { this.product = response });


  }

}
