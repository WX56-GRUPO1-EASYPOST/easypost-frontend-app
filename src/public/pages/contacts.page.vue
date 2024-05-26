<script>
import ContactsListApiService from "../services/contactsListApi.service.js";
import Contact from "../components/contact.component.vue";
import ChatMessage from "../components/chat-message.component.vue";
import AuthService from "../services/authService.js";
import {ContactEntity} from "../model/contact.entity.js";
import {MessageEntity} from "../model/message.entity.js";

export default {
  name: 'contacts',
  components: {ChatMessage, Contact},
  data() {

    return {
      message: '',
      chatIsOpen:false,
      currentContact: null,
      messagesList: [],
      contactsList: [],
      contactsListService: new ContactsListApiService()
    }
  },
  mounted() {
    let user = JSON.parse(localStorage.getItem("user"))
    let id = user.id
    this.getData(id)
  },
  methods: {
    async getData(id) {
      let response1 = await this.contactsListService.getContactsListIdByUserId(id);
      let contactsListId = response1.data.contactsListId;

      let response2 = await this.contactsListService.getContactsList(contactsListId);
      let list = response2.data.contacts;

      list.forEach(item => {
        AuthService.getUserById(item)
            .then(response => {
              let user = response.data
              this.contactsList.push(new ContactEntity(user.id, user.name, "image"))
            })
      })

    },
    sendMessage() {
      if(this.message===""){
        return
      }
      let user = JSON.parse(localStorage.getItem("user"))
      let id = parseInt(user.id)

      //calcular el id apropiado para el mensaje
      let length=0
      this.contactsListService.getAllMessages()
          .then(res=>{
            length=res.data.length
            return length
          })
          .then(size=>{
            this.messagesList.push(new MessageEntity(size+1, this.message,id))
            /*let data=new MessageEntity(size+1,this.message,id)
            this.contactsListService.postMessage(data)
                .then(res=>{
                  //this.contactsListService.postMessageInChat(data,id,parseInt(this.currentContact.id))
                  let allChats=[]
                  let role=user.role
                  this.contactsListService.getAllMessages()
                      .then(response=>{
                        allChats=response.data;
                        let chat = {}
                        if (role === 'empresa') {
                          chat = allChats.find(item => item.enterpriseId === id && item.clientId === parseInt(this.currentContact.id))
                        } else if (role === 'cliente') {
                          chat = allChats.find(item => item.clientId === parseInt(this.currentContact.id) && item.enterpriseId === id)
                        }
                        console.log("Chat id: ",chat.id)
                        console.log("Ingresando id de mensaje: ",data.id," en messages list")
                        console.log("Lista de mensajes entre usuario ",id," y usuario ",parseInt(this.currentContact.id))
                        console.log(chat.messagesList)
                        //this.contactsListService.postMessageInChat(data,id,parseInt(this.currentContact.id),chat)
                      })
                })*/
            this.message = ""
          })
    },
    openChat(params) {
      let contact=params.param1
      if(this.chatIsOpen===true && contact!==this.currentContact){
        this.chatIsOpen=params.param2
      }else if(this.chatIsOpen===true && contact===this.currentContact){
        return
      }else{
        this.chatIsOpen=params.param2
      }
      this.messagesList=[]
      //id del contacto que has elegido
      let currentContactId = parseInt(contact.id)
      this.currentContact = contact

      let user = JSON.parse(localStorage.getItem("user"))
      let id = parseInt(user.id)
      let role = user.role

      this.getChats(id, currentContactId, role)
    },
    async getChats(currentUserId, currentContactId, role) {
      let response1 = await this.contactsListService.getAllChats()
      let allChats = response1.data

      let chat = {}
      if (role === 'empresa') {
        chat = allChats.find(item => item.enterpriseId === currentUserId && item.clientId === currentContactId)
      } else if (role === 'cliente') {
        chat = allChats.find(item => item.clientId === currentUserId && item.enterpriseId === currentContactId)
      }

      let count = 1
      for (let item of chat.messagesList){
        await this.getMessage(item, count)
        count += 1
      }

    },
    async getMessage(messageId, count) {
      let response = await this.contactsListService.getMessageById(messageId)
      let message = response.data
      this.messagesList.push(new MessageEntity(count, message.content, message.sender))
    }
  }
}
</script>

