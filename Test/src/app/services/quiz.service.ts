import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  constructor(private http: HttpClient) {}

  get(url: string) {
    return this.http.get(url);
  }

  getAll() {
    return [
      {
        id: 'data/java.json',
        name: 'Java',
        description:
          "Go through the given Quiz and clear the attempt.The attempt will give you an idea about concepts and skills.",
        
      },
      {
        id: 'data/python.json',
        name: 'Python',
        description:
          "Go through the given Quiz and clear the attempt.The attempt will give you an idea about concepts and skills.",
        
      },
      {
        id: 'data/Asp.Net.json',
        name: 'Asp.Net',
        description:
          "Go through the given Quiz and clear the attempt.The attempt will give you an idea about concepts and skills.",
        
      },
    ];
  }
}