import {Injectable} from '@angular/core';

@Injectable()
export class Service{

    codetribers=[];
    
    constructor(){

     this.codetribers=[
     {firstname:'Senzi', lastname:'Zwane',pic:'senzi-zwane.jpg',email:' zwane.senzi05@gmail.com'},
     {firstname:'Maria', lastname:'Aphane',pic:'maria-aphane.jpg',email:' aphane.maria@gmail.com'},
     {firstname:'Khensani', lastname:'Mathebula',pic:'khensani-mathebulajpg.jpg',email:' mathebula.khensi@gmail.com'},
     {firstname:'Carol', lastname:'Xaba',pic:'carol-xaba.jpg',email:' xaba.carol@gmail.com'},
     {firstname:'Neo', lastname:'Sehlabane',pic:'neo-sehlabane.jpg',email:' sehlabane.neo@gmail.com'},
     ]


    console.log('Hello ServiceProvider Provider');
    }

   getcodetribers(){
   return this.codetribers
 }

   }
