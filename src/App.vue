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
      <v-container fluid fill-height>
        <v-layout
          justify-center
          align-center
        >
          <v-flex text-xs-center>
            <v-tooltip left>
              <v-btn icon large :href="source" target="_blank" slot="activator">
                <v-icon large>code</v-icon>
              </v-btn>
              <span>Source</span>
            </v-tooltip>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    
    <v-footer app inset>
      <span> &copy; 2018 Alvaro Enrique</span>
    </v-footer>
    
  </v-app>
</template>

<script>
  export default {
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
