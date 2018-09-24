import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class NewCmpService {  
    constructor(private http: HttpClient) {
    }

    getStudents(): Observable<any> {
        return this.http.get('/students');
    }

}