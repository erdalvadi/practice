<?php
	if($_REQUEST['livelink'] && $_REQUEST['livelink']!=''){
		//$homepage = file_get_contents('https://www.amazon.com/dp/B01I5X5SQE');
		$homepage = file_get_contents(trim($_REQUEST['livelink']));
		echo $homepage;
	}
	exit;	
?>