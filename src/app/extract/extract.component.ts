import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.css']
})
export class ExtractComponent implements OnInit {

  context!:any;
  txt!:String;
  load!:boolean;
  res!:boolean;
  TextForm!: FormGroup;
  fileForm:FormGroup;

  constructor(private fb: FormBuilder ,private extractdata:UserService,private router : Router) { 
    let formControls = {
    texte: new FormControl('', [Validators.required,Validators.maxLength(30000),])
  }
  let formControls2 = {
   file: new FormControl('', [
     //Validators.required,
     //Validators.maxLength(15000),
   ])
   }
 
   this.TextForm = fb.group(formControls);
   this.fileForm=fb.group(formControls2);
  }
  get texte() { return this.TextForm.get('texte'); }

ngOnInit(): void {
  this.context= {
  text: '',
  user_id:'',
  contexte:'',
  keyword0:'',
  keyword1:'',
  keyword2:'',
  keyword3:'',
  keyword4:'',
  keyword5:'',
  keyword6:'',
  keyword7:'',
  keyword8:'',
  keyword9:'',
};
this.load=false;
this.res=false;
    
}

  /*ngOnInit(): void {
    this.TextForm = this.fb.group({
      texte: ''
     
    });}*/
    Contextextraction(){
      this.load=true;
      
      this.txt=this.context['text']
      let token = JSON.parse(localStorage.getItem('jwt') || '{}');
      const helper = new JwtHelperService();
  
      // let decodedToken = helper.decodeToken(token);
      this.context['id_user']=1;
      console.log(this.context['id_user'])
      this.extractdata.Contextextraction(this.context).subscribe(
       result => {
        this.load=false;
        this.res=true;
        
         var json = JSON.parse(JSON.stringify(result));//[0]
         //console.log(json['context'][0]['etiquette'])
         //console.log(json['keywords'][0]['mots'])
         this.context = {
          text: this.txt,
          contexte: json['context'],
       
          
         };
        console.log(this.context);
  
         
       },
       error => {
         console.log(error);
  
         this.load=false;
       }
     );
     
    }
  /* public onChange(fileList: FileList): void {
      
      let file= document.getElementById('input').files[0];
      let fileReader: FileReader = new FileReader();
      let self = this;
      fileReader.onloadend = function(x) {
        self.context.text = fileReader.result as string;
      }
      fileReader.readAsText(file);*/

      public onChange(event:any): void {
        
        let file = event.target.files[0];
        console.log(file);
        let fileReader: FileReader = new FileReader();
        let self = this;
        fileReader.onloadend = function(x) {
          self.context.text = fileReader.result as string;
        }
        fileReader.readAsText(file);
       
      }
     /* New(){
 
        this.router.navigate(['contextextraction']); 
      }
*/
}
