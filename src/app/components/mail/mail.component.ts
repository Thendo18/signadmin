import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';


@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {

  loading = false;
  buttionText = "Submit";


  nameFormControl = new FormControl("",[
    Validators.required,
    Validators.minLength(4)
  ]);

  emailFormControl = new FormControl("",[
    Validators.required,
    Validators.email
  ]);

  constructor(public http: HttpService) { }

  ngOnInit(): void 
  {
    console.log(this.http.test);
  }

  sendMail() 
  {
    this.loading = true;
    this.buttionText = "Submiting...";
    let user = 
    {
      name: this.nameFormControl.value,
      email: this.emailFormControl.value
    }
 
    console.log(user);
    
    // this.http.sendEmail("http://localhost:3000/mail", user).subscribe(data => {
    //     let res:any = data; 
    //     console.log(`${user.name} 's request is successfully accepted and mail has been sent and the message id is ${res.messageId}`
    //     );
    //   },
    //   err => {
    //     console.log(err);
    //     this.loading = false;
    //     this.buttionText = "Submit";
    //   },() => {
    //     this.loading = false;
    //     this.buttionText = "Submit";
    //   }
    // );
  }

}
