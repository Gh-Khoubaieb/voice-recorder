import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UploadRecordService {

  url: any;

  fileObj: any = {
    url: null
  };


  constructor(
      private http: HttpClient,
      // private map: map
  ) {

  }

  setfile(data :any) {
    this.fileObj= localStorage.getItem('fileObj');
    this.fileObj.url = data;
    localStorage.setItem('fileObj', JSON.stringify(this.fileObj));

  }

  getfile() {
   // let fileObj = JSON.parse(localStorage.getItem('fileObj'));
    return null;
  }




  uploadFile(avatar: File){
    const formData = new FormData();
    formData.append('avatar', avatar);
    return this.http.post('http://127.0.0.1:8000/upload.php', formData).pipe(map((ret:any) => {
      return ret;
    }));
  }
}