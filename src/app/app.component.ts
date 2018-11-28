import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  	title = 'add-edit-update-delete-In-angular';
  	math:any;
	physics:any;
	chemistry:any;
	tamil:any;
	english:any;
	listSubjectValue = [];
	EditIndex=0;
	EditValue=0;
	btnname = 'Submit';
 	submitValues() {
 		if(this.EditValue == 0) {
 			let obj = {
	 			'math':this.math,
	 			'physics':this.physics,
	 			'chemistry':this.chemistry,
	 			'tamil':this.tamil,
	 			'english':this.english
	 		}
	 		console.log(obj);
	 		this.listSubjectValue.push(obj);
	 		this.EditValue=0;
 		} else {
 			this.listSubjectValue[this.EditIndex].math = this.math;
	  		this.listSubjectValue[this.EditIndex].physics = this.physics;
	  		this.listSubjectValue[this.EditIndex].chemistry = this.chemistry;
	  		this.listSubjectValue[this.EditIndex].tamil = this.tamil;
	  		this.listSubjectValue[this.EditIndex].english = this.english;
 			this.EditValue=0;

 		}
 		
 		this.math='';
		this.physics='';
		this.chemistry='';
		this.tamil='';
		this.english='';
  	}


  	Editing(index) {
  		debugger
  		this.EditIndex=index;
  		this.EditValue=1
  		this.btnname = 'Update';
  		this.math = this.listSubjectValue[index].math,
  		this.physics = this.listSubjectValue[index].physics,
  		this.chemistry = this.listSubjectValue[index].chemistry,
  		this.tamil = this.listSubjectValue[index].tamil,
  		this.english = this.listSubjectValue[index].english
	}

	delete(index){
		debugger;
		this.listSubjectValue.splice(index,1);
	}
}
