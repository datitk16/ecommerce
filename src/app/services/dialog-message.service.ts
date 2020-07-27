import { Injectable, Inject, OnDestroy } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class DialogMessageService implements OnDestroy {

  constructor() { }
  ngOnDestroy() { }


  public showErrorMessage(title: string, text: string, footer?: string): void {
    Swal.fire({ icon: 'error', title, text, footer })
  }

  public showInfoMessageErr(title: string, text: string, footer?: string) {
    Swal.fire({
      icon: 'error', title, text, footer, showConfirmButton: false,
      timer: 1500
    })
  }

  public showInfoMessageSuccess(title: string, text: string, footer?: string) {
    Swal.fire({
      icon: 'success', title, text, footer, showConfirmButton: false,
      timer: 1500
    })
  }

  public showConfirmButton(title: string, text: string) {
    return Swal.fire({
      title,
      text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Đồng ý!'
    })
  }

}
