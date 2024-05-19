<script>
import ContactsListService from "../services/contactsListService.js";
import Contact from "../components/contact.component.vue";
import ChatMessage from "../components/chat-message.component.vue";

export default {
  name: 'contacts',
  components: {ChatMessage, Contact},
  data() {

    return {
      message: '',
      currentContact: null,
      messagesList: [],
      contactsList: [
        {
          id: 1,
          contactName: "John Doe",
          urlToImage: "image1",
          messagesList: [
            {message: "texto1"},
            {message: "texto2"},
            {message: "texto3"},
            {message: "texto4"},
            {message: "texto5"},
          ]
        },
        {
          id: 2,
          contactName: "Juan Perez",
          urlToImage: "image1",
          messagesList: [
            {message: "texto1"},
            {message: "texto2"}
          ]
        },
        {
          id: 3,
          contactName: "Luis Galvez",
          urlToImage: "image1",
          messagesList: [
            {message: "texto1"},
            {message: "texto2"},
            {message: "texto3"},
            {message: "texto4"}
          ]
        },
        {
          id: 4,
          contactName: "Sofia Luna",
          urlToImage: "image1",
          messagesList: [
            {message: "texto1"},
            {message: "texto2"},
            {message: "texto3"},
            {message: "texto4"},
            {message: "texto5"},
          ]
        }
      ],
      contactsListService: new ContactsListService()
    }
  },
  mounted() {
    let id = localStorage.getItem("userId")
    this.contactsListService.getAllContacts(id)
        .then(response => {
          this.contactsList = response.data;
        })
  },
  methods: {
    sendMessage() {
      this.messagesList.push({message:this.message})
      //this.messagesServices.postMessage(this.message).then(res=>{})
      this.message = ""
    },
    openChat(contactId) {
      //console.log(contactId)
      this.currentContact=contactId
      /*this.messagesService.getAllMessages(contactId).then(response=>{
        this.messagesList=response.data
      })
      */
      this.messagesList=this.contactsList.find(contact => contact.id === this.currentContact).messagesList
    }
  }
}
</script>

<template>
  <div class="contact-container">
    <div class="clients">
      <h2>Contactos</h2>
      <hr>
      <div class="contacts-list-container">
        <div v-if="contactsList.length!==0">
          <div v-for="contact in contactsList" :key="contact.id" class="contact-card">
            <contact :contact="contact" @currentContact="openChat"></contact>
          </div>
        </div>
        <div v-else>
          <h2>No hay contactos</h2>
        </div>
      </div>
    </div>

    <div v-if="currentContact!=null">
      <div class="chat">
        <div>
          <div class="messages-container">
            <ul>
              <li v-for="msg in messagesList" :key="msg.message">
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

.clients {
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

.messages-container {
  background-color: white;
  height: 345px;
  overflow-x: hidden;
  overflow-y: auto;
  /*margin-right:20px;*/
  text-align: right;
  border: 1px solid black;
  border-radius: 8px;
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
</style>