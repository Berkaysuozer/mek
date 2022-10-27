
<template>
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </template>
  
  <script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  
  export default {
    name: 'App',
    components: {
      Header,
      Footer
    },
  
    data: () => ({
      //
    }),
  }
  </script>
  