<template>
  <material-card color="green">
    <div
      slot="header"
    >
      <div class="title font-weight-light mb-2">
        카테고리 검색
      </div>
    </div>

    <v-layout
      align-center
      wrap
    >
      <v-tooltip
        v-for="(icon,index) in icons"
        :key="icon+index"
        top
        content-class="top"
      >
        <v-btn
          slot="activator"
        >
          <img
            src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"
            style="height: 50px; width: 50px;"
          >
        </v-btn>
        <span>{{ icon }}</span>
      </v-tooltip>
    </v-layout>
  </material-card>
</template>
<script>
export default {
  data () {
    return {
      icons: [
        '중국집',
        '한식',
        '돈까스',
        '카페',
        '기타',
        '일식',
        '베트남',
        '프랑스',
        'mdi-backup-restore',
        'mdi-badminton',
        'mdi-access-point-network',
        'mdi-account',
        'mdi-account-alert',
        'mdi-account-box',
        'mdi-account-box-multiple',
        'mdi-backburger',
        'mdi-backspace',
        'mdi-backup-restore',
        'mdi-access-point-network',
        'mdi-account',
        'mdi-account-alert',
        'mdi-account-box',
        'mdi-account-box-multiple',
        'mdi-backburger',
        'mdi-backspace',
        'mdi-backup-restore'
      ]
    }
  }
}
</script>

<style>
</style>
