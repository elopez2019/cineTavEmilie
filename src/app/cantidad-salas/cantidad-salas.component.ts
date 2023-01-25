import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


import { RoomInterface } from '../interfaces/room.interface';
import { IdGeneratorService } from '../id-generator.service';
import { RoomService } from '../room.service';
import { ResponseInterface } from '../interfaces/responseI.interface';


@Component({
  selector: 'app-cantidad-salas',
  templateUrl: './cantidad-salas.component.html',
  styleUrls: ['./cantidad-salas.component.css']
})
export class CantidadSalasComponent {

  
  formGroup: FormGroup;
  private baseUrl = 'http://localhost:3000/rooms';
  rooms: any;
  message: any;

  constructor(private http: HttpClient, private roomService: RoomService, private idGenerator: IdGeneratorService) { 

      this.formGroup = new FormGroup({
        id: new FormControl(this.idGenerator.generateId()),
        name: new FormControl(''),
        capacity: new FormControl(0)
      });

      this.getRooms();
  }

  ngOnInit() {
    this.roomService.getRooms().subscribe(data => {
      //console.log('DataM', data);
    });
  }
  
    onNameChanged(value: any) {
      console.log('F ', value);
    }
  
    onAgeChanged(value: any) {
      console.log(value);
    }
  
    getRooms() {
      this.http.get<ResponseInterface>('http://localhost:3000/rooms').subscribe(data => {
        this.rooms = data;
      });
    }

     
   editRoom(room: RoomInterface) {
    this.http.put('http://localhost:3000/rooms/' + room.id, room).subscribe(res => {
      console.log(res);
    });
    /*this.movieService.updateMovie(movie.id, movie).subscribe(data => {
      console.log(data);

    })*/
  }

  deleteRoom(room: RoomInterface) {
    this.http.delete('http://localhost:3000/rooms/' + room.id).subscribe(res => {
      console.log(res);
      this.message = "Sala eliminada con éxito";
      this.getRooms();
    });
  }

  // send data
  postForm(formGroup: RoomInterface) {
    console.log('form ', formGroup);

    this.roomService.postRoom(formGroup).subscribe(data => {
    this.message = "Sala agregada con éxito";
    this.getRooms();
    });
    
    this.formGroup = new FormGroup({
      id: new FormControl(this.idGenerator.generateId()),
      name: new FormControl(''),
      capacity: new FormControl(0)
    });
  }
}
