import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validator,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { HelperService } from 'src/app/services/helper.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  loading: boolean;
  success: boolean;
  info: string;

  constructor(private helperService: HelperService) {}

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', Validators.required),
      message: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }

  getValidationMessages(f: AbstractControl, name: string) {
    if (f.errors) {
      for (let errorName in f.errors) {
        switch (errorName) {
          case 'required':
            return `${name} alanı boş bırakılamaz`;
            break;
          case 'email':
            return 'email formatı yanlış';
            break;
          case 'minlength':
            return `${name} alanı en az 5 karakter olmalıdır`;
            break;

          default:
            break;
        }
      }
    }
  }

  get getControls() {
    return this.contactForm.controls;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.loading = true;
      this.helperService.sendContactEmail(this.contactForm.value).subscribe(
        (data) => {
          this.success = true;
          this.loading = false;
          this.contactForm.reset();
          this.info =
            'Mesajınız alınmıştır. En kısa sürede dönüş yapılacaktır.';
        },
        (error) => {
          this.success = false;
          this.loading = false;
          this.info = 'Bir hata oluştu...';
        }
      );
    } else {
      return false;
    }
  }
}
