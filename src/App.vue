<template>
  <v-app>
    <core-filter />

    <core-toolbar />

    <core-drawer />

    <core-view />
  </v-app>
</template>

<style lang="scss">
@import '@/styles/index.scss';

/* Remove in 1.2 */
.v-datatable thead th.column.sortable i {
  vertical-align: unset;
}
.container.fluid {
  height: 100%;
}
#core-view {
  padding-bottom: 65px;
  height: 90%;;
}
td {
  font-size:1.3em!important;
}
</style>
