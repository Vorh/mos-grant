<template>
  <v-container fluid
  >
<!--    <v-container fluid-->
<!--                 style="height: 40vh" class="overflow-auto"-->
<!--    >-->
    <v-row>
      <v-col>
        <Check v-for="item in items"
               :title="item.title"
               :desc="item.desc"
               :result="item.result"
        >

        </Check>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Check from "./Check";

export default {
  name: "Checks",
  components: {Check},
  data: () => ({

    items: [
      {
        title: 'Московская прописка',
        desc: 'Регистрация и ведение бизнеса в Москве, уплата налогов в бюджет столицы',
        result: 1,
      },
      {
        title: 'Возраст бизнеса',
        desc: 'Регистрация компании или ИП минимум за полгода до дня подачи заявки',
        result: 1,
      },
      {
        title: 'Российское гражданство',
        desc: 'Проверка доли участия в компании иностранных юрлиц, зарегистрированных в государствах или на территориях, включенных в Перечни Минфина РФ как «офшорные зоны», не должна превышать 50%',
        result: 2,
      },
      {
        title: 'Проверка долгов',
        desc: 'Проверка задолженности по уплате налогов и сборов в бюджет РФ в размере более 50 тыс. рублей на момент подачи заявки',
        result: 3,
      },

      {
        title: 'Надежность',
        desc: 'Проверка нарушенных обязательств по договорам о предоставлении средств из бюджета города Москвы за последние три года',
        result: 2,
      },

    ]
  }),
}
</script>

<style scoped>

</style>
