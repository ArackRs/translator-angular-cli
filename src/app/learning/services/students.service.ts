import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base.service';
import { Student } from '../model/student';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StudentsService extends BaseService<Student>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/students';
  }
}
