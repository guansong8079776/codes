 ## WebSocket 协议本质上是一个基于 TCP 的协议。
    为了建立一个 WebSocket 连接，客户端浏览器首先要向服务器发起一个 HTTP 请求，这个请求和通常的 HTTP 请求不同，包含了一些附加头信息，其中附加头信息"Upgrade: WebSocket"表明这是一个申请协议升级的 HTTP 请求，服务器端解析这些附加的头信息然后产生应答信息返回给客户端，客户端和服务器端的 WebSocket 连接就建立起来了，双方就可以通过这个连接通道自由的传递信息，并且这个连接会持续存在直到客户端或者服务器端的某一方主动的关闭连接。
   
## 下面为WebSocket的所有属性、方法、变量

```
    /**
    @static
    @type {number}
    @const
    */
    WebSocket.CONNECTING = 0;
    /**
    @static 状态值 （readstate）
    @type {number}1 为已打开状态
    @const
    */
    WebSocket.OPEN = 1;
    /**
    @static
    @type {number} 正在关闭
    @const
    */
    WebSocket.CLOSING = 2;
    /**
    @static
    @type {number} 已关闭
    @const
    */
    WebSocket.CLOSED = 3;
    /**
    @type {string} 请求路径
    */
    WebSocket.prototype.url = null;
    /**
    @type {number} 起始值为0，open 为1，closed为3
    @const
    */
    WebSocket.prototype.readyState = 0;
    /**
    @type {number} 只读属性 bufferedAmount 已被 send() 放入正在队列中等待传输，但是还没有发出的 UTF-8 文本字节数。
    @const
    */
    WebSocket.prototype.bufferedAmount = 0;
    /**
    @type {string}
    @const
    */
    WebSocket.prototype.extensions = null;
    /**
    @type {string}
    @const
    */
    WebSocket.prototype.protocol = null;
    /**
    @type {function(Event)}
    */
    WebSocket.prototype.onopen = 0;
    /**
    @type {function({data: (String|Blob|ArrayBuffer)})}
    */
    WebSocket.prototype.onmessage = 0;
    /**
    @type {function(Event)}
    */
    WebSocket.prototype.onerror = 0;
    /**
    @type {function({code: Number, reason: String, wasClean: Boolean})}
    */
    WebSocket.prototype.onclose = 0;
    /**
    @param {string} url 连接地址
    @param {...string} protocols 握手的协议
    @constructor
    */
    function WebSocket(url,protocols) {}
    /**
    @param {String|ArrayBuffer|ArrayBufferView|Blob} data
    */
    WebSocket.prototype.send = function(data) {};
    /**
    @param {number} [code]
    @param {string} [reason]
    */
    WebSocket.prototype.close = function(code,reason) {};
