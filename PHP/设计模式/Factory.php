<?php

/**
 * 工厂模式
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/11/2
 * Time: 10:36
 */
abstract class IDB { // 抽象类，定义子类的行为
    abstract function connect();
//    abstract function query($sql);
//    abstract function noneQuery($sql);
}
class SqlDB extends IDB { // 子类，必须实现抽象类的方法
   public function connect() {
               return '我会连接SqlServer';
   }
}
class RedisDB extends IDB{ // 还可以定义多个子类，但都必须实现
    public function connect() {
        return "我会连接Redis";
    }
}
class Factory { //工厂类
    static public function create($num) : IDB { // 此方法根据输入的参数不同生成不同的IDB对象
            switch($num){
                case 1:
                    return new SqlDB();
                case 2:
                    return new RedisDB();
            }
    }
}
//使用工厂
$uo = Factory::create(1);
echo $uo->connect();
$uo = Factory::create(2);
echo $uo->connect();