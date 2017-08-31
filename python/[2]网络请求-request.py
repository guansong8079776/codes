#coding=utf-8
# 导入url包
import urllib2 
# 创建一个request对象
request = urllib2.Request("http://www.baidu.com")
# 发送请求
response = urllib2.urlopen(request)
# 接收内容
html = response.read()
# 打印内容
print html
