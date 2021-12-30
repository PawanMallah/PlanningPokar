import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Entity/User';
import { WebSocketService } from 'src/app/web-socket.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-join-room',
  templateUrl: './join-room.component.html',
  styleUrls: ['./join-room.component.css']
})
export class JoinRoomComponent implements OnInit {

  roomCode:any;
  name : any;
  user:User;
  errorMsg:string;
  constructor(private webSocket:WebSocketService,private router :Router) { }

  ngOnInit(): void {
    localStorage.clear();
  }

  joinRoom()
  {
    this.user = new User();
    this.user.Name=this.name;
    this.user.Message= "";
    this.user.RoomId=this.roomCode;
    this.user.Point= "";
    if(typeof(this.name)=="undefined" || typeof(this.roomCode)=="undefined")
    {
        this.errorMsg="Please Enter Name and RoomId";
    }
      else
      {
          this.roomCode = this.roomCode.trim();
          //this.webSocket.join(this.user);
          localStorage.setItem("RoomCode",this.roomCode);
          localStorage.setItem("ThisUser",this.user.Name);
          this.router.navigate(['PokerPage']);
      }
  }
}
