<template>
  <!--Start Footer-->
   <footer class="footer" id="footer">
   		<div class="container">
        	<div class="row">
            	<div class="col-md-12">
                	<div class="emergency">
                    	<i class="icon-phone5"></i>
                        <span class="text">Звоните и записывайтесь на бесплатную консультацию</span>
                        <span class="number">+7 (812) 645-90-01</span>
                        <img src="~assets/images/emergency-divider.png" alt="">
                    </div>
                </div>
            </div>

            <div class="main-footer">
            	<div class="row">
                	
                    <div class="col-md-4">
                    	
                        <div class="useful-links">
                        	<div class="title">
                            	<h5>Комплексные сеансы</h5>
                            </div>
                            
                            <div class="detail">
                            	<ul>
                                	
                                	<li><a href="#.">Избыточный вес</a></li>
                                    <li><a href="#.">Омоложение лица</a></li>
                                    <li><a href="#.">Лечение табакокурения</a></li>
                                    <li><a href="#.">Алкогольная зависимость</a></li>
                                    
                                </ul>
                            </div>                          
                        </div>         
                    </div>
                    <div class="col-md-4 col-md-offset-1">         
                        	<div class="title">
                            	<h5>Контакты</h5>
                            </div>
                            
                            <div class="detail">
                            	<div class="get-touch">
                                	
                                    
                                    <span class="text">ООО Клиника "ВИТА"</span>
                                    
                                    
                                    <ul>
                                    	<li><i class="icon-location"></i> <span>Санкт-Петербург, Казначейская улица, д. 4/16</span></li>
                                        <li><i class="icon-phone4"></i> <span>+7 (812) 645-90-01</span></li>
                                        <li><a href="mailto:vitalclinic.ru@gmail.com"><i class="icon-dollar"></i> <span>vitalclinic.ru@gmail.com</span></a></li>
                                    </ul> 
                                    
                                </div>
                            </div>
                    </div>
                    <div class="col-md-3">
                    	
                        <div class="get-touch">
                        	<div class="title">
                            	<h5>Режим работы</h5>
                            </div>
                            
                            <div class="detail">
                            	<div class="get-touch">
                                    <p class="working-time">Пн - Пт - 9.00 - 21.00</p>
                                    <p class="working-time">Суббота - 9.00 - 20.00</p>
                                    <p class="working-time">Воскресенье - 10:00 - 20.00</p>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
            
        </div>
        
        <div class="footer-bottom">
        	<div class="container">
            	<div class="row">
                	
                    <div class="col-md-12">
                    	<span class="copyrights">Vital Clinic &copy; 2009</span>
                    </div>
                </div>
            </div>
            
        </div>
        
   </footer>
   <!--End Footer-->
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .main-footer .useful-links ul li{
      float: none;
      width: auto;
  }
  .working-time{
      color: #fff;
      margin-bottom: 15px;
      font-size: 18px;
      font-weight: 400;
  }
  .main-footer .title h5{
    font-size: 22px;
  }
  @media (max-width: 992px) {
    .main-footer .get-touch{
      margin: 0;
    }
    .main-footer .title{
      margin-top: 25px;
    }
    .main-footer .detail{
      margin: 30px 0 0 0;
    }
  }

</style>
