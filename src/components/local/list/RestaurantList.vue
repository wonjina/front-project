<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="items"
      hide-actions
    >
      <template
        slot="items"
        slot-scope="{ item }"
      >
        <tr
          @mouseover="enableShowInfoWindow(item)"
          @mouseout="disableShowInfoWindow()"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.rating }}</td>
          <td>{{ item.review_amount }}</td>
          <td
            v-if="linkBtn"
            class="text-xs-right"
          >
            <v-btn
              slot="activator"
              class="v-btn--simple"
              color="success"
              icon
              @click="moveRestaurantInfo(item)"
            >
              <v-icon color="primary">
                mdi-arrow-right-bold
              </v-icon>
            </v-btn>
          </td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      default: null
    },
    linkBtn: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      headers: [
        {
          sortable: false,
          text: '가게이름',
          value: 'Name'
        },
        {
          sortable: false,
          text: '평점',
          value: 'Star'
        },
        {
          sortable: false,
          text: '리뷰 갯수',
          value: 'Review'
        }
      ]
    }
  },
  created () {
  },
  methods: {
    moveRestaurantInfo (restaurant) {
      this.$router.push({ name: 'RestaurantInfo', params: { id: restaurant.restaurant_id, restaurantInfo: restaurant } })
    },
    enableShowInfoWindow (restaurant) {
      this.$emit('enableShowInfoWindow', restaurant)
    },
    disableShowInfoWindow () {
      this.$emit('disableShowInfoWindow', null)
    }
  }
}
</script>
