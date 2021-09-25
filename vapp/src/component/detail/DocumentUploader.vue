<template>
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
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "DocumentUploader",

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
  width: 100%;
  height: 100%;
  text-align: right;
}

</style>
