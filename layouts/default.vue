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
    .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
        margin-bottom: .5rem;
        line-height: 1.5;
        color: inherit;
    }
    .h1, h1 {
        font-size: 2.5rem;
    }
    .h2, h2 {
        font-size: 2rem;
    }
    .h3, h3 {
        font-size: 1.75rem;
    }
    .h4, h4 {
        font-size: 1.5rem;
    }
    .h5, h5 {
        font-size: 1.25rem;
    }
    .h6, h6 {
        font-size: 1rem;
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
  /* inner page css */
    .header{
        box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.32);
    }
    .departments .depart-sec{
        padding: 50px 0;
    }
    /* end inner page css */
</style>

