import { FormControl, FormBuilder } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import {IonicPage, NavController, Content, NavParams} from 'ionic-angular';
import { mockMessage } from "../../mockData/mockMessages";
import { GetMessageService } from '../../providers/getMessageService';
@IonicPage()
@Component({
  selector: 'page-chat-message',
  templateUrl: 'chat-message.html',
  styles: ['./chat-message.scss'],
})
export class ChatMessagePage {

  @ViewChild(Content) content: Content;
  private items:String[];
  public isShowCompletionCandidates : boolean;
  //public isShow : boolean=true;
  public messages = mockMessage;
  public messageForm: any;
  private chatContent: string;
  // public composingChatBox: any;
  public doneLoading : boolean;
  public toUser = {
    id: '534b8e5aaa5e7afc1b23e69b',
    pic: 'assets/img/avatar/ian-avatar.png',
    username: 'Cathy Zhang',
  };
  public user = {
    id: '534b8fb2aa5e7afc1b23e69c',
    pic: 'assets/img/avatar/marty-avatar.png',
    username: 'Me',
  };
  // public composingMessages = [
  //   {
  //     id: '001',
  //     date: '',
  //     userId: this.user.id,
  //     username: this.user.username,
  //     pic: this.user.pic,
  //     text: 'Tomorrow'
  //   }];
  
  constructor(public navParams: NavParams,
              public navCtrl: NavController,
              public formBuilder: FormBuilder,
              public getMessageService: GetMessageService) {
    this.messageForm = formBuilder.group({
      message: new FormControl('')
    });
    this.chatContent = '';
    //this.composingChatBox='';
    this.initializeItems();
    this.isShowCompletionCandidates = false;
    this.doneLoading = false;
  }


  ionViewDidLoad() {
    let modelData: string = '用户名：' + this.navParams.get('chatId');
    console.log(modelData);
    this.getMessageService.getMessage().subscribe(items => {
      console.log("receive the get message");
      console.log(items);
      console.log(items["_body"]);
      console.log(JSON.parse(items._body));
      this.items = JSON.parse(items["_body"]);
    })
    // console.log(this.items);
  }


  private initializeItems() {
 
  }

  public showCompletionCandidates(ev){
    console.log("输入内容发生变化");
    var v=ev.target.value;
    console.log(v);
    if(this.chatContent.charAt(this.chatContent.length-1)!=' '){
      this.isShowCompletionCandidates = false;
      console.log("结尾不是空格");
    }
    if (this.chatContent&&this.chatContent.charAt(this.chatContent.length-1)==' '&&this.chatContent.replace(/\s*/g,"")!=''){    
      this.isShowCompletionCandidates = true;
      console.log("以空格结尾");
    } 
    //this.getItems(ev);
  }

  public copyContentToChatBox(itemContent : string){
    // console.log("you have selected  ------   "  +  itemContent);
    // console.log(itemContent);
    
    this.chatContent = this.chatContent + itemContent; 
    this.isShowCompletionCandidates = false;
    // the content depends on the design --- white space is not not necessary
  }

  // onTap(){
  //   const composingMessageData =
  //       {
  //         toId: this.toUser.id,
  //         id: '006',
  //         date: '',
  //         userId: this.user.id,
  //         username: this.toUser.username,
  //         pic: this.toUser.pic,
  //         text:'helloWorld'
  //       };
  //       this.messages.push(composingMessageData);
  //       this.initializeItems();
  //     }

  // 发送消息
  send(message) {
    if (message && message !== '') {
      // this.messageService.sendMessage(chatId, message);
      // var len=this.items.length;  
      // this.items[len]=this.getMessageService.sendMessage(message);  
      // console.log(this.items[len]);
      const messageData =
        {
          toId: this.toUser.id,
          id: '006',
          date: '',
          userId: this.user.id,
          username: this.toUser.username,
          pic: this.toUser.pic,
          text: message
        };

      this.messages.push(messageData);
      //this.composingMessages.push(composingMessageData);
     // this.messages.push();
      this.scrollToBottom();

      setTimeout(() => {
        const replyData =
          {
            toId: this.toUser.id,
            id: '006',
            date: '',
            userId: this.toUser.id,
            username: this.toUser.username,
            pic: this.toUser.pic,
            text: 'Yes...'
          };
        this.messages.push(replyData);
        this.scrollToBottom();
      }, 1000);
    }
    this.chatContent = '';
    this.isShowCompletionCandidates=false;
   // this.composingChatBox='';
  }

  scrollToBottom() {
    setTimeout(() => {
      this.content.scrollToBottom();
    }, 100);
  }

  viewProfile(message: string){
    console.log(message);
  }

  getItems(ev) {        //筛选
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
        // this.initializeItems=val;
      })
    }
  }

}
