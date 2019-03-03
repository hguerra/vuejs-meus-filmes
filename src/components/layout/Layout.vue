<template>
  <div>
    <Header></Header>
    <Content></Content>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import Content from '@/components/layout/Content.vue'

export default {
  name: 'Layout',
  components: {
    Header,
    Footer,
    Content
  }
}
</script>
