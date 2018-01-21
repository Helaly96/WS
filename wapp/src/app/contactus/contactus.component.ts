import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor() { }



  ngOnInit() {
      var h=document.getElementsByClassName("tw")
      console.log(window.getComputedStyle(h[0]).left)
      console.log(window.innerWidth)

  }

  bigimg(x,y) {
     x.style.width = "50%";
    y.style.width = "10%";


  }

 q = window.innerWidth;
  twitter = 0.09 * window.innerWidth;
  facebook = 0.09 * window.innerWidth;
  instagram = 0.09 * window.innerWidth;
  linkedin = 0.06 * window.innerWidth;
  mail = 0.06 * window.innerWidth;
  youtube = 0.09 * window.innerWidth;
  snapchat = 0.06 * window.innerWidth;
  gps = 0.06 * window.innerWidth;


  twitterp = 0.22 * window.innerWidth;
  facebookp = 0.16 * window.innerWidth;
  instagramp = 0.20 * window.innerWidth;
  linkedinp = 0.30 * window.innerWidth;
  mailp = 0.12 * window.innerWidth;
  youtubep = 0.16 * window.innerWidth;
  snapchatp = 0.12 * window.innerWidth;
  gpsp = 0.20 * window.innerWidth;

  face=document.getElementsByClassName('fb')
  ing=document.getElementsByClassName('ig')
  scc=document.getElementsByClassName('sc')
  gp=document.getElementsByClassName('gps')


  tw=document.getElementsByClassName("tw")
  em=document.getElementsByClassName("email")
  lii=document.getElementsByClassName("li")
  ytt=document.getElementsByClassName("yt")



  black = 0.2 * window.innerWidth;


  WidthChange()
  {
    if (window.innerWidth > 960)
     {
       //sizes
       this.twitter = 0.10 * window.innerWidth;
       this.facebook = 0.10 * window.innerWidth;
       this.instagram = 0.10 * window.innerWidth;
       this.linkedin = 0.06 * window.innerWidth;
       this.mail = 0.06 * window.innerWidth;
       this.youtube = 0.10 * window.innerWidth;
       this.snapchat = 0.06 * window.innerWidth;
       this.gps = 0.06 * window.innerWidth;


     }

     if (window.innerWidth < 960 && window.innerWidth  > 760)
      {
        this.twitter = 0.15 * window.innerWidth;
        this.facebook = 0.15 * window.innerWidth;
        this.instagram = 0.15 * window.innerWidth;
        this.linkedin = 0.08 * window.innerWidth;
        this.mail = 0.08 * window.innerWidth;
        this.youtube = 0.15 * window.innerWidth;
        this.snapchat = 0.08 * window.innerWidth;
        this.gps = 0.08 * window.innerWidth;
        this.black = 0.25 * window.innerWidth;

        console.log("Hiiii")

        this.face['0'].style.left =  0.05 * window.innerWidth + "px";
        this.ing['0'].style.left =  0.09 * window.innerWidth + "px";
        this.scc['0'].style.left =  0 * window.innerWidth + "px";
        this.gp['0'].style.left =  0.2 * window.innerWidth + "px";


        this.tw['0'].style.right =  0.15 * window.innerWidth + "px";
        this.em['0'].style.right =  0.05 * window.innerWidth + "px";
        this.ytt['0'].style.right =  0.09 * window.innerWidth + "px";
        this.lii['0'].style.right =  0.23 * window.innerWidth + "px";







      }

      if (window.innerWidth < 760 && window.innerWidth  > 480)
       {
         this.twitter = 0.17 * window.innerWidth;
         this.facebook = 0.17 * window.innerWidth;
         this.instagram = 0.17 * window.innerWidth;
         this.linkedin = 0.12 * window.innerWidth;
         this.mail = 0.12 * window.innerWidth;
         this.youtube = 0.17 * window.innerWidth;
         this.snapchat = 0.12 * window.innerWidth;
         this.gps = 0.12 * window.innerWidth;

         this.black = 0.24 * window.innerWidth;

         this.face['0'].style.left =  0.01 * window.innerWidth + "px";
         this.ing['0'].style.left =  0.1 * window.innerWidth + "px";
         this.scc['0'].style.left =  0 * window.innerWidth + "px";
         this.gp['0'].style.left =  0.18 * window.innerWidth + "px";


         this.tw['0'].style.right =  0.15 * window.innerWidth + "px";
         this.em['0'].style.right =  0.03 * window.innerWidth + "px";
         this.ytt['0'].style.right =  0.04 * window.innerWidth + "px";
         this.lii['0'].style.right =  0.23 * window.innerWidth + "px";

       if (window.innerWidth < 480 )
        {
          this.twitter = 0.09 * window.innerWidth;
          this.facebook = 0.09 * window.innerWidth;
          this.instagram = 0.09 * window.innerWidth;
          this.linkedin = 0.04 * window.innerWidth;
          this.mail = 0.04 * window.innerWidth;
          this.youtube = 0.09 * window.innerWidth;
          this.snapchat = 0.04 * window.innerWidth;
          this.gps = 0.04 * window.innerWidth;

          this.black = 0.17 * window.innerWidth;


          this.face['0'].style.left =  0.05 * window.innerWidth + "px";
          this.ing['0'].style.left =  0.06 * window.innerWidth + "px";
          this.scc['0'].style.left =  0 * window.innerWidth + "px";
          this.gp['0'].style.left =  0.13 * window.innerWidth + "px";


          this.tw['0'].style.right =  0.15 * window.innerWidth + "px";
          this.em['0'].style.right =  0.05 * window.innerWidth + "px";
          this.ytt['0'].style.right =  0.09 * window.innerWidth + "px";
          this.lii['0'].style.right =  0.23 * window.innerWidth + "px";

        }


  }

}

}
