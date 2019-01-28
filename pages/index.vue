<template>
  <div>
    <!-- clock -->
    <div class="container">
        <div class="time-table-sec time-table-sec2">
            <ul id="accordion2" class="accordion2">
                <li>
                <ul class="submenu time-table">
                    <li class="tit"><h5>Время работы</h5></li>
                    <li><span class="day">Пн - Пт</span> <span class="divider">-</span> <span class="time">9.00 - 21.00</span></li>
                    <li><span class="day">Суббота</span> <span class="divider">-</span> <span class="time">9.00 - 20.00</span></li>
                    <li><span class="day">Воскресенье</span> <span class="divider">-</span> <span class="time">10:00 - 20.00</span></li>
                </ul>
                <div class="link"><img class="time-tab" src="~assets/images/timetable-menu-dark.png" alt=""></div>

                </li>
            </ul>
        </div>
    </div>
    <!-- clock end -->

    <!--Start Banner-->
   
    <div class="custom-banner banner-three">
      <div class="main-banner-three">
      <div class="container">
          <div class="detail">
              <i class="icon-cloudy"></i>
              <span class="title">Vital Clinic</span>
              <p>Мы объединили в себе психотерапию и иглорефлексотерапию. Грамотный подход к решению проблем.</p>
          </div>
      </div>
    </div></div>
    
    <!--End Banner-->
 <!--Start Make Appointment-->
   <div class="make-appointment">
   <div class="container">
   
    <ul id="accordion" class="accordion">
  <li>
    
    <div class="link"><i class="fa fa-database"></i><span class="appointment-title">Оставить заявку</span> <i class="icon-chevron-down"></i> </div>
    
    <section class="bgcolor-3">
    <p class="error" id="error" style="display:none;"></p>
    <p class="success" id="success" style="display:none;"></p>
    
    <form name="appointment_form" id="appointment_form" method="post" action="#" onSubmit="return false">
    
				<span class="input input--kohana">
					<input class="input__field input__field--kohana" type="text" id="input-29" name="input-29" />
					<label class="input__label input__label--kohana" for="input-29">
                        <i class="icon-user6 icon icon--kohana"></i>
						<span class="input__label-content input__label-content--kohana">Ваше имя*</span>
					</label>
				</span>
				<span class="input input--kohana">
					<input class="input__field input__field--kohana" type="text" id="input-30" name="input-30" />
					<label class="input__label input__label--kohana" for="input-30">
						<i class="icon-dollar icon icon--kohana"></i>
						<span class="input__label-content input__label-content--kohana">Email</span>
					</label>
				</span>
				<span class="input input--kohana last">
					<input class="input__field input__field--kohana" type="text" id="input-31" name="input-31" />
					<label class="input__label input__label--kohana" for="input-31">
						<i class="icon-phone5 icon icon--kohana"></i>
						<span class="input__label-content input__label-content--kohana">Номер телефона*</span>
					</label>
				</span>
                
                <span class="input input--kohana">
					<input class="input__field input__field--kohana" type="text" id="datepicker"  placeholder="Желаемая дата визита" onClick="" name="datepicker" />	
				</span>
                
                <span class="input input--kohana message">
                	<input class="input__field input__field--kohana" type="text" id="textarea" name="textarea" >
					<label class="input__label input__label--kohana" for="textarea">
						<i class="icon-new-message icon icon--kohana"></i>
						<span class="input__label-content input__label-content--kohana">Комментарий</span>
                    </label>
                </span>
                
                <input name="submit" type="submit" value="Отправить" onClick="validateAppointment();">
                      </form>  

                
			</section>
            
            
    
      </li>
    
      </ul>
      </div>
    </div>
   <!--End Make Appointment-->  
   <!--Start Content-->
   <div class="content">
   
   <!--Start Services-->
   <div class="services-one">
        	<div class="container">
            	<div class="row">
                	<div class="col-md-6">
                    	<div class="service-sec">
                        	
                            <div class="icon">
                            	<i class="icon-tablets"></i>
                            </div>
                            
                            <div class="detail">
                            	<h5>Без таблеток</h5>
                                <p>Добиваемся результата без горы таблеток и временных результатов.</p>
                            </div>
                            
                        </div>
                    </div>
                    
                    <div class="col-md-6">
                    	<div class="service-sec">
                        	
                            <div class="icon">
                            	<i class="icon-target"></i>
                            </div>
                            
                            <div class="detail">
                            	<h5>Нацелены на результат</h5>
                                <p>Наши пациенты получают максимальный эффект после одного сеанса.</p>
                            </div>
                            
                        </div>
                    </div>
                    
                    
                    
                    <div class="col-md-6">
                    	<div class="service-sec">
                        	
                            <div class="icon">
                            	<i class="icon-brain"></i>
                            </div>
                            
                            <div class="detail">
                            	<h5>Комплексный подход</h5>
                                <p>Комплексный подход (сочетание современной психотерапии и восточной иглорефлексотерапии).</p>
                            </div>
                            
                        </div>
                    </div>
                    
                    <div class="col-md-6">
                    	<div class="service-sec">
                        	
                            <div class="icon">
                            	<i class="icon-time2"></i>
                            </div>
                            
                            <div class="detail">
                            	<h5>Проверены временем</h5>
                                <p>Более 25 лет помогаем нашим пациентам поднять качество своей жизни.</p>
                            </div>
                            
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
   <!--End Services-->
   <!--Start Welcome-->
    <div class="welcome dark-back">
     <div class="container">
     	
        <div class="row">
        <div class="col-md-12">
            <div class="main-title">
                <h2><span>Комплексные сеансы</span> Vital Clinic</h2>
                <p>Наши основные комплексные сеанс с применением Сенсорного программирования и Нейро-кодирования.</p>
            </div>
        </div>
        </div>
     
		<div id="tabbed-nav">
                    <ul>
                        <li><a>Избыточный вес</a></li>
                        <li><a>Омоложение</a></li>
                        <li><a>Лечение табакокурения</a></li>
                        <li><a>Лечение алкоголизма</a></li>
                    </ul>

                    
                        <div>
                        
                        <div>
                           
                           <div class="row">
                           	
                            <div class="col-md-6">
                            	<div class="welcome-serv-img">
                            		<img src="~assets/images/services-img2.jpg" alt="">
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                            	
                                <div class="detail">
                                	<h4>Сеанс по избыточному весу</h4>
                                    <p>Для эффективного решения проблемы избыточного веса необходимо учитывать психологические, физиологические и социальные факторы. Эту задачу позволяет успешно решить интегративный сеанс 
                                    Нейро-Сенсорного программирования. <br><br>
                                    Методика предполагает комплексный подход с применением методов психотерапии и рефлексотерапии (иглоукалывания), что позволяет получить максимальный результат <span class="accent">за 1 сеанс.</span></p>
									<a href="about-us.html">Подробнее</a>

                            	</div>
                                
                            </div>
                            
                           </div>
                           
                            
                        </div>
                        
                        <div>
                           
                           <div class="row">
                           	
                            <div class="col-md-6">
                            	<div class="welcome-serv-img">
                            		<img src="~assets/custom-img/tabs/omoloj.jpg" alt="">
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                            	
                                <div class="detail">
                                	<h4>Омоложение лица</h4>
                                    <p>Методика основана на базовом знании сенсорных связей органов чувств с центральными механизмами нервной регуляции пластических процессов в сочетании с гармонизацией энергетического состояния организма.<br/><br/>

                                    Сеанс направлен на изменение и настройку оптимального психофизиологического состояния, при котором обмен веществ в коже лица и шеи смещается в сторону пластических процессов и обновления клеток. В этом основное назначение сеанса.</p>
									<a href="about-us.html">Подробнее</a>

                            	</div>
                                
                            </div>
                            
                           </div>
                           
                            
                        </div>
                        
                        <div>
                           
                           <div class="row">
                           	
                            <div class="col-md-6">
                            	<div class="welcome-serv-img">
                            		<img src="~assets/custom-img/tabs/tabak.jpg" alt="">
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                            	
                                <div class="detail">
                                	<h4>Избавиться от курения табака</h4>
                                    <p>Если понимание вредного влияния курения табака на организм есть, то разумным и верным решением будет- полное прекращение курения. Вопрос заключается в том, что при наличии психической и физической (никотиновой) зависимости, отказаться от курения самостоятельно крайне сложно.<br/><br/>

                                    Для эффективного решения проблемы никотиновой зависимости необходимо учитывать психологические, физиологические и социальные факторы. Эту задачу позволяет успешно решить сеанс Нейро-Сенсорного кодирования.</p>
									<a href="about-us.html">Подробнее</a>

                            	</div>
                                
                            </div>
                            
                           </div>
                           
                            
                        </div>
                        
                        <div>
                           
                           <div class="row">
                           	
                            <div class="col-md-6">
                            	<div class="welcome-serv-img">
                            		<img src="~assets/custom-img/tabs/alko.jpg" alt="">
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                            	
                                <div class="detail">
                                	<h4>Лечение алкоголизма</h4>
                                    <p><span class="accent-bold">Единственно верное решение</span><br>
                                    Необходимо понимать, что если алкоголизм сформировался, как заболевание, то единственно верным решением будет - полное прекращение употребления спиртного. Вопрос заключается в том, что при наличии психической и физической зависимости, отказаться от употребления алкоголя самостоятельно крайне сложно.</p>
									<a href="about-us.html">Подробнее</a>

                            	</div>
                                
                            </div>
                            
                           </div>
                           
                            
                        </div>
                        
                        </div>
                        
        </div>
               
                
     </div>
   </div>
   <!--End Welcome-->
        <!--Start Doctor Quote-->
     <div class="dr-quote">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <span class="quote">"Чудо переходящих одно в другое состояний - это чудо превращения вялой гусеницы в нежно - прекрасную бабочку!"</span>
                    <!-- <span class="name">- Dr. Jonathan Gobi</span> -->
                </div>
            </div>
        </div>
    </div>
    <!--End Doctor Quote-->
  </div>
  <a href="#0" class="cd-top"></a>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  },
  mounted: function() {

    /* jQuery activation and setting options for the tabs*/
    var tabbedNav = $("#tabbed-nav").zozoTabs({
      orientation: "horizontal",
      theme: "silver",
      position: "top-left",
      size: "medium",
      animation: {
      duration: 600,
      easing: "easeOutQuint",
      effects: "fade"
    },
      defaultTab: "tab1"
    });

    /* Changing animation effects*/
    $("#config input.effects").change(function () {
      var effects = $('input[type=radio]:checked').attr("id");
      tabbedNav.data("zozoTabs").setOptions({ "animation": { "effects": effects } });
    });

    // <!-- Time Table -->
    $(function() {
    var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.link');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
    var $this = $(this),
    $prev = $this.prev();

    $prev.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
    $el.find('.submenu').not($prev).slideUp().parent().removeClass('open');
    };
    }	

    var accordion = new Accordion($('#accordion2'), false);
    });
    // end time table
    // <!-- Make an Appointment Accordion -->				
    var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.link');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el,
    $this = $(this),
    $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
    $el.find('.bgcolor-3').not($next).slideUp().parent().removeClass('open');
    };
    }	

    var accordion = new Accordion($('#accordion'), false);

    // <!-- Back to Top -->
    jQuery(document).ready(function($){
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,
    //duration of the top scrolling animation (in ms)
    scroll_top_duration = 1400,
    //grab the "back to top" link
    $back_to_top = $('.cd-top');

    //hide or show the "back to top" link
    $(window).scroll(function(){
    ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
    if( $(this).scrollTop() > offset_opacity ) { 
    $back_to_top.addClass('cd-fade-out');
    }
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event){
        event.preventDefault();
        $('body,html').animate({
        scrollTop: 0 ,
        }, scroll_top_duration
        );
    });
    });
    // end back to top

  }
}
</script>

<style>
  
</style>

