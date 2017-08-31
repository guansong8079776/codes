import urllib
import urllib2
# 路径定义
url = "http://www.baidu.com/s"
# 定义参数数组
data = {'wd':'python','ie':'utf-8'}
# 对参数进行编码
data = urllib.urlencode(data)
# 发送get请求，POST请求为： urllib2.Request(url,data)
res = urllib2.Request(url+"?"+data)
# 回去响应数据
response = urllib2.urlopen(res);
# 读取数据
html = response.read()
# 将获取的数据写入文件，首先以write形式打开文件
file_obj = open("a.html","w")
# 写入内容
file_obj.write(html)
# 关闭文件
file_obj.close
