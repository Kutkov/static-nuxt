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
        text-transform: none;
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
    p{
        margin-bottom: 15px;
    }
    .mb-0{
        margin-bottom: 0;
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
    .p-sub-title{
        font-size: 24px;
        color: #02adc6;
        font-weight: bold;
    }
    .accent-list-done{
        margin-bottom: 20px;
    }
    .accent-list-done li i {
        font-size: 32px;
        float: left;
        margin: 10px 10px 0 0;
        color: #02ADC6;
    }
    .accent-list-done li{
        font-size: 20px;
        color: #222;
        line-height: 50px;
    }
    .gray-block{
        background: #fafafa;
        border: solid 1px #e4e4e4;
        text-align: center;
        padding: 25px 20px;
        margin-bottom: 20px;
    }
    .quote{
        font-family: 'Droid Serif', serif;
        color: #888;
        font-style: italic;
    }
    /* end inner page css */
</style>

