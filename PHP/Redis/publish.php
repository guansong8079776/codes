<?php
$redis = new Redis();
$res = $redis->connect("127.0.0.1",6379);;
// test为发布的频道名称,hello,world为发布的消息
$res = $redis->publish('talk','hello,world');
echo $res;