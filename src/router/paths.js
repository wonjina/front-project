/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '',
    name: 'main',
    view: 'Main'
  },
  {
    path: '/restaurantInfo',
    name: 'RestaurantInfo',
    view: 'RestaurantInfo',
    props: true
  },
  {
    path: '/recruitBoard',
    name: 'RecruitBoard',
    view: 'RecruitBoard'
  },
  {
    path: '/recruitBoardInfo',
    name: 'RecruitBoardInfo',
    view: 'RecruitBoardInfo'
  },
  {
    path: '/search',
    name: 'SearchRestaurant',
    view: 'Search',
    props: true
  },
  {
    path: '/login',
    name: 'Login',
    view: 'Login'
  }
]
