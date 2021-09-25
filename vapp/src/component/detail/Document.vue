<template>
  <v-list two-line dense flat>
    <v-list-item-group>
      <template v-for="(item, index) in typeDocuments">
        <v-list-item class="document-item list-item" :key="item.id"
                     :style="'background: ' + getColor(item)"
        >
          <template v-slot:default="{ active }">
            <v-list-item-icon class="ma-0">
              <v-checkbox color="black"  readonly input-value="true" />
            </v-list-item-icon>
            <v-list-item-content>

              <v-list-item-title
                  v-text="item.name"></v-list-item-title>

              <v-list-item-subtitle
                  v-text="item.caption"></v-list-item-subtitle>
            </v-list-item-content>


            <v-list-item-action>
              <v-list-item-action-text>
                <v-btn icon @click="">
                  <v-icon>mdi-download</v-icon>
                </v-btn>
              </v-list-item-action-text>
            </v-list-item-action>
          </template>
        </v-list-item>

        <v-divider
            v-if="index < files.length - 1"
            :key="index">
        </v-divider>
      </template>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  name: "Document",

  data:()=>({
   files: [],

    typeDocuments: [
      {
        name: 'Заявка на предоставление субсидии',
        file: null,
        checked: true,
        caption: 'Документ предоставлен',
        required: true,
      },

      {
        name: 'Устав организации(действующая редакция)',
        file: null,
        checked: true,
        caption: 'Документ предоставлен',
        required: true,
      },

      {
        name: 'Договор об учреждении организации (при наличии)',
        file: null,
        checked: true,
        caption: 'Документ предоставлен',
        required: true,

      },

      {
        name: 'Свидетельство о государственной регистрации юридического лица',
        file: null,
        checked: true,
        caption: 'Документ предоставлен',
        required: false,

      },

      {
        name: 'Свидетельство о постановке на учет в налоговом органе',
        file: null,
        checked: true,
        caption: 'Документ предоставлен',
        required: false,

      },
        ]

  }),

  methods:{
    getColor(item){

      if (item.checked){
        return 'rgba(193, 251, 219, 0.72)'
      }else{
        return 'rgba(23,162,184,0.09)';
      }
    },
  }
}
</script>

<style scoped>

</style>
