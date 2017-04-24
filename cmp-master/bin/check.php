<?php
session_start();
if(!empty($_SESSION['user_id']))
	$arr=array('loginstatus' =>1);
else
	$arr=array('loginstatus' =>0);
echo json_encode($arr);

?>