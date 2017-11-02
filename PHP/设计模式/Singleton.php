<?php

/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/11/2
 * Time: 10:14
 */

class User {
    //静态变量保存全局实例
    private static $_instance = null;
    //私有构造函数，防止外界实例化对象
    private function __construct() {
    }

    //对象复制可以通过 clone 关键字来完成（如果可能，这将调用对象的 __clone() 方法）。对象中的 __clone() 方法不能被直接调用。
    //$copy_of_object = clone $object;
    //私有克隆函数，防止外界克隆对象
    private function __clone() {
    }
    /**  静态方法，单例统一访问入口 */
    static public function getInstance() {
        if (is_null ( self::$_instance ) || isset ( self::$_instance )) {
            self::$_instance = new self ();
        }
        return self::$_instance;
    }

    /**
     * 定义其他的功能函数
     */
    public function getName() {
        echo 'hello world!';
    }
}

/**
 * @author xiaojiang
 * 方式1
 */
class father{
    static $models = [];
    static public function getInstance(){
        $name =  get_called_class();
        if( !isset( self::$models[$name] ) ){
            self::$models[$name] = new $name();
        }
        return self::$models[$name];
    }

    public function m1(){
        echo "fm1";
    }
    public function m2(){
        echo "fm2";
    }
}
class child extends father{
    public function m1(){
        echo 'cm1';
    }
}
father::getInstance()->m1();
child::getInstance()->m1();

/**
 * 方式2
 */
class base{

    static protected  $ins = [];

    static public function getInstance(){
        $cName = get_called_class();
        if( !isset(static::$ins[$cName]) ){
            static::$ins[$cName] = new $cName;
        }
        return static::$ins[$cName];
    }

    public function m1(){
        return "base m1";
    }

    public function m2(){
        return "base m2";
    }

}

class cbase extends base{

    //static public $ins = null;
    static public function getInstance(){
        return parent::getInstance();
    }

    public function m1(){
        return "cbase m1<br>";
    }

}


echo base::getInstance()->m1()."<br>";

echo cbase::getInstance()->m1();