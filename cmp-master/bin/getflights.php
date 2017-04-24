<?php

include("serverInfo.php");

$connection = new mysqli($server,$suname,$password,$database);
$prefix="";
	$suffix="";

if($connection->connect_error) die($connection->connect_error);
session_start();
	

$args = json_decode(file_get_contents("php://input"));
if($args->at_airport_id!=""  && $args->date!="")
{	
	$airport=$args->at_airport_id;
	$date=$args->date;
$weekday = date('l', strtotime($date)); 
$dayarr=array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
$search=array_search($weekday,$dayarr);
	$flight =array();
		
	$query="select * from flight_schedule where  at_airport_id='$airport'";
	$run=$connection->query($query);
	$count=$run->num_rows;	
	if($count>0){
		for($j=0;$j<$count;$j++){
			$row=$run->fetch_assoc();
		
 	$ans=$row['running_days'];

	if($ans[$search]==1){
			array_push($flight,$row['flight_id']);
	}	
	}
	$result = array_unique($flight);
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
