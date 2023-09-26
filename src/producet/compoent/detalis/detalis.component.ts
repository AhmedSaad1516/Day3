import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/producet/services/home.service';

@Component({
  selector: 'app-detalis',
  templateUrl: './detalis.component.html',
  styleUrls: ['./detalis.component.css']
})
export class DetalisComponent {
  id:any
  data:any={}
rate:any={}
  constructor(private route:ActivatedRoute, private serv:HomeService) {
this.id=this.route.snapshot.paramMap.get('id')
  }
  ngOnInit() {
this.get()
  }

get(){
  this.serv.getByIdProduect(this.id).subscribe((data:any)=>{
this.data=data
this.rate=data.rating

  })
}
}
