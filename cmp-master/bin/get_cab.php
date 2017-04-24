<?php

//input (airportname)

include("serverInfo.php");
$con = new mysqli($server,$suname,$password,$database);

$args = json_decode(file_get_contents("php://input"));

if($con->connect_error) die($con->connect_error);

$query = "SELECT * from cabs where at_airport='$args->airportname'";

$result = $con->query($query);
$row = mysqli_fetch_array($result);

echo $row[1];
 ?>
