

<!doctype html>





<html lang="en" class="no-js">



<head>

	<?php include"include/head.php" ?>

</head>

<body>



	<!-- Container -->

	<div id="container">

		<div class="social-top">



		<?php include"include/social.php" ?>

	</div>

		<!-- Header

		    ================================================== -->

		<header class="clearfix">

			<?php include"include/header.php" ?>

		</header>

		<!-- End Header -->



		<!-- page-banner-section 

			================================================== -->

		<section class="page-banner-section">

			<div class="container">

				<div class="row">

					<div class="col-md-12">

						<h2>Enquiries</h2>

						
					</div>

				</div>

			</div>

		</section>

		<!-- End page-banner section -->



		<!-- contact section 

			================================================== -->

		<section class="contact-section">

			<div class="container">

				<div class="row welcome_heading">

						<h2>Get in Touch</h2>

						<p>At Mecburg Ltd, we have a dedicated team of highly experienced and skilled professionals & engineers to provide world class turn key project services consisting of chemicals process know how, detailed engineering design, implementation & commissioning in the field of chemical, petrochemical and synthetic fibres.



</p>

				</div>

			    

					<form id="contact-form" action="" method="post">
					 <div class="col-md-8">
						<div class="form-group">
							<label for="name">Name :</label>
							<input type="text" class="form-control" name="name">
						</div>
						<div class="form-group">
							<label for="phone">Phone :</label>
							<input type="number" class="form-control" name="phone">
						</div>
						<div class="form-group">
							<label for="email">Email address:</label>
							<input type="email" class="form-control" name="email">
						</div>
						<div class="form-group">
							<label for="Enquiry">Enquiry for Products:</label><br>
							<!--<select   >
								<option>
                                  select
								</option>
								<option>
									Filters
								</option>
								<option>
									Calibration Gas 
								</option>
								<option>
									Gas Division
								</option>
								<option>
								Water Division
								</option>
								<option>
									Oil Refinery
								</option>
								<option>
									Power and Control Panel
								</option>
								<option>
									Gas Analyser
								</option>
								<option>
									Process Value  
								</option>
								<option>
									Sensor
								</option>
								<option>
									Chemical & Molecular Sieve
								</option>
								<option>
									Electrical & Instrument
								</option>
							</select>-->
						<div class="col-md-4">	
						<label class="checkbox-inline">
      <input type="checkbox" value="Gas Division">Gas Division
    </label><br>
    <label class="checkbox-inline">
      <input type="checkbox" value="Water Division">Water Division
    </label><br>
    <label class="checkbox-inline">
      <input type="checkbox" value="Oil refinary">Oil refinary
    </label><br>
	<label class="checkbox-inline">
	<input type="checkbox" value="Filters">Filters
    </label><br>
    <label class="checkbox-inline">
      <input type="checkbox" value="Calibration Gas">Calibration Gas
    </label></div>
	<div class="col-md-4">	
    <label class="checkbox-inline">
      <input type="checkbox" value="Power & control">Power & control
	  </label>	<br>
	  <label class="checkbox-inline">
	<input type="checkbox" value="Gas Analyser">Gas Analyser
    </label><br>
    <label class="checkbox-inline">
      <input type="checkbox" value="Sensor">Sensor
    </label><br>
    <label class="checkbox-inline">
      <input type="checkbox" value="Chemical & Molecular Sieve">Chemical & Molecular Sieve
	  </label>	<br>
	  <label class="checkbox-inline">
      <input type="checkbox" value="Electrical & Instrument">Electrical & Instrument
	  </label>	
	  </div>	
	  </div>	<br>
	  <br><br><br><br>
						<div class="form-group">
                        <label for="comment">Messege :</label>
                    	<textarea class="form-control" rows="3" name="message"></textarea>
						</div>
				    	<input type="submit" value="Submit" name="submit">

						
						<!--<button type="submit" class="btn btn-basic"><a href="mailto:android.owais786@gmail.com">SUBMIT</a></button>
                        -->

					
						</div>

					</form>

				</div>

				


			</div>

		</section>

		<!-- End contact section -->

				<!-- map 

			================================================== -->

		<div>



		

		</div>

				<!-- map -->



		<!-- footer 

			======================================s============ -->

		<footer>

			<?php include"include/footer.php" ?>

		</footer>

		<!-- End footer -->



	</div>

	<!-- End Container -->
	
	

	<script type="text/javascript" src="js/jquery.min.js"></script>

	<script type="text/javascript" src="js/jquery.migrate.js"></script>

	<script type="text/javascript" src="js/jquery.bxslider.min.js"></script>

	<script type="text/javascript" src="js/bootstrap.min.js"></script>

	<script type="text/javascript" src="js/jquery.imagesloaded.min.js"></script>

  	<script type="text/javascript" src="js/jquery.isotope.min.js"></script>

	<script type="text/javascript" src="js/retina-1.1.0.min.js"></script>

	<script type="text/javascript" src="js/plugins-scroll.js"></script>

    <!-- SLIDER REVOLUTION 4.x SCRIPTS  -->

    <script type="text/javascript" src="js/jquery.themepunch.tools.min.js"></script>

    <script type="text/javascript" src="js/jquery.themepunch.revolution.min.js"></script>

    <script type="text/javascript" src="js/jquery.countTo.js"></script>



    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&amp;sensor=false"></script>

	<script type="text/javascript" src="js/gmap3.min.js"></script>

	<script type="text/javascript" src="js/script.js"></script>

	<script>
	$( document ).on( 'click', '.btn-add', function ( event ) {
	event.preventDefault();

	var field = $(this).closest( '.form-group' );
	var field_new = field.clone();

	$(this)
		.toggleClass( 'btn-default' )
		.toggleClass( 'btn-add' )
		.toggleClass( 'btn-danger' )
		.toggleClass( 'btn-remove' )
		.html( '–' );

	field_new.find( 'input' ).val( '' );
	field_new.insertAfter( field );
} );

$( document ).on( 'click', '.btn-remove', function ( event ) {
	event.preventDefault();
	$(this).closest( '.form-group' ).remove();
} );
</script>


</body>





</html>