<?php
	
	$randoms = [];
	for ($nums = 0; $nums <= 5000; $nums++) {
		$random_number = rand(2, 99999);
		$randoms[$nums] = $random_number;
		
	}
	
	foreach ($randoms as $rnd) {
		$exp = $rnd;
		if ($exp && !($exp & ($exp - 1))) {
			echo $exp . ' é potencia de 2';
		} else {
			echo $exp . ' NÃO é potencia de 2  ';
		}
	}
	
	
	//$v = 93752;
	
	//$f = $v && !($v & ($v - 1));
	
	//var_dump($f);
	
	
	//print_r($rnd);
	
	//echo $random_number = rand(2, 10000); //intval( "0" . rand(1,9) . rand(0,9) . rand(0,9) . rand(0,9) . rand(0,9) );