<template>
  <div class="contact-container">
    <div class="contacts-section">
      <h2>Contactos</h2>
      <hr>
      <div class="contacts-list-container">
        <div v-if="contactsList.length!==0">
          <div v-for="contact in contactsList" :key="contact.id" class="contact-card">
            <contact :contact="contact" :open="chatIsOpen"  @currentContact="openChat"></contact>
          </div>
        </div>
        <div v-else>
          <h2>No hay contactos</h2>
        </div>
      </div>
    </div>

    <div v-if="currentContact!=null">
      <div class="chat">
        <div class="current-contact">
          <img src="" :alt="currentContact.name">
          <p>{{ currentContact.name }}</p>
        </div>
        <div>
          <div class="messages-container">
            <ul>
              <li v-for="msg in messagesList" :key="msg.id"
                  :class="{receiver:msg.sender===parseInt(currentContact.id)}">
                <chat-message :message="msg"></chat-message>
              </li>
            </ul>
          </div>
        </div>
        <div class="sending-section">
          <div>
            <pv-input-text placeholder="Escriba un mensaje" type="text"
                           v-model="message" @keyup.enter="sendMessage"/>
          </div>
          <div>
            <pv-button @click="sendMessage">
              <i class="pi pi-send" style="font-size:2rem"></i>
            </pv-button>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h2>Selecciona un contacto</h2>
    </div>
  </div>
</template>

<style scoped>
.contact-container {
  margin: 20px 0;
  display: flex;
  justify-content: space-around;
}

.contacts-section {
  text-align: center;
  background-color: #dcdcdc;
  height: 400px;
  width: 300px;
  border: 1px solid black;
  border-radius: 8px;
}

.contacts-list-container {
  height: 300px;
  overflow-x: hidden;
  overflow-y: auto;
  margin-right: 0;
}

.contact-card {
  padding: 5px 18px;
}

.current-contact {
  display: flex;
  flex-direction: row;
  align-items: center;
  /*justify-content: space-around;*/
  border: 1px solid black;
  border-radius: 8px;
  height: 55px;
  background-color: #17c689;
}
.current-contact > *{
  padding-left:15px;
}
.current-contact img {
  width: 40px;
  height: auto;
  font-size: 10px;
}

.messages-container {
  background-color: white;
  /*height: 345px;*/
  height: 290px;
  overflow-x: hidden;
  overflow-y: auto;
  /*margin-right:20px;*/
  text-align: right;
  border: 1px solid black;
  border-radius: 8px;
}

.receiver{
  text-align: left;
}

.messages-container ul {
  padding: 10px;
}

.messages-container ul li {
  list-style-type: none;
  margin: 10px 5px;
}

.sending-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media screen and (max-width: 520px){
  .contact-container {
    display: flex;
    flex-direction: column;
  }
  .contacts-section{
    /*height: 200px;*/
    height: 100%;
    width: 100%;
  }
  .contacts-section h2{
    font-size:15px;
  }
  .contacts-section hr{
    margin:0;
  }
  .contacts-list-container {
    /*height: 200px;*/
    height: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    margin-bottom: 0;
  }
  .contact-card{
    padding: 0 5px;
    display: flex;
    flex-direction: row;
    margin-bottom: 8px;
  }
  .chat{
    width:100%;
  }

  .messages-container {
    height: 200px;
    overflow-x: hidden;
    overflow-y: auto;
    /*margin-right:20px;*/
    text-align: right;
  }
}
</style>