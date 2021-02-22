<?php

$db['db_host'] = 'db5000371609.hosting-data.io';
$db['db_user'] = 'dbu515524';
$db['db_pass'] = 'TuzAhbhuGiA$Qnetsz9d*ywg;GXyAx';
$db['db_name'] = 'dbs359572';
    
foreach($db as $key => $value) {
    
define(strtoupper($key), $value);
    
}

$link = mysqli_connect(DB_HOST,DB_USER,DB_PASS,DB_NAME);
if(!$link) {
    
    echo "Not Connected to DB!";
} else{ 
    
}

?>
    