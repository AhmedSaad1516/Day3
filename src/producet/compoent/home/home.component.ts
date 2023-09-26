import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/producet/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data: any[] = []
  categorie: any = []
  loader:boolean=false
  constructor(private serv: HomeService , private toaster:ToastrService) {
  }
  ngOnInit() {
    this.getAll()
    this.getAllcategorie()
  }
  getAll() {
    this.loader=true
    this.serv.getAllProduect().subscribe((data: any) => {
      for( let i=0 ; i<data.length;i++){
        this.data.push(data[i])

        if(i==8){
          break
        }
        this.loader=false
      }
    }, error =>{
     this.toaster.error(error.message,'error',{
      timeOut:3000,

      closeButton:true,
      progressBar:true
     })
      console.log(error);
    })
  }

  getAllcategorie() {
    this.loader=true
    this.serv.getAllcategories().subscribe((data: any) => {
      this.categorie = data
      this.loader=false
    })
  }
  select(evetn: any) {
    let value = evetn.target.value
   if(value =="all"){
    this.getAll()
   }else{
    this.getAllId(value)
   }
  }  
  getAllId(keyword:any){
    this.loader=true
    this.serv.getByName(keyword).subscribe((data:any)=>{
      this.data = data
      this.loader=false
    })
  }
}
