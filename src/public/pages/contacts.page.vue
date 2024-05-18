<script>
import ContactsListService from "../components/contact/services/contactsListService.js";

export default {
  name: 'contacts',
  data() {

    return {
      message: '',
      messagesList: [],
      contactsList: [
        {
          id:1
        },
        {
          id:2
        },
        {
          id:3
        },
        {
          id:4
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
      <div class="contacts-list-container">
        <pv-card v-if="contactsList.length!==0" v-for="contact in contactsList" :key="contact.id">
          <template #title>Jose</template>
          <template #content>
            <img src="" alt="perfil">
          </template>
        </pv-card>
        <div v-else>
          <h2>No hay contactos</h2>
        </div>
      </div>

    </div>
    <div class="chat">
      <div>
        <div class="messages-container">
          <ul>
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
  /*align-items: center;*/
  background-color: lightblue;
}

.clients {
  text-align: center;
  background-color: #dcdcdc;
  height: 400px;
/*  overflow-x: hidden;
  overflow-y: auto;*/
  width: 300px;
}
.contacts-list-container{
  height: 260px;
  overflow-x: hidden;
  overflow-y: auto;
  margin-right: 10px;
}
.messages-container {
  background-color: white;
  height: 400px;
  overflow-x: hidden;
  overflow-y: auto;
  /*margin-right:20px;*/
  text-align: right;
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