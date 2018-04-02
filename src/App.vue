<template>
  <v-app id="inspire">
    <v-navigation-drawer
      temporary
      v-model="drawer"
      app
    >
      <v-list >

        <v-list-tile @click="openCode">
          <v-list-tile-action>
            <v-icon>code</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            Código
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="openInfo">
          <v-list-tile-action>
            <v-icon>info_outline</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            Info
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    
    <v-toolbar fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>Real Time App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat>
          <v-icon left>code</v-icon>
          Código
        </v-btn>
        <v-btn flat>
          <v-icon left>info_outline</v-icon>
          Info
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    
    <v-content>
  
      <v-container>
        <v-layout row wrap>

          <v-flex xs12 class="mt-4">
            <Chat/>
          </v-flex>

          <v-flex xs12 class="mt-4">
            <v-card>
              <v-card-text class="px-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates vitae mollitia labore libero, animi, fugiat officia, dolor debitis autem aliquam iure eaque veritatis dolore accusantium reiciendis fugit nobis impedit cupiditate.</v-card-text>
            </v-card>
          </v-flex>

        </v-layout>
      </v-container>

    </v-content>
    
    <v-footer app inset>
      <span class="ml-2"> &copy; 2018 Alvaro Enrique</span>
    </v-footer>
    
  </v-app>
</template>

<script>
  import Chat from "./components/Chat";

  export default {
    components: {Chat},
    data () {
      return {
        drawer: null
      }
    },
    methods: {
      openCode: function() {

      },
      openInfo: function() {

      }
    }
  }
</script>
