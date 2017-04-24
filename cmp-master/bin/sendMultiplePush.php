<?php 
//importing required files 
//require_once 'DbOperation.php';
require_once 'Firebase.php';
require_once 'Push.php'; 
 
//$db = new DbOperation();
 
$response = array(); 
 
if($_SERVER['REQUEST_METHOD']=='POST'){ 
 //hecking the required params 
 if(isset($_POST['title']) and isset($_POST['message'])) {
 //creating a new push
 $push = null; 
 //first check if the push has an image with it
 if(isset($_POST['image'])){
 $push = new Push(
 $_POST['title'],
 $_POST['message'],
 $_POST['image']
 );
 }else{
 //if the push don't have an image give null in place of image
 $push = new Push(
 $_POST['title'],
 $_POST['message'],
 null
 );
 }
 
 //getting the push from push object
 $mPushNotification = $push->getPush(); 
 
 //getting the token from database object 
 //$devicetoken = $db->getAllTokens();
 //$devicetoken ="{'registration_ids':{['registration_id':'csVU-PNQYws:APA91bGRKXiNYcw435FQId7Y55V4GxMaA_9umjqJ8MW5cf9vvzGSMmfQ3RtQfzBm27UE29QfiNCu405n6aEWeJ_MS8-uAFUEz9Z4mO_IezVgwMfAoj5m8NcLqEXn-yiaCtWEAh560vDT'}]}";
$devicetoken = array();
//array_push($devicetoken,'csVU-PNQYws:APA91bGRKXiNYcw435FQId7Y55V4GxMaA_9umjqJ8MW5cf9vvzGSMmfQ3RtQfzBm27UE29QfiNCu405n6aEWeJ_MS8-uAFUEz9Z4mO_IezVgwMfAoj5m8NcLqEXn-yiaCtWEAh560vDT');
// array_push($devicetoken,'exkzEptkSuQ:APA91bFORRaVEwPHxlkqegy7t41_t0Cx-TdlqAal5YNKwnpPZL3NK2DJ9Zwo9UQxvOfUJ_ngnkYqPnv2WDwLhXCagvuDKFhrk7rUGOc1HtAg9wjgcBDo_WdvWwo-sMeOWf6ZAsGvx3XL');
 
 //creating firebase class object
//snehal cab aggregators 
 // array_push($devicetoken,'eZnYzUAS32w:APA91bHOIXYsVcbUpaiEfeVpi6dm4eX7igBGJ38be9iV8H3dm8FkPFgss_839uBeHML4GyQPUnj7fGSuejKQtxA5vOPVXKzGoGvLUXOUW8aq4APM-3cXbeRlhpizBaamCC_l13SQ9ShD');
 //priyam reciever
 array_push($devicetoken,'fSnyzwst3Tg:APA91bE5V3O8lds_i3NR_cXYySvdLz-HMQ67umZpmSN7KJ6DK-SyhGjAE9j16yyBnOiizCptrQyXbEXij4pgRzdt-InlookfHS4al6MrK1K76CPw9PzS4NENtAhxZ0jHiAbvTxnXYW6r');
  
 $firebase = new Firebase(); 
 
 //sending push notification and displaying result 
 echo $firebase->send($devicetoken, $mPushNotification);
 }else{
 $response['error']=true;
 $response['message']='Parameters missing';
 }
}else{
 $response['error']=true;
 $response['message']='Invalid request';
}
 
echo json_encode($response); ?>