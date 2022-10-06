import {Component, ElementRef, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faCoffee, faFile, faHome, faPen, faUser } from '@fortawesome/free-solid-svg-icons';
import { PopupComponent } from './popup/popup.component';
import {DomSanitizer} from "@angular/platform-browser";
import {interval, Subscription, timer} from "rxjs";
import { UploadRecordService } from './upload-record.service';
import * as RecordRTC from 'recordrtc';

class ImageSnippet {
  constructor(public src: string, public file: File) { }
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  faCoffee = faCoffee;
  pen=faPen;
  user=faUser;
  pages=faFile;
  home=faHome
  audioTemp: any;
  prefAudioArray: any;

  // Lets initiate Record OBJ
  record:any;
  // Will use this flag for detect recording
  recording = false;
  // Url of Blob
  url: any;
  private error:any;
  sub!: Subscription ;
  countDown: any;
  count!: number;
  audioSet: any;
  file:any;
  fileurl: any;
  selectedFiless!: ImageSnippet;
  file_path: any;
  urls: any;

  constructor(public dialog: MatDialog, private ref: ElementRef,     private UploadRecordService: UploadRecordService,
              private domSanitizer: DomSanitizer) {
    this.audioSet = []

}

  openDialog(): void {
    const dialogRef = this.dialog.open(PopupComponent,  {
      width: '78vw', 
      height:'75.6vh', 
      maxWidth: '100vw', 
      maxHeight: '100vh', 
   
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
    });
  }


  ngOnInit() {
  }
  sanitize(url: string) {
    return this.domSanitizer.bypassSecurityTrustUrl(url);
  }
  // start recording
  initiateRecording() {
    this.recording = true;

    const mediaConstraints = {
      video: false,
      audio: true
    };
    navigator.mediaDevices
        .getUserMedia(mediaConstraints)
        .then(this.successCallback.bind(this), this.errorCallback.bind(this));

    this.count = 10;
    this.countDown = timer(0, 1000)
        .subscribe(x => {
          this.count = this.count - 1;
        });

    this.sub = interval(500)
        .subscribe(x => {
          if (this.count === 0) {
            this.countDown.unsubscribe();
            console.log("this.countDown", this.countDown);
            this.stopRecording();
          }
        });
    return;
  }
  // will be called automatically
  successCallback(stream:any) {
    const options = {
      mimeType: 'audio/wav',
      numberOfAudioChannels: 1
    };
    // Start Actuall Recording
    const StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
    this.record = new StereoAudioRecorder(stream, options);
    this.record.record();

  }

  // Stop recording.
  stopRecording() {
    this.countDown.unsubscribe();
    this.recording = false;
    this.record.stop(this.processRecording.bind(this));
    this.sanitize(this.record)
  }
  /**
   * processRecording Do what ever you want with blob
   * @param  {any} blob Blog
   */

  processRecording(blob:any) {
    this.url = URL.createObjectURL(blob);
    var file = new File([blob], ('.mp3'), {
      type: 'audio/mp3'
    });
    this.upload(file);
    console.log("file", file);
    return;
  }
  // process error
  errorCallback(error:any) {
    this.error = 'Can not play audio in your browser';
  }
  // reload function
  reload() {
    location.reload();
  }


  setAudioTemp(value:any) {
    this.UploadRecordService.setfile(value);
  }

  upload(files: any) {
    const readers = new FileReader();
    readers.addEventListener('load', (event: any) => {
      this.selectedFiless = new ImageSnippet(event.target.result, files);
      this.UploadRecordService.uploadFile(this.selectedFiless.file).subscribe(
          (res: any) => {
            this.file_path = res.data;
            console.log("filepath", this.file_path);
          },
          (err) => {
            // console.log("error:", err["error"]['err']['data']);
            // this.error(err["error"]['err']['data']);
          })
    });
    readers.readAsDataURL(files);
    readers.onload = (event: any) => {
      this.urls = event.target.result;
    }
  }

  rerecord() {
    this.record.start()
  }
}
