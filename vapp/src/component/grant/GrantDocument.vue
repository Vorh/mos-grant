<template>
  <v-container
      class="fill-height"
      fluid
  >
    <v-row
        align="center"
        justify="center"
    >
      <RequestStepper/>
      <v-col
          lg="12"
          md="7"
          sm="12"
      >
        <v-row justify="center" class="mt-5">
          <v-col class="form  fixed" lg="4">
            <v-card style="height: 100%">
              <v-card-title>Загрузка документов</v-card-title>
              <v-card-text>
                <div
                    class="file-input-container"
                    @drop.prevent="addDropFile($event)"
                    @dragover.prevent="dragover = true"
                    @dragenter.prevent="dragover = true"
                    @dragleave.prevent="dragover = false">
                  <v-col>
                    <v-row>
                      <v-spacer></v-spacer>
                      <v-img :src="require('../../assets/upload-file.png')"
                             max-width="75px" max-height="100px">
                      </v-img>
                      <v-spacer></v-spacer>
                    </v-row>
                    <br>
                    <v-row justify="center" align="center">
                      <p>
                        <a class="file-container">
                          Загрузите с компьютера
                          <input type="file"
                                 multiple
                                 @change="addFiles"
                                 >
                        </a>
                        <!-- :disabled="!getPermission('change')" -->
                        <label> или переместите файлы сюда</label>
                      </p>
                      <p v-if="files.length > 0">
                        Файлов: {{ files.length }} (всего {{ filesSize }} MB)
                        <v-btn
                            icon
                            :disabled="!(files.length > 0)"
                            @click="uploadDocuments">
                          <v-icon >mdi-upload</v-icon>
                        </v-btn>
                      </p>
                    </v-row>
                  </v-col>
                </div>
                <span>Необходимо приложить следующие документы</span>
                <v-list two-line dense flat>
                  <v-list-item-group>
                    <template v-for="(item, index) in typeDocuments">
                      <v-list-item class="document-item list-item" :key="item.id"
                                   :style="'background: ' + getColor(item)"
                      >
                        <template v-slot:default="{ active }">
                          <v-list-item-icon class="ma-0">
                            <v-checkbox color="black"  readonly :value="item.checked" />
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

                <v-btn outlined class="btn-get" :disabled="!canNext" color="black" @click="goToNext">Отправить</v-btn>

              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

      </v-col>
    </v-row>

  </v-container>
</template>

<script>


import {mapActions, mapMutations} from "vuex";
import RequestStepper from "../requests/RequestStepper";

export default {
  name: "GrantDocument",
  components: {RequestStepper},
  data: () => ({
    sum: null,

    files: [],
    typeGrant: null,
    items: [
      "На онлайн-продвижение товаров, работ и услуг",
      "Для франчайзи",
      "Для резидентов технопарков и кластеров",
      "Для гостиниц и предприятий из приоритетных отраслей",
      "Для предприятий общепита",
      "Для социальных предприятий"
    ],


    canNext: false,

    typeDocuments: [
      {
        name: 'Заявка на предоставление субсидии',
        file: null,
        checked: false,
        caption: 'Документ не найден',
        required: true,
      },

      {
        name: 'Устав организации(действующая редакция)',
        file: null,
        checked: false,
        caption: 'Документ не найден',
        required: true,
      },

      {
        name: 'Договор об учреждении организации (при наличии)',
        file: null,
        checked: false,
        caption: 'Документ не найден',
        required: true,

      },

      {
        name: 'Свидетельство о государственной регистрации юридического лица',
        file: null,
        checked: false,
        caption: 'Документ не найден',
        required: false,

      },

      {
        name: 'Свидетельство о постановке на учет в налоговом органе',
        file: null,
        checked: false,
        caption: 'Документ не найден',
        required: false,

      },
    ]

  }),


  computed: {



    filesSize() {
      if (this.files.length > 0) {
        let size = 0;

        this.files.forEach(file => {
          size += file.size;
        })

        return parseFloat(size / 1024 / 1024).toFixed(2);
      } else {
        return 0;
      }
    }
  },

  methods: {

    ...mapMutations(['setStep', 'setComplete2']),


    uploadDocuments(){

      for (let i = 0; i < this.files.length; i++) {
        let file = this.files[i];

        let find = this.typeDocuments.find(value => file.name.includes(value.name));
        if (find){
          find.file = file;
          find.checked = true;
          file.caption ='Документ найден'
        }
      }

      let array = [...this.typeDocuments];

      this.typeDocuments = array;

      this.canNext = true;
    },


    getColor(item){


      if (item.checked){
        return 'rgba(193, 251, 219, 0.72)'
      }else{
        return 'rgba(23,162,184,0.09)';
      }
    },

    addDropFile(e) {
      e.dataTransfer.files.forEach(element => {
            this.files.push(element);
          }
      );
    },

    goToNext(){
      this.setStep(3);
      this.setComplete2(true)
      this.$router.push({name: 'GrantSendRequest'});
    },

    addFiles(e) {
      let files = e.target.files;
      if (files.length >= 1) {
        for (let i = 0; i <files.length ; i++) {
          let file = files[i];
          this.files.push(file);
        }
      }
    },

  }

}
</script>

<style scoped>



.form {
  background-color: #F4F5F9;
  border-radius: 8px;
}

.btn-get{
  width: 100%;
}

.list-item:hover {
  opacity: 1 !important;
  background-color: rgba(0, 163, 74, 0.72) !important;
}

.file-input-container {
  width: 100%;
  min-width: 100%;
}

.file-input-container:hover {
  border-radius: 10px;
  background-color: rgba(232, 232, 232, 0.35);
}

a.file-container {
  overflow: hidden;
  cursor: pointer;
}

a.file-container > input[type=file] {
  cursor: inherit;
  filter: alpha(opacity=0);
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  text-align: right;
}

</style>
