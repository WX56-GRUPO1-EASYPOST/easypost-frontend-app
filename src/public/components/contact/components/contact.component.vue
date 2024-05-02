<script>
import ContactsListService from "../services/contactsListService.js";

export default {
  name: 'ContactPage',
  components: {},
  data() {

    return {
      message: '',
      messagesList:[],
      contactsList:[],
      //contactListService:new ContactsListService()
    }
  },
  created() {
    /*ContactsListService.getAllContacts()
        .then(response=>{
          this.contactsList=response.data.contacts;
        })
        .catch(e=>{console.log(e.error)})*/

  },
  methods: {
    sendMessage() {
      this.messagesList.push(this.message)
    }
  }
}
</script>

<template>
  <div class="contact-container">
    <div class="clients">
      <h2>Clientes</h2>
      <hr>
      <pv-card v-if="contactsList" v-for="contact in contactsList" :key="contact.id">
        <template #title>Jose</template>
        <template #content>
          <img src="" alt="perfil">
        </template>
      </pv-card>
      <pv-card v-else>
        <template #title>No hay contactos</template>
      </pv-card>
    </div>
    <div class="chat">
      <div>
        <div class="messages-container">
          <ul >
            <li v-for="msg in messagesList" :key="msg">
              {{ msg }}
            </li>
          </ul>
        </div>
      </div>
      <div class="sending-section">
        <div>
          <pv-input-text placeholder="Escriba un mensaje" type="text" v-model="message"/>
        </div>
        <div>
          <pv-button @click="sendMessage">
            <i class="pi pi-send" style="font-size:2rem"></i>
          </pv-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-container {
  margin: 20px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.clients{
  text-align: center;
  background-color:white;
  height:400px;
  overflow-x:hidden;
  overflow-y: auto;
  width:300px;
}
.messages-container{
  background-color: white;
  height:400px;
  overflow-x:hidden;
  overflow-y:auto;
  /*margin-right:20px;*/
  text-align: right;
}
.messages-container ul{
  padding:10px;
}
.messages-container ul li{
  list-style-type: none;
  margin: 10px 5px;
}
.sending-section{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>