<?php
//Input nothing
include("serverInfo.php");
$con = new mysqli($server,$suname,$password,$database);

if($con->connect_error) die($con->connect_error);

$query = "SELECT * from cabs";

$result = $con->query($query);

$rows = $result->num_rows;

//echo $rows;

$ans = array();
while($rows--){
$row = mysqli_fetch_array($result);
array_push($ans,$row[0]);
}
echo json_encode($ans);
//echo json_encode($result[at_airport]);


 ?>
