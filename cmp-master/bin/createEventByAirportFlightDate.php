<?php
include("serverInfo.php");
$connection = new mysqli($server,$suname,$password,$database);
if($connection->connect_error) die($connection->connect_error);
session_start();
$args = json_decode(file_get_contents("php://input"));
if($args->at_airport_id!=""  && $args->date!="" && $args->flight_id!="" && $args->distance!="")
{
	$airport=$args->at_airport_id;
	$date=$args->date;
	$flight=$args->flight_id;


	$weekday = date('l', strtotime($date));

	 $query="INSERT INTO event(flight_id,at_airport_id,day,dater,user_id,distance) values('$flight','$airport','$weekday','$date',".$_SESSION['user_id'].",'$args->distance')";
	//echo $query;
	$run=$connection->query($query);
	if($run){
			$arr=array('eventstatus'=>1, 'msg'=>'Created Successfully');
	echo json_encode($arr);
	}
	else
	{
		$arr = array('loginstatus' => 2,'msg'=>'Error');

	echo json_encode($arr);
}
}
else
{
	$arr = array('loginstatus' => 3);
	echo json_encode($arr);
}
?>
