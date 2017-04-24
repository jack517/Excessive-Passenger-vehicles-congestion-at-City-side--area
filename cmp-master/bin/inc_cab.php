<?php

//input (airportname)

include("serverInfo.php");
$args = json_decode(file_get_contents("php://input"));
$con = new mysqli($server,$suname,$password,$database);

if($con->connect_error) die($con->connect_error);

$query = "UPDATE cabs SET no_of_cabs = no_of_cabs + 1  where at_airport='$args->airportname'";

$result = $con->query($query);


$query1 = "SELECT * from cabs where at_airport='$args->airportname'";

$result1= $con->query($query1);
$row1 = mysqli_fetch_array($result1);




if($result)
  $arr = array('incrementstatus' => 1,'msg'=>'Cab Incremented Successfully.');
else {
  $arr = array('incrementstatus' => 0,'msg'=>'Error.');
}

echo json_encode($arr);

?>
