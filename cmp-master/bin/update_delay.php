<?php

//input(airportid,flightid,date,delayarr,delaydepa)
include("serverInfo.php");
$args = json_decode(file_get_contents("php://input"));
$con = new mysqli($server,$suname,$password,$database);

if($con->connect_error) die($con->connect_error);

$query = "UPDATE operational_data SET delay_in_schedule_departure= '$args->delaydepa',delay_in_schedule_arrival = '$args->delayarr'
          WHERE flight_id='$args->flightid' and at_airport_id ='$args->airportid' and data_date = '$args->date'";

$result = $con->query($query);

if($result)
$arr = array('delaystatus' => 1,'msg'=>'Delay Updated.');
else {
  $arr = array('delaystatus' => 0,'msg'=>'Error.');
}

echo json_encode($arr);

?>
