<?php

include("serverInfo.php");
$con = new mysqli($server,$suname,$password,$database);
if($con->connect_error) die($con->connect_error);


if(isset($_POST['name']) && isset($_POST['mobile']) && isset($_POST['password']) && isset($_POST['firebase']) && isset($_POST['email']) && isset($_POST['usermode'])){

 $name = $_POST['name'];
 $mobile = $_POST['mobile'];
 $password = $_POST['password'];
 $firebase = $_POST['firebase'];
 $email = $_POST['email'];
 $usermode = $_POST['usermode'];


  $query="select * from user where name='".$name."'and password='".md5($password)."' ";

  $result = $con->query($query);
  $rows = $result->num_rows;

  if($rows==0)
   {

    $rec="INSERT INTO user (name,mobile_number,password,firebase_id,email_id,usermode) VALUES ('$name','$mobile','$password','$firebase','$email','$usermode')";
    echo $rec;
    $result = $con->query($rec);
    //echo $result;
    if($result)
      $arr = 1;
    else{
      $arr = 0;
    }
}
else if($rows != 0){
  $arr = 2;
}

}

else
  $arr = 3;;

print_r ($arr);


 ?>
