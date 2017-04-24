<?php

include("serverInfo.php");

$connection = new mysqli($server,$suname,$password,$database);
if($connection->connect_error) die($connection->connect_error);
session_start();
	

$args = json_decode(file_get_contents("php://input"));
if($args->at_airport_id!=""  && $args->date!="" &&$args->flight_id!="")
{	
	$airport=$args->at_airport_id;
	$date=$args->date;
	$flight=$args->flight_id;
//$weekday = date('l', strtotime($date)); 
//$dayarr=array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
//$search=array_search($weekday,$dayarr);
//	$flight =array();
		
	$query="select * from operational_data where  at_airport_id='$airport' and flight_id='$flight'and data_date='$date'";
/*	echo $query;*/
	$run=$connection->query($query);
	$result=array();
	$count=$run->num_rows;
	if($count>0){
		for($j=0;$j<$count;$j++){
			$row=$run->fetch_assoc();

		array_push($result, $row);	
	}

	echo json_encode($result);
	}

	else
	{
		$arr = array('loginstatus' => 2);
	
	echo json_encode($arr);
}
}
else
{
	$arr = array('loginstatus' => 3);
	echo json_encode($arr);
}

?>
