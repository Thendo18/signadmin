import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MustMatch } from "../../_helpers/must-match.validator";
import { UsersService } from "src/app/services/users.service";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UsersService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        username: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(8)]],
        confirmPassword: ["", Validators.required],
      },
      {
        validator: MustMatch("password", "confirmPassword"),
      }
    );
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.userService.add_User(this.registerForm.value).subscribe(
      (res) => {
        this.toastr.success("Succesfully Registered");
      },
      (error) => {
        this.toastr.warning(
          'Incorrect Details *username must be longer than or equal to 4 characters *Password is too short (8 characters min)"'
        );
      }
    );
  }
}
