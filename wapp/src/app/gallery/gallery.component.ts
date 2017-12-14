import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {



  constructor() { }

 x=document.getElementsByClassName('a');
 y=document.getElementsByClassName('bo');
 z=document.getElementsByClassName('c');
 w=document.getElementsByClassName('d');


hh(){
 this.x["0"].style.width="40%";
 this.y["0"].style.width="20%";
 this.z["0"].style.width="20%";
 this.w["0"].style.width="20%";
}

hh2(){
  this.x["0"].style.width="25%";
  this.y["0"].style.width="25%";
  this.z["0"].style.width="25%";
  this.w["0"].style.width="25%";
}

hh3(){
  this.x["0"].style.width="20%";
  this.y["0"].style.width="40%";
  this.z["0"].style.width="20%";
  this.w["0"].style.width="20%";
}

hh4(){
  this.x["0"].style.width="20%";
  this.y["0"].style.width="20%";
  this.z["0"].style.width="40%";
  this.w["0"].style.width="20%";
}

hh5(){
  this.x["0"].style.width="20%";
  this.y["0"].style.width="20%";
  this.z["0"].style.width="20%";
  this.w["0"].style.width="40%";
}


  ngOnInit() { console.log(this.x);

  }

}
