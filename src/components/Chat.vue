<template>
  <v-layout row wrap >
    <v-flex xs12>
      <v-card>
        
        <v-list two-line>

          <v-subheader>{{ now.toLocaleString() }}</v-subheader>

          <template v-for="(item, index) in itemsFire ">
            <div :key='item[".key"]'>
              <v-divider v-if="index !== 0" ></v-divider>
              <v-list-tile avatar  @click='mostrarInfo(item[".key"])'>
                <v-list-tile-avatar>
                  <img :src="item.avatar">
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>{{item.mensaje}} <span class="grey--text text--lighten-1 body-1 ml-2">{{item.fecha}}</span></v-list-tile-title>
                  <v-list-tile-sub-title>
                    <span class='text--primary'>{{item.nombre}}</span> &mdash; {{item.email}}
                  </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </div>
          </template>

        </v-list>
      </v-card>
    </v-flex>
    <v-flex xs12 class="mt-5" wrap>

       <v-layout row justify-center v-if="!mostrarMensaje">
        <v-dialog v-model="dialog" persistent max-width="500px">
          <v-btn outline slot="activator">Acceder</v-btn>
          <v-card>
            <v-card-title>
              <span class="headline">Información del usuario</span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  
                  <v-flex xs12>
                    <v-text-field label="Nombre" required v-model="nombre"></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field label="Email de contacto" type="email" v-model="email" required></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field label="Avatar (link)" required v-model="avatar"></v-text-field>
                  </v-flex>
                  
                </v-layout>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
              <v-btn color="blue darken-1" flat @click.native="agregarInfo">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-btn outline @click="authenticate" color="red">Acceder con Google</v-btn>
      </v-layout>

      

      <v-layout row justify-center v-if="mostrarMensaje" class="mr-3">
          
        <v-flex xs9 sm6>
          <v-text-field
            name="input-1"
            label="Label Text"
            id="testing"
            v-model="mensaje"
          ></v-text-field>
        </v-flex>
        <v-flex xs1 sm1>
          <v-btn outline  fab color="green" @click="enviarMensaje">
             <v-icon>send</v-icon>
          </v-btn>
        </v-flex>

      </v-layout>
      
     
     
    </v-flex>

  </v-layout>
</template>

<script>
import { itemsRef } from "../firebase";
import firebaseService from "../firebase";
import firebase from "firebase";

export default {
  data() {
    return {
      items: [
        {
          avatar: "https://vuetifyjs.com/static/doc-images/lists/1.jpg",
          mensaje: "Brunch this weekend?",
          nombre: "Ali Connors",
          email:
            "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
          fecha: new Date()
        },

        {
          avatar: "https://vuetifyjs.com/static/doc-images/lists/2.jpg",
          mensaje: "Summer BBQ",
          nombre: "to Alex, Scott, Jennifer",
          email: "Wish I could come, but I'm out of town this weekend.",
          fecha: new Date()
        },

        {
          avatar:
            "https://upload.wikimedia.org/wikipedia/commons/a/a0/Universidad_de_Lima_logo.png",
          mensaje: "Oui oui",
          nombre: "Sandra Adams",
          email: "Do you have Paris recommendations? Have you ever been?",
          fecha: new Date()
        },
        {
          avatar: "https://vuetifyjs.com/static/doc-images/lists/2.jpg",
          mensaje: "Summeasdr BBQ",
          nombre: "to Alex, Scott, Jennifer",
          email: "alvaroenrique@gmail.com",
          fecha: new Date()
        }
      ],
      now: new Date(),
      mostrarForm: false,
      dialog: false,

      nombre: "",
      email: "",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/a/a0/Universidad_de_Lima_logo.png",
      mensaje: "",

      mostrarMensaje: false
    };
  },
  firebase: {
    itemsFire: itemsRef
  },
  methods: {
    updateNow: function() {
      this.now = new Date();
    },
    mostrarInfo: function(id) {
      console.log(id)
    },
    agregarInfo: function() {
      this.dialog = false;
      this.mostrarMensaje = true;
    },
    enviarMensaje: function() {
      let info = {
        avatar: this.avatar,
        mensaje: this.mensaje,
        nombre: this.nombre,
        email: this.email,
        fecha: this.now.toLocaleString()
      };
      this.items.push(info);
      itemsRef.push(info);
    },
    authenticate: function() {
      const provider = new firebase.auth.GoogleAuthProvider();

      firebaseService
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          console.log(user);
          this.nombre = user.displayName;
          this.email = user.email;
          this.avatar = user.photoURL;
          if (this.nombre != "") {
            this.mostrarMensaje = true;
          }
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          console.log(errorMessage);
        });
    }
  },
  mounted() {
    setInterval(this.updateNow, 250);
  }
};
</script>

<style>

</style>
