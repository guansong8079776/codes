<?php

//第二个参数为回调方法；
function subscribe_handler($redis, $channel, $msg){
    print_r($redis);
    echo $channel;
    echo $msg;
    return true;
}

$redis = new Redis();
//不会主动关闭的连接
$res = $redis->pconnect("127.0.0.1",6379);
$res = $redis->subscribe(array("talk"),'subscribe_handler');
