<template>
  <div class="boxed-layout">
    <div id="wrap">
      <Header></Header>
      <nuxt/>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
    components: {
        Header,
        Footer
    }
}
</script>


<style>
  .tp-bannertimer{
      background-color: #02adc6;
      height: 3px;
  }
  .accent{
      color: #02adc6;
  }
  .accent-bold{
      color: #02adc6;
      font-weight: bold;
  }
  h4{
      line-height: 25px;
  }
  .custom-banner{
      background: url('~assets/custom-img/slides/tibet.jpg')
  }
  .main-banner-three{
      background: rgba(2, 173, 198, 0.3);
  }
  .banner-three .detail{
      margin: 17% 0;
  }
  .dr-quote{
      background: url('~assets/custom-img/parallax/tibet-sky.jpg') no-repeat fixed;
  }
</style>

