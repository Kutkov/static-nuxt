<template>
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
				<span class="input input--kohana">
					<input class="input__field input__field--kohana" type="text" id="input-31" name="input-31" />
					<label class="input__label input__label--kohana" for="input-31">
						<i class="icon-phone5 icon icon--kohana"></i>
						<span class="input__label-content input__label-content--kohana">Номер телефона*</span>
					</label>
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
</template>

<script>
export default {
  mounted() {
		
	}
}
</script>

<style>

</style>
