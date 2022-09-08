import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  animal: string;
  name: string;
  constructor(private fb:FormBuilder, public dialog: MatDialog,private spinner: NgxSpinnerService) { }
  taskForm!: FormGroup;
  userFile: string;
  imageSrc: string;
  imageSelected: '';
  size: '';
  checkboxdata = [];
  savelocaldata:'';
  values = [];
  
  showafterupload: boolean = false;

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm(){
    this.taskForm = this.fb.group({
      taskname:['',],
      taskdescription:['',],
      attachment: [],
      tasklist1: [],
      tasklist2: [],
      tasklist3: [],
      tasklist4: [],
    })
  }

  submitDetail(): void{
    if (this.taskForm.invalid) {
      this.taskForm.markAllAsTouched();
      return;
    }
    let sendData = this.taskForm.value;
    sendData.labels = this.values;
    sendData.filename = this.userFile;
   localStorage.setItem('key', JSON.stringify(sendData));
   var store = JSON.parse(localStorage.getItem('key'));
   this.savelocaldata = store;
    if(this.taskForm.value.taskname == ''){
      alert('please enter taskname')
    }
    else{
      const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
        width: '500px',
        height: '400px',
        data: {name: this.name, animal: this.animal},
      });
  
      dialogRef.afterClosed().subscribe(result => {
        this.animal = result;
      });
    }
  }


    readURL(event: any): void {
      this.userFile = event.target.files[0].name;
      this.size = event.target.files[0].size;
      if (event.target.files && event.target.files[0]) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.imageSrc = e.target.result;
        };
        reader.readAsDataURL(event.target.files[0]);
      }
      this.showafterupload = true;
    }

    subtaskdata(id): void{
      this.checkboxdata = id;
       if(id.target.checked){
        this.values.push(id.target.value);
       }
    }
    
}



@Component({
  selector: 'dialogs-details',
  templateUrl: 'dialogs-details.html',
})
export class DialogOverviewExampleDialog implements OnInit {
  savedata;
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}
  
  ngOnInit(): void {
    var store = JSON.parse(localStorage.getItem('key'));
     this.savedata = store
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

 


