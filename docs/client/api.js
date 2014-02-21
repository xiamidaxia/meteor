Template.api.isClient = {
  id: "meteor_isclient",
  name: "Meteor.isClient",
  locus: "Anywhere",
  descr: ["布尔值。运行在客户端时候为真。"]
};

Template.api.isServer = {
  id: "meteor_isserver",
  name: "Meteor.isServer",
  locus: "Anywhere",
  descr: ["布尔值。运行在服务端时候为真。"]
};

Template.api.startup = {
  id: "meteor_startup",
  name: "Meteor.startup(func)",
  locus: "Anywhere",
  descr: ["当客户端或服务端开始时运行。"],
  args: [
    {name: "func",
     type: "Function",
     descr: "开始时候要运行的函数。"}
  ]
};

Template.api.absoluteUrl = {
  id: "meteor_absoluteurl",
  name: "Meteor.absoluteUrl([path], [options])",
  locus: "Anywhere",
  descr: ["生成一个指向应用程序的绝对URL。服务器从 “ROOT_URL” 中读取环境变量以确定在哪里运行。"
          + "这个会自动照顾使用 “meteor deploy”发布的应用，但是前提是必须在使用“meteor "
          + "bundle” 后提供。"],
  args: [
    {name: "path",
     type: "String",
     descr: '要增加到root URL的路径. 路径中不能包含 "`/`".'
    }
  ],
  options: [
    {name: "secure",
     type: "Boolean",
     descr: "是否创建HTTPS URL."
    },
    {name: "replaceLocalhost",
     type: "Boolean",
     descr: "是否替换 localhost(127.0.0.1). 特别适用于不承认localhost当域名的服务。"},
    {name: "rootUrl",
     type: "String",
     descr: "覆盖服务端环境默认的 ROOT_URL 。 例如: \"`http://foo.example.com`\""
    }
  ]
};

Template.api.settings = {
  id: "meteor_settings",
  name: "Meteor.settings",
  locus: "Anywhere",
  descr: ["`Meteor.settings` 包含部署特定配置的信息. " +
          "你可以通过 `--settings` 操作 (需要包含json数据的文件) 来做 " +
          "`meteor run` 或 `meteor deploy`初始化，" +
          "或者通过配置服务器端的 `METEOR_SETTINGS` 环境变量为JSON字符串。" +
          "如果你没有提供任何的设置, `Meteor.settings` 将为空的对象. 如果设置对象包含key值 `public`, 那么 " +
          " `Meteor.settings.public` 将在客户端和服务端同时可用. 但其他`Meteor.settings`属性都只能在服务器端定义."]
};

Template.api.release = {
  id: "meteor_release",
  name: "Meteor.release",
  locus: "Anywhere",
  descr: ["`Meteor.release` 是一个字符串包含project被创建的 " +
          "[release](#meteorupdate)版本。(例如" +
          "\"" +
          "0.7.0.1" + //Meteor.release +
          "\"`). 如果project使用git从Meteor中checkout，则为 `undefined`。"]
};

Template.api.ejsonParse = {
  id: "ejson_parse",
  name: "EJSON.parse(str)",
  locus: "Anywhere",
  args: [ {name: "str", type: "String", descr: "A string to parse into an EJSON value."} ],
  descr: ["Parse a string into an EJSON value. Throws an error if the string is not valid EJSON."]
},

Template.api.ejsonStringify = {
  id: "ejson_stringify",
  name: "EJSON.stringify(val, [options])",
  locus: "Anywhere",
  args: [ {name: "val", type: "EJSON-compatible value", descr: "A value to stringify."} ],
  options: [
    {name: "indent",
     type: "Boolean, Integer, or String",
     descr: "Indents objects and arrays for easy readability.  When `true`, indents by 2 spaces; when an integer, indents by that number of spaces; and when a string, uses the string as the indentation pattern."},
    {name: "canonical",
     type: "Boolean",
     descr: "When `true`, stringifies keys in an object in sorted order."}
  ],
  descr: ["Serialize a value to a string.\n\nFor EJSON values, the serialization " +
          "fully represents the value. For non-EJSON values, serializes the " +
          "same way as `JSON.stringify`."]
},


Template.api.ejsonFromJSONValue = {
  id: "ejson_from_json_value",
  name: "EJSON.fromJSONValue(val)",
  locus: "Anywhere",
  args: [ {name: "val", type: "JSON-compatible value", descr: "A value to deserialize into EJSON."} ],
  descr: ["Deserialize an EJSON value from its  plain JSON representation."]
},

Template.api.ejsonToJSONValue = {
  id: "ejson_to_json_value",
  name: "EJSON.toJSONValue(val)",
  locus: "Anywhere",
  args: [ {name: "val", type: "EJSON-compatible value", descr: "A value to serialize to plain JSON."} ],
  descr: ["Serialize an EJSON-compatible value into its plain JSON representation."]
},

Template.api.ejsonEquals = {
  id: "ejson_equals",
  name: "EJSON.equals(a, b, [options])",
  locus: "Anywhere",
  args: [ {name: "a", type: "EJSON-compatible object"},
          {name: "b", type: "EJSON-compatible object"} ],
  options: [
    {name: "keyOrderSensitive",
     type: "Boolean",
     descr: "Compare in key sensitive order, if supported by the JavaScript implementation.  For example, `{a: 1, b: 2}` is equal to `{b: 2, a: 1}` only when `keyOrderSensitive` is `false`.  The default is `false`."}
  ],
  descr: ["Return true if `a` and `b` are equal to each other.  Return false otherwise." +
          "  Uses the `equals` method on `a` if present, otherwise performs a deep comparison."]
},

Template.api.ejsonClone = {
  id: "ejson_clone",
  name: "EJSON.clone(val)",
  locus: "Anywhere",
  args: [ {name: "val", type: "EJSON-compatible value", descr: "A value to copy."} ],
  descr: ["Return a deep copy of `val`."]
},

Template.api.ejsonNewBinary = {
  id: "ejson_new_binary",
  name: "EJSON.newBinary(size)",
  locus: "Anywhere",
  args: [ {name: "size", type: "Number", descr: "The number of bytes of binary data to allocate."} ],
  descr: ["Allocate a new buffer of binary data that EJSON can serialize."]
},

Template.api.ejsonIsBinary = {
  id: "ejson_is_binary",
  name: "EJSON.isBinary(x)",
  locus: "Anywhere",
  descr: ["Returns true if `x` is a buffer of binary data, as returned from [`EJSON.newBinary`](#ejson_new_binary)."]
},

Template.api.ejsonAddType = {
  id: "ejson_add_type",
  name: "EJSON.addType(name, factory)",
  locus: "Anywhere",
  args: [
    {name: "name",
     type: "String",
     descr: "A tag for your custom type; must be unique among custom data types defined in your project, and must match the result of your type's `typeName` method."
    },
    {name: "factory",
     type: "Function",
     descr: "A function that deserializes a JSON-compatible value into an instance of your type.  This should match the serialization performed by your type's `toJSONValue` method."
    }
  ],
  descr: ["Add a custom datatype to EJSON."]
};

Template.api.ejsonTypeClone = {
  id: "ejson_type_clone",
  name: "<i>instance</i>.clone()",
  descr: ["Return a value `r` such that `this.equals(r)` is true, and modifications to `r` do not affect `this` and vice versa."]
};

Template.api.ejsonTypeEquals = {
  id: "ejson_type_equals",
  name: "<i>instance</i>.equals(other)",
  args: [ {name: "other", type: "object", descr: "Another object to compare this to."}],
  descr: ["Return `true` if `other` has a value equal to `this`; `false` otherwise."]
};

Template.api.ejsonTypeName = {
  id: "ejson_type_typeName",
  name: "<i>instance</i>.typeName()",
  descr: ["Return the tag used to identify this type.  This must match the tag used to register this type with [`EJSON.addType`](#ejson_add_type)."]
};

Template.api.ejsonTypeToJSONValue = {
  id: "ejson_type_toJSONValue",
  name: "<i>instance</i>.toJSONValue()",
  descr: ["Serialize this instance into a JSON-compatible value."]
};

Template.api.publish = {
  id: "meteor_publish",
  name: "Meteor.publish(name, func)",
  locus: "Server",
  descr: ["发布一套档案."],
  args: [
    {name: "name",
     type: "String",
     descr: "档案的名字. 如果为`null`则档案无名字, 然后档案自动发送到所有已连接的客户端."},
    {name: "func",
     type: "Function",
     descr: "当每次一个客户端订阅时候函数被调用. 函数里边, `this` 是publish对象的引用, 将在稍后说明.  " +
         "如果客户端通过`subscribe`中指定参数, 则函数调用时候将采用同样的参数."}
  ]
};

Template.api.subscription_added = {
  id: "publish_added",
  name: "<i>this</i>.added(collection, id, fields)",
  locus: "Server",
  descr: ["pubulish函数内部访问. 当文档已经添加到档案中则通知订阅者"],
  args: [
    {name: "collection",
     type: "String",
     descr: "包含新文档的集合."
    },
    {name: "id",
     type: "String",
     descr: "新文档的ID."
    },
    {name: "fields",
     type: "Object",
     descr: "新文档的fields. 如果`_id`存在时候它被忽略."
    }
  ]
};

Template.api.subscription_changed = {
  id: "publish_changed",
  name: "<i>this</i>.changed(collection, id, fields)",
  locus: "Server",
  descr: ["publish函数内部调用. 当文档已经修改到档案中则通知订阅者"],
  args: [
    {name: "collection",
     type: "String",
     descr: "包含已修改文档的集合."
    },
    {name: "id",
     type: "String",
     descr: "已修改文档的ID."
    },
    {name: "fields",
     type: "Object",
     descr: "已经更改的文档的fields,连同它新的值。如果fields不存在则将被保持不变" +
         "如果有值为undefined它将从文档中移除。如果_id存在则忽略。"
    }
  ]
};

Template.api.subscription_removed = {
  id: "publish_removed",
  name: "<i>this</i>.removed(collection, id)",
  locus: "Server",
  descr: ["publish函数内部调用. 当文档已经在档案中删除则通知订阅者"],
  args: [
    {name: "collection",
     type: "String",
     descr: "被删除文档所属集合的名字"
    },
    {name: "id",
     type: "String",
     descr: "被删除文档的id"
    }
  ]
};

Template.api.subscription_ready = {
  id: "publish_ready",
  name: "<i>this</i>.ready()",
  locus: "Server",
  descr: ["publish函数内部调用.  " +
      "通知订阅者一个初始化完成的档案的快照已经发送。" +
      "这将触发客户端一个函数`onready`" +
      ",通过[`Meteor.subscribe`](#meteor_subscribe)"
      ]
};


Template.api.subscription_error = {
  id: "publish_error",
  name: "<i>this</i>.error(error)",
  locus: "Server",
  descr: ["publish函数内部调用。" +
      "[`Meteor.subscribe`](#meteor_subscribe)触发时" +
      "停止客户端端订阅,如果错误不是[`Meteor.Error`](#meteor_error)," +
      "它将被过滤"]
};

Template.api.subscription_stop = {
  id: "publish_stop",
  name: "<i>this</i>.stop()",
  locus: "Server",
  descr: ["publish函数内部调用。停止客户端订阅，" +
      "`onError`回调不会在客户端上调用."]
};

Template.api.subscription_onStop = {
  id: "publish_onstop",
  name: "<i>this</i>.onStop(func)",
  locus: "Server",
  descr: ["publish函数内部调用，当一个订阅停止时候运行"],
  args: [
    {name: "func",
     type: "Function",
     descr: "回调"
    }
  ]
};

Template.api.subscription_userId = {
  id: "publish_userId",
  name: "<i>this</i>.userId",
  locus: "Server",
  descr: ["发布函数内部访问. 已登陆用户的id, 或者没有用户登陆时候为`null`."]
};


Template.api.subscription_connection = {
  id: "publish_connection",
  name: "<i>this</i>.connection",
  locus: "Server",
  descr: ["发布函数内部访问。" +
      "该订阅的[connection](#meteor_onconnection)"]
};


Template.api.subscribe = {
  id: "meteor_subscribe",
  name: "Meteor.subscribe(name [, arg1, arg2, ... ] [, callbacks])",
  locus: "Client",
  descr: ["订阅一条记录.  " +
      "返回一个提供 `stop()` 和 `ready()` 方法的句柄"],
  args: [
    {name: "name",
     type: "String",
     descr: "订阅的名字，和服务端publish()中的名字匹配"},
    {name: "arg1, arg2, ...",
     type: "Any",
     descr: "可选参数由服务端publish()推送"},
    {name: "callbacks",
     type: "函数或者对象",
     descr: "可选的. 可能包含`onError` and `onReady`回调. " +
         "如果是对象, 则它被解释为`onReady的回调`"}
  ]
};

Template.api.methods = {
  id: "meteor_methods",
  name: "Meteor.methods(methods)",
  locus: "Anywhere",
  descr: ["定义一些能被远程客户端调用的函数。"],
  args: [
    {name: "methods",
     type: "Object",
     descr: "键为方法名，值为函数的字典对象"}
  ]
};

Template.api.method_invocation_userId = {
  id: "method_userId",
  name: "<i>this</i>.userId",
  locus: "Anywhere",
  descr: ["调用改方法的用户id，如果用户未登陆则为`null`"]
};

Template.api.method_invocation_setUserId = {
  id: "method_setUserId",
  name: "<i>this</i>.setUserId(userId)",
  locus: "Server",
  descr: ["设置登陆用户。"],
  args: [
    {name: "userId",
     type: "String or null",
     descr: "在连接的时候需要返回的`userId`的值"}
  ]
};

Template.api.method_invocation_unblock = {
  id: "method_unblock",
  name: "<i>this</i>.unblock()",
  locus: "Server",
  descr: ["内部方法调用. 允许后续方法调用在客户端的新连接上。"]
};

Template.api.method_invocation_isSimulation = {
  id: "method_issimulation",
  name: "<i>this</i>.isSimulation",
  locus: "Anywhere",
  descr: ["内部方法调用. 布尔值, 为真如果调用是一个存根."]
};

Template.api.method_invocation_connection = {
  id: "method_connection",
  name: "<i>this</i>.connection",
  locus: "Server",
  descr: ["内部方法调用. 该方法收到的" +
      " [连接](#meteor_onconnection) 。" +
      "如果该方法未建立连接则为`null`, 例如调用服务端的一个初始化方法"]
};

Template.api.error = {
  id: "meteor_error",
  name: "new Meteor.Error(error, reason, details)",
  locus: "Anywhere",
  descr: ["该类代表方法抛出一个象征性的错误"],
  args: [
    {name: "error",
     type: "Number",
     descr: "一个错误号，类似HTTP码(如, 404, 500)"},
    {name: "reason",
     type: "String",
     descr: "可选的. 一个简短的可读的错误描述，如'Not Found.'"} +
    {name: "details",
     type: "String",
     descr: "可选的. 错误的附加信息，例如一个堆栈跟踪的文本"}
  ]
};

Template.api.meteor_call = {
  id: "meteor_call",
  name: "Meteor.call(name, param1, param2, ... [, asyncCallback])",
  locus: "Anywhere",
  descr: ["调用一个方法通过任意数量的参数。"],
  args: [
    {name: "name",
     type: "String",
     descr: "要被调用方法的名字"},
    {name: "param1, param2, ...",
     type: "EJSON",
     descr: "可选的方法参数"},
    {name: "asyncCallback",
     type: "Function",
     descr: "可选回调, 用于异步调用，方法完成返回结果或错误。" +
         "如果没有设置，可能的情况下该方法会同步调用(见下文)."}
  ]
};

Template.api.meteor_apply = {
  id: "meteor_apply",
  name: "Meteor.apply(name, params [, options] [, asyncCallback])",
  locus: "Anywhere",
  descr: ["通过一个参数数组调用一个方法"],
  args: [
    {name: "name",
     type: "String",
     descr: "被调用方法的名字"},
    {name: "params",
     type: "Array",
     descr: "Method arguments"},
    {name: "asyncCallback",
     type: "Function",
     descr: "可选的；语法类似[`Meteor.call`](#meteor_call)."}
  ],
  options: [
    {name: "wait",
     type: "Boolean",
     descr: "(只支持客户端) 如果为真，别发送该方法，直到所有之前的方法已经完成，" +
         "且别发送后续的方法的调用直到该方法已经完成。"},
    {name: "onResultReceived",
     type: "Function",
     descr: "(只支持客户端) 该方法用于被方法的错误或结果返回(类似`异步回调`)调用，在错误或结果可用的时候. " +
         "本地的缓存可能尚未反应该方法的写入操作。"}
  ]
};

Template.api.status = {
  id: "meteor_status",
  name: "Meteor.status()",
  locus: "Client",
  descr: ["获取当前客户端的连接状态，一个响应式数据源."]
};

Template.api.reconnect = {
  id: "meteor_reconnect",
  name: "Meteor.reconnect()",
  locus: "Client",
  descr: [
    "强制立即尝试重连如果一个客户端为连接服务器." +
        "如果客户端已经连接这个方法不执行任何的."]
};

Template.api.disconnect = {
  id: "meteor_disconnect",
  name: "Meteor.disconnect()",
  locus: "Client",
  descr: [
    "断开客户端连接."]
};

Template.api.connect = {
  id: "ddp_connect",
  name: "DDP.connect(url)",
  locus: "Anywhere",
  descr: ["连接到服务端上一个不同的Meteor应用，并订阅它的文档，调用其远程方法。"],
  args: [
    {name: "url",
     type: "String",
     descr: "其他Meteor应用的URL."}
  ]
};

Template.api.onConnection = {
  id: "meteor_onconnection",
  name: "Meteor.onConnection(callback)",
  locus: "Server",
  descr: ["Register a callback to be called when a new DDP connection is made to the server."],
  args: [
    {name: "callback",
     type: "function",
     descr: "The function to call when a new DDP connection is established."}
  ]
};

// onAutopublish

Template.api.meteor_collection = {
  id: "meteor_collection",
  name: "new Meteor.Collection(name, [options])",
  locus: "Anywhere",
  descr: ["构造一个集合"],
  args: [
    {name: "name",
     type: "String",
     descr: "集合的名称。如果为null，将创建一个未托管(非同步)的本地集合"}
  ],
  options: [
    {name: "connection",
     type: "Object",
     descr: "服务端集合可以管理该集合。如果没指明将使用默认连接。" +
         "调用[`DDP.connect`](#ddp_connect) 可指定一个不同的服务器比国内传递返回值。" +
         "没指定连接返回null。" +
         "未托管的集合 (`name` 是 null) 不能指定一个连接."
    },
    {name: "idGeneration",
     type: "String",
     descr: "该方法生成一个新文档的`_id`字段在这个集合。可能的值为:\n\n" +
     " - **`'STRING'`**: 随机字符串\n" +
     " - **`'MONGO'`**:  随机 [`Meteor.Collection.ObjectID`](#collection_object_id) 值\n\n" +
     "默认是 `'STRING'`."
    },
    {name: "transform",
     type: "Function",
     descr: "可选的转换函数。" +
         "文档在通过`fetch`和`findOne`返回之前会通过该函数。" +
         "且在被`observe`,`allow`,`deny`回调之前。"
    }
  ]
};

Template.api.find = {
  id: "find",
  name: "<em>collection</em>.find(selector, [options])",
  locus: "Anywhere",
  descr: ["用匹配的选择器寻找集合。"],
  args: [
    {name: "selector",
     type: "Mongo selector, or String",
     type_link: "selectors",
     descr: "选择器"}
  ],
  options: [
    {name: "sort",
     type: "Sort specifier",
     type_link: "sortspecifiers",
     descr: "排序规则 (默认: 自然排序)"},
    {name: "skip",
     type: "Number",
     descr: "结果中要跳过开头的数"},
    {name: "limit",
     type: "Number",
     descr: "最大返回的结果数"},
    {name: "fields",
     type: "Field specifier",
     type_link: "fieldspecifiers",
     descr: "词典字段用来返回或排除."},
    {name: "reactive",
     type: "Boolean",
     descr: "(只客户端可用) 默认`true`；传递`false`将关闭响应"},
    {name: "transform",
     type: "Function",
     descr: "对当前游标的[`集合`](#collections)使用转换.传递" +
         "`null`关闭转换."}
  ]
};

Template.api.findone = {
  id: "findone",
  name: "<em>collection</em>.findOne(selector, [options])",
  locus: "Anywhere",
  descr: ["寻找匹配的并按指定选项的集合的第一个文档。" ],
  args: [
    {name: "selector",
     type: "Mongo selector, or String",
     type_link: "selectors",
     descr: "选择器"}
  ],
  options: [
    {name: "sort",
     type: "Sort specifier",
     type_link: "sortspecifiers",
     descr: "排序规则 (默认: 自然排序)"},
    {name: "skip",
     type: "Number",
     descr: "结果中要跳过开头的数"},
    {name: "fields",
     type: "Field specifier",
     type_link: "fieldspecifiers",
     descr: "词典字段用来返回或排除."},
    {name: "reactive",
     type: "Boolean",
     descr: "(只客户端可用) 默认`true`；传递`false`将关闭响应"},
    {name: "transform",
     type: "Function",
     descr: "对当前游标的[`集合`](#collections)使用转换.传递" +
        "`null`关闭转换."
    }
  ]
};

Template.api.insert = {
  id: "insert",
  name: "<em>collection</em>.insert(doc, [callback])",
  locus: "Anywhere",
  descr: ["插入文档到集合. 返回一个唯一的 _id."],
  args: [
    {name: "doc",
     type: "Object",
     descr: "要插入的文档. 可能还没有_id 属性, 这种情况Meteor会为你创建一个" },
    {name: "callback",
     type: "Function",
     descr: "可选的，如果存在，调用一个错误对象当成第一个参数, 如果没有错误，_id为第二个参数"}
  ]
};

Template.api.update = {
  id: "update",
  name: "<em>collection</em>.update(selector, modifier, [options], [callback])",
  locus: "Anywhere",
  descr: ["修改一个或更多的文档在集合中，返回受影响的文档数量。"],
  args: [
    {name: "selector",
     type: "Mongo selector, or object id",
     type_link: "selectors",
     descr: "指定要修改的文档"},
    {name: "modifier",
     type: "Mongo modifier",
     type_link: "modifiers",
     descr: "指定如何修改文档"},
    {name: "callback",
     type: "Function",
     descr: "可选的。如果提供，则以错误对象为第一个参数，如果没错误，以受影响的" +
         "的文档数作为第二个参数"}
  ],
  options: [
    {name: "multi",
     type: "Boolean",
     descr: "为真则修改所有的文档；为假则只修改其中一个匹配的文档（默认)."},
    {name: "upsert",
     type: "Boolean",
     descr: "为真则插入一个文档，在没有匹配文档被发现的情况. "}
  ]
};

Template.api.upsert = {
  id: "upsert",
  name: "<em>collection</em>.upsert(selector, modifier, [options], [callback])",
  locus: "Anywhere",
  descr: ["修改集合中更多的文档，或者插入一个如果没有匹配的文档被发现。" +
      "返回一个对象，对象拥有" +
          "`numberAffected` (已修改文档的数目) " +
          " 和 `insertedId` (被插入文档的唯一的 _id)."],
  args: [
    {name: "selector",
     type: "Mongo selector, or object id",
     type_link: "selectors",
     descr: "指定要修改的文档"},
    {name: "modifier",
     type: "Mongo modifier",
     type_link: "modifiers",
     descr: "指定如何修改文档"},
    {name: "callback",
     type: "Function",
     descr: "可选的. 如果提供，则以一个错误对象作为第一个参数，如果没错误，则" +
         "以受影响的文档数目作为第二个参数"}
  ],
  options: [
    {name: "multi",
     type: "Boolean",
     descr: "为真则修改所有的文档；为假则只修改匹配文档的其中一个(默认)"}
  ]
};


Template.api.remove = {
  id: "remove",
  name: "<em>collection</em>.remove(selector, [callback])",
  locus: "Anywhere",
  descr: ["Remove documents from the collection"],
  args: [
    {name: "selector",
     type: "Mongo selector, or object id",
     type_link: "selectors",
     descr: "Specifies which documents to remove"},
    {name: "callback",
     type: "Function",
     descr: "Optional.  If present, called with an error object as its argument."}
  ]
};

Template.api.allow = {
  id: "allow",
  name: "<em>collection</em>.allow(options)",
  locus: "Server",
  descr: ["Allow users to write directly to this collection from client code, subject to limitations you define."],
  options: [
    {name: "insert, update, remove",
     type: "Function",
     descr: "Functions that look at a proposed modification to the database and return true if it should be allowed."},
    {name: "fetch",
     type: "Array of String",
     descr: "Optional performance enhancement. Limits the fields that will be fetched from the database for inspection by your `update` and `remove` functions."},
    {name: "transform",
     type: "Function",
     descr: "Overrides `transform` on the  [`Collection`](#collections).  Pass `null` to disable transformation."}
  ]
};

Template.api.deny = {
  id: "deny",
  name: "<em>collection</em>.deny(options)",
  locus: "Server",
  descr: ["Override `allow` rules."],
  options: [
    {name: "insert, update, remove",
     type: "Function",
     descr: "Functions that look at a proposed modification to the database and return true if it should be denied, even if an `allow` rule says otherwise."},
    {name: "fetch",
     type: "Array of Strings",
     descr: "Optional performance enhancement. Limits the fields that will be fetched from the database for inspection by your `update` and `remove` functions."},
    {name: "transform",
     type: "Function",
     descr:  "Overrides `transform` on the  [`Collection`](#collections).  Pass `null` to disable transformation."}
  ]
};


Template.api.cursor_count = {
  id: "count",
  name: "<em>cursor</em>.count()",
  locus: "Anywhere",
  descr: ["Returns the number of documents that match a query."]
};

Template.api.cursor_fetch = {
  id: "fetch",
  name: "<em>cursor</em>.fetch()",
  locus: "Anywhere",
  descr: ["Return all matching documents as an Array."]
};

Template.api.cursor_foreach = {
  id: "foreach",
  name: "<em>cursor</em>.forEach(callback, [thisArg])",
  locus: "Anywhere",
  descr: ["Call `callback` once for each matching document, sequentially and synchronously."],
  args: [
    {name: "callback",
     type: "Function",
     descr: "Function to call. It will be called with three arguments: the document, a 0-based index, and <em>cursor</em> itself."},
    {name: "thisArg",
     type: "Any",
     descr: "An object which will be the value of `this` inside `callback`."}
  ]
};

Template.api.cursor_map = {
  id: "map",
  name: "<em>cursor</em>.map(callback, [thisArg])",
  locus: "Anywhere",
  descr: ["Map callback over all matching documents.  Returns an Array."],
  args: [
    {name: "callback",
     type: "Function",
     descr: "Function to call. It will be called with three arguments: the document, a 0-based index, and <em>cursor</em> itself."},
    {name: "thisArg",
     type: "Any",
     descr: "An object which will be the value of `this` inside `callback`."}
  ]
};

Template.api.cursor_rewind = {
  id: "rewind",
  name: "<em>cursor</em>.rewind()",
  locus: "Anywhere",
  descr: ["Resets the query cursor."],
  args: [ ]
};

Template.api.cursor_observe = {
  id: "observe",
  name: "<em>cursor</em>.observe(callbacks)",
  locus: "Anywhere",
  descr: ["Watch a query.  Receive callbacks as the result set changes."],
  args: [
    {name: "callbacks",
     type: "Object",
     descr: "Functions to call to deliver the result set as it changes"}
  ]
};

Template.api.cursor_observe_changes = {
  id: "observe_changes",
  name: "<em>cursor</em>.observeChanges(callbacks)",
  locus: "Anywhere",
  descr: ["Watch a query.  Receive callbacks as the result set changes.  Only the differences between the old and new documents are passed to the callbacks."],
  args: [
    {name: "callbacks",
     type: "Object",
     descr: "Functions to call to deliver the result set as it changes"}
  ]
};

Template.api.id = {
  id: "meteor_id",
  name: "Random.id()",
  locus: "Anywhere",
  descr: ["Return a unique identifier."],
  args: [ ]
};

Template.api.collection_object_id = {
  id: "collection_object_id",
  name: "new Meteor.Collection.ObjectID(hexString)",
  locus: "Anywhere",
  descr: ["Create a Mongo-style `ObjectID`.  If you don't specify a `hexString`, the `ObjectID` will generated randomly (not using MongoDB's ID construction rules)."],
  args: [ {
    name: "hexString",
    type: "String",
    descr: ["Optional.  The 24-character hexadecimal contents of the ObjectID to create"]
  }]
};

Template.api.selectors = {
  id: "selectors",
  name: "Mongo-style Selectors"
};

Template.api.modifiers = {
  id: "modifiers",
  name: "Mongo-style Modifiers"
};

Template.api.sortspecifiers = {
  id: "sortspecifiers",
  name: "Sort Specifiers"
};

Template.api.fieldspecifiers = {
  id: "fieldspecifiers",
  name: "Field Specifiers"
};

////// DEPS

Template.api.deps_autorun = {
  id: "deps_autorun",
  name: "Deps.autorun(runFunc)",
  locus: "Client",
  descr: ["Run a function now and rerun it later whenever its dependencies change. Returns a Computation object that can be used to stop or observe the rerunning."],
  args: [
    {name: "runFunc",
     type: "Function",
     descr: "The function to run. It receives one argument: the Computation object that will be returned."}
  ]
};

Template.api.deps_flush = {
  id: "deps_flush",
  name: "Deps.flush()",
  locus: "Client",
  descr: ["Process all reactive updates immediately and ensure that all invalidated computations are rerun."]
};

Template.api.deps_nonreactive = {
  id: "deps_nonreactive",
  name: "Deps.nonreactive(func)",
  locus: "Client",
  descr: ["Run a function without tracking dependencies."],
  args: [
    {name: "func",
     type: "Function",
     descr: "A function to call immediately."}
  ]
};

Template.api.deps_active = {
  id: "deps_active",
  name: "Deps.active",
  locus: "Client",
  descr: ["True if there is a current computation, meaning that dependencies on reactive data sources will be tracked and potentially cause the current computation to be rerun."]
};

Template.api.deps_currentcomputation = {
  id: "deps_currentcomputation",
  name: "Deps.currentComputation",
  locus: "Client",
  descr: ["The current computation, or `null` if there isn't one.  The current computation is the [`Deps.Computation`](#deps_computation) object created by the innermost active call to `Deps.autorun`, and it's the computation that gains dependencies when reactive data sources are accessed."]
};

Template.api.deps_oninvalidate = {
  id: "deps_oninvalidate",
  name: "Deps.onInvalidate(callback)",
  locus: "Client",
  descr: ["Registers a new [`onInvalidate`](#computation_oninvalidate) callback on the current computation (which must exist), to be called immediately when the current computation is invalidated or stopped."],
  args: [
    {name: "callback",
     type: "Function",
     descr: "A callback function that will be invoked as `func(c)`, where `c` is the computation on which the callback is registered."}
  ]
};

Template.api.deps_afterflush = {
  id: "deps_afterflush",
  name: "Deps.afterFlush(callback)",
  locus: "Client",
  descr: ["Schedules a function to be called during the next flush, or later in the current flush if one is in progress, after all invalidated computations have been rerun.  The function will be run once and not on subsequent flushes unless `afterFlush` is called again."],
  args: [
    {name: "callback",
     type: "Function",
     descr: "A function to call at flush time."}
  ]
};

Template.api.computation_stop = {
  id: "computation_stop",
  name: "<em>computation</em>.stop()",
  locus: "Client",
  descr: ["Prevents this computation from rerunning."]
};

Template.api.computation_invalidate = {
  id: "computation_invalidate",
  name: "<em>computation</em>.invalidate()",
  locus: "Client",
  descr: ["Invalidates this computation so that it will be rerun."]
};

Template.api.computation_oninvalidate = {
  id: "computation_oninvalidate",
  name: "<em>computation</em>.onInvalidate(callback)",
  locus: "Client",
  descr: ["Registers `callback` to run when this computation is next invalidated, or runs it immediately if the computation is already invalidated.  The callback is run exactly once and not upon future invalidations unless `onInvalidate` is called again after the computation becomes valid again."],
  args: [
    {name: "callback",
     type: "Function",
     descr: "Function to be called on invalidation. Receives one argument, the computation that was invalidated."}
  ]
};

Template.api.computation_stopped = {
  id: "computation_stopped",
  name: "<em>computation</em>.stopped",
  locus: "Client",
  descr: ["True if this computation has been stopped."]
};

Template.api.computation_invalidated = {
  id: "computation_invalidated",
  name: "<em>computation</em>.invalidated",
  locus: "Client",
  descr: ["True if this computation has been invalidated (and not yet rerun), or if it has been stopped."]
};

Template.api.computation_firstrun = {
  id: "computation_firstrun",
  name: "<em>computation</em>.firstRun",
  locus: "Client",
  descr: ["True during the initial run of the computation at the time `Deps.autorun` is called, and false on subsequent reruns and at other times."]
};

Template.api.dependency_changed = {
  id: "dependency_changed",
  name: "<em>dependency</em>.changed()",
  locus: "Client",
  descr: ["Invalidate all dependent computations immediately and remove them as dependents."]
};

Template.api.dependency_depend = {
  id: "dependency_depend",
  name: "<em>dependency</em>.depend([fromComputation])",
  locus: "Client",
  descr: ["Declares that the current computation (or `fromComputation` if given) depends on `dependency`.  The computation will be invalidated the next time `dependency` changes.", "If there is no current computation and `depend()` is called with no arguments, it does nothing and returns false.", "Returns true if the computation is a new dependent of `dependency` rather than an existing one."],
  args: [
    {name: "fromComputation",
     type: "Deps.Computation",
     descr: "An optional computation declared to depend on `dependency` instead of the current computation."}
  ]
};

Template.api.dependency_hasdependents = {
  id: "dependency_hasdependents",
  name: "<em>dependency</em>.hasDependents()",
  locus: "Client",
  descr: ["True if this Dependency has one or more dependent Computations, which would be invalidated if this Dependency were to change."]
};

//////

// writeFence
// invalidationCrossbar

Template.api.render = {
  id: "meteor_render",
  name: "Meteor.render(htmlFunc)",
  locus: "Client",
  descr: ["Create DOM nodes that automatically update themselves as data changes."],
  args: [
    {name: "htmlFunc",
     type: "Function returning a string of HTML",
     descr: "Function that generates HTML to be rendered.  Called immediately and re-run whenever data changes.  May also be a string of HTML instead of a function."}
  ]
};

Template.api.renderList = {
  id: "meteor_renderlist",
  name: "Meteor.renderList(observable, docFunc, [elseFunc])",
  locus: "Client",
  descr: ["Create DOM nodes that automatically update themselves based on the results of a database query."],
  args: [
    {name: "observable",
     type: "Cursor",
     type_link: "meteor_collection_cursor",
     descr: "Query cursor to observe as a reactive source of ordered documents."},
    {name: "docFunc",
     type: "Function taking a document and returning HTML",
     descr: "Render function to be called for each document."},
    {name: "elseFunc",
     type: "Function returning HTML",
     descr: "Optional.  Render function to be called when query is empty."}
  ]
};


Template.api.eventmaps = {
  id: "eventmaps",
  name: "Event Maps"
};

Template.api.constant = {
  id: "constant",
  name: "Constant regions"
};

Template.api.isolate = {
  id: "isolate",
  name: "Reactivity isolation"
};



Template.api.user = {
  id: "meteor_user",
  name: "Meteor.user()",
  locus: "Anywhere but publish functions",
  descr: ["Get the current user record, or `null` if no user is logged in. A reactive data source."]
};

Template.api.currentUser = {
  id: "template_currentuser",
  name: "{{currentUser}}",
  locus: "Handlebars templates",
  descr: ["Calls [Meteor.user()](#meteor_user). Use `{{#if currentUser}}` to check whether the user is logged in."]
};

Template.api.userId = {
  id: "meteor_userid",
  name: "Meteor.userId()",
  locus: "Anywhere but publish functions",
  descr: ["Get the current user id, or `null` if no user is logged in. A reactive data source."]
};


Template.api.users = {
  id: "meteor_users",
  name: "Meteor.users",
  locus: "Anywhere",
  descr: ["A [Meteor.Collection](#collections) containing user documents."]
};

Template.api.loggingIn = {
  id: "meteor_loggingin",
  name: "Meteor.loggingIn()",
  locus: "Client",
  descr: ["True if a login method (such as `Meteor.loginWithPassword`, `Meteor.loginWithFacebook`, or `Accounts.createUser`) is currently in progress. A reactive data source."]
};

Template.api.loggingInTemplate = {
  id: "template_loggingin",
  name: "{{loggingIn}}",
  locus: "Handlebars templates",
  descr: ["Calls [Meteor.loggingIn()](#meteor_loggingin)."]
};



Template.api.logout = {
  id: "meteor_logout",
  name: "Meteor.logout([callback])",
  locus: "Client",
  descr: ["Log the user out."],
  args: [
    {
      name: "callback",
      type: "Function",
      descr: "Optional callback. Called with no arguments on success, or with a single `Error` argument on failure."
    }
  ]
};

Template.api.logoutOtherClients = {
  id: "meteor_logoutotherclients",
  name: "Meteor.logoutOtherClients([callback])",
  locus: "Client",
  descr: ["Log out other clients logged in as the current user, but does not log out the client that calls this function."],
  args: [
    {
      name: "callback",
      type: "Function",
      descr: "Optional callback. Called with no arguments on success, or with a single `Error` argument on failure."
    }
  ]
};


Template.api.loginWithPassword = {
  id: "meteor_loginwithpassword",
  name: "Meteor.loginWithPassword(user, password, [callback])",
  locus: "Client",
  descr: ["Log the user in with a password."],
  args: [
    {
      name: "user",
      type: "Object or String",
      descr: "Either a string interpreted as a username or an email; or an object with a single key: `email`, `username` or `id`."
    },
    {
      name: "password",
      type: "String",
      descr: "The user's password. This is __not__ sent in plain text over the wire &mdash; it is secured with [SRP](http://en.wikipedia.org/wiki/Secure_Remote_Password_protocol)."
    },
    {
      name: "callback",
      type: "Function",
      descr: "Optional callback. Called with no arguments on success, or with a single `Error` argument on failure."
    }
  ]
};


Template.api.loginWithExternalService = {
  id: "meteor_loginwithexternalservice",
  name: "Meteor.loginWith<i>ExternalService</i>([options], [callback])",
  locus: "Client",
  descr: ["Log the user in using an external service."],
  args: [
    {
      name: "callback",
      type: "Function",
      descr: "Optional callback. Called with no arguments on success, or with a single `Error` argument on failure."
    }
  ],
  options: [
    {
      name: "requestPermissions",
      type: "Array of Strings",
      descr: "A list of permissions to request from the user."
    },
    {
      name: "requestOfflineToken",
      type: "Boolean",
      descr: "If true, asks the user for permission to act on their behalf when offline. This stores an additional offline token in the `services` field of the user document. Currently only supported with Google."
    },
    {
      name: "forceApprovalPrompt",
      type: "Boolean",
      descr: "If true, forces the user to approve the app's permissions, even if previously approved. Currently only supported with Google."
    }
  ]
};



Template.api.accounts_config = {
  id: "accounts_config",
  name: "Accounts.config(options)",
  locus: "Anywhere",
  descr: ["Set global accounts options."],
  options: [
    {
      name: "sendVerificationEmail",
      type: "Boolean",
      descr: "New users with an email address will receive an address verification email."
    },
    {
      name: "forbidClientAccountCreation",
      type: "Boolean",
      descr: "Calls to [`createUser`](#accounts_createuser) from the client will be rejected. In addition, if you are using [accounts-ui](#accountsui), the \"Create account\" link will not be available."
    },
    {
      name: "restrictCreationByEmailDomain",
      type: "String or Function",
      descr: "If set to a string, only allows new users if the domain part of their email address matches the string. If set to a function, only allows new users if the function returns true.  The function is passed the full email address of the proposed new user.  Works with password-based sign-in and external services that expose email addresses (Google, Facebook, GitHub). All existing users still can log in after enabling this option. Example: `Accounts.config({ restrictCreationByEmailDomain: 'school.edu' })`."
    },
    {
      name: "loginExpirationInDays",
      type: "Number",
      descr: "The number of days from when a user logs in until their token expires and they are logged out. Defaults to 90. Set to `null` to disable login expiration."
    }
  ]
};

Template.api.accounts_ui_config = {
  id: "accounts_ui_config",
  name: "Accounts.ui.config(options)",
  locus: "Client",
  descr: ["Configure the behavior of [`{{loginButtons}}`](#accountsui)."],
  options: [
    {
      name: "requestPermissions",
      type: "Object",
      descr: "Which [permissions](#requestpermissions) to request from the user for each external service."
    },
    {
      name: "requestOfflineToken",
      type: "Object",
      descr: "To ask the user for permission to act on their behalf when offline, map the relevant external service to `true`. Currently only supported with Google. See [Meteor.loginWithExternalService](#meteor_loginwithexternalservice) for more details."
    },
    {
      name: "passwordSignupFields",
      type: "String",
      descr: "Which fields to display in the user creation form. One of '`USERNAME_AND_EMAIL`', '`USERNAME_AND_OPTIONAL_EMAIL`', '`USERNAME_ONLY`', or '`EMAIL_ONLY`' (default)."
    }
  ]
};

Template.api.accounts_validateNewUser = {
  id: "accounts_validatenewuser",
  name: "Accounts.validateNewUser(func)",
  locus: "Server",
  descr: ["Set restrictions on new user creation."],
  args: [
    {
      name: "func",
      type: "Function",
      descr: "Called whenever a new user is created. Takes the new user object, and returns true to allow the creation or false to abort."
    }
  ]
};

Template.api.accounts_onCreateUser = {
  id: "accounts_oncreateuser",
  name: "Accounts.onCreateUser(func)",
  locus: "Server",
  descr: ["Customize new user creation."],
  args: [
    {
      name: "func",
      type: "Function",
      descr: "Called whenever a new user is created. Return the new user object, or throw an `Error` to abort the creation."
    }
  ]
};



Template.api.accounts_createUser = {
  id: "accounts_createuser",
  name: "Accounts.createUser(options, [callback])",
  locus: "Anywhere",
  descr: ["Create a new user."],
  args: [
    {
      name: "callback",
      type: "Function",
      descr: "Client only, optional callback. Called with no arguments on success, or with a single `Error` argument on failure."
    }
  ],
  options: [
    {
      name: "username",
      type: "String",
      descr: "A unique name for this user."
    },
    {
      name: "email",
      type: "String",
      descr: "The user's email address."
    },
    {
      name: "password",
      type: "String",
      descr: "The user's password. This is __not__ sent in plain text over the wire."
    },
    {
      name: "profile",
      type: "Object",
      descr: "The user's profile, typically including the `name` field."
    }
  ]
};

Template.api.accounts_changePassword = {
  id: "accounts_changepassword",
  name: "Accounts.changePassword(oldPassword, newPassword, [callback])",
  locus: "Client",
  descr: ["Change the current user's password. Must be logged in."],
  args: [
    {
      name: "oldPassword",
      type: "String",
      descr: "The user's current password. This is __not__ sent in plain text over the wire."
    },
    {
      name: "newPassword",
      type: "String",
      descr: "A new password for the user. This is __not__ sent in plain text over the wire."
    },
    {
      name: "callback",
      type: "Function",
      descr: "Optional callback. Called with no arguments on success, or with a single `Error` argument on failure."
    }
  ]
};

Template.api.accounts_forgotPassword = {
  id: "accounts_forgotpassword",
  name: "Accounts.forgotPassword(options, [callback])",
  locus: "Client",
  descr: ["Request a forgot password email."],
  args: [
    {
      name: "callback",
      type: "Function",
      descr: "Optional callback. Called with no arguments on success, or with a single `Error` argument on failure."
    }
  ],
  options: [
    {
      name: "email",
      type: "String",
      descr: "The email address to send a password reset link."
    }
  ]
};

Template.api.accounts_resetPassword = {
  id: "accounts_resetpassword",
  name: "Accounts.resetPassword(token, newPassword, [callback])",
  locus: "Client",
  descr: ["Reset the password for a user using a token received in email. Logs the user in afterwards."],
  args: [
    {
      name: "token",
      type: "String",
      descr: "The token retrieved from the reset password URL."
    },
    {
      name: "newPassword",
      type: "String",
      descr: "A new password for the user. This is __not__ sent in plain text over the wire."
    },
    {
      name: "callback",
      type: "Function",
      descr: "Optional callback. Called with no arguments on success, or with a single `Error` argument on failure."
    }
  ],
};

Template.api.accounts_setPassword = {
  id: "accounts_setpassword",
  name: "Accounts.setPassword(userId, newPassword)",
  locus: "Server",
  descr: ["Forcibly change the password for a user."],
  args: [
    {
      name: "userId",
      type: "String",
      descr: "The id of the user to update."
    },
    {
      name: "newPassword",
      type: "String",
      descr: "A new password for the user."
    }
  ]
};

Template.api.accounts_verifyEmail = {
  id: "accounts_verifyemail",
  name: "Accounts.verifyEmail(token, [callback])",
  locus: "Client",
  descr: ["Marks the user's email address as verified. Logs the user in afterwards."],
  args: [
    {
      name: "token",
      type: "String",
      descr: "The token retrieved from the verification URL."
    },
    {
      name: "callback",
      type: "Function",
      descr: "Optional callback. Called with no arguments on success, or with a single `Error` argument on failure."
    }
  ]
};


Template.api.accounts_sendResetPasswordEmail = {
  id: "accounts_sendresetpasswordemail",
  name: "Accounts.sendResetPasswordEmail(userId, [email])",
  locus: "Server",
  descr: ["Send an email with a link the user can use to reset their password."],
  args: [
    {
      name: "userId",
      type: "String",
      descr: "The id of the user to send email to."
    },
    {
      name: "email",
      type: "String",
      descr: "Optional. Which address of the user's to send the email to. This address must be in the user's `emails` list. Defaults to the first email in the list."
    }
  ]
};

Template.api.accounts_sendEnrollmentEmail = {
  id: "accounts_sendenrollmentemail",
  name: "Accounts.sendEnrollmentEmail(userId, [email])",
  locus: "Server",
  descr: ["Send an email with a link the user can use to set their initial password."],
  args: [
    {
      name: "userId",
      type: "String",
      descr: "The id of the user to send email to."
    },
    {
      name: "email",
      type: "String",
      descr: "Optional. Which address of the user's to send the email to. This address must be in the user's `emails` list. Defaults to the first email in the list."
    }
  ]
};

Template.api.accounts_sendVerificationEmail = {
  id: "accounts_sendverificationemail",
  name: "Accounts.sendVerificationEmail(userId, [email])",
  locus: "Server",
  descr: ["Send an email with a link the user can use verify their email address."],
  args: [
    {
      name: "userId",
      type: "String",
      descr: "The id of the user to send email to."
    },
    {
      name: "email",
      type: "String",
      descr: "Optional. Which address of the user's to send the email to. This address must be in the user's `emails` list. Defaults to the first unverified email in the list."
    }
  ]
};



Template.api.accounts_emailTemplates = {
  id: "accounts_emailtemplates",
  name: "Accounts.emailTemplates",
  locus: "Anywhere",
  descr: ["Options to customize emails sent from the Accounts system."]
};



Template.api.check = {
  id: "check",
  name: "check(value, pattern)",
  locus: "Anywhere",
  descr: ["Checks that a value matches a [pattern](#matchpatterns). If the value does not match the pattern, throws a `Match.Error`."],
  args: [
    {
      name: "value",
      type: "Any",
      descr: "The value to check"
    },
    {
      name: "pattern",
      type: "Match pattern",
      descr: "The [pattern](#matchpatterns) to match `value` against"
    }
  ]
};

Template.api.match_test = {
  id: "match_test",
  name: "Match.test(value, pattern)",
  locus: "Anywhere",
  descr: ["Returns true if the value matches the [pattern](#matchpatterns)."],
  args: [
    {
      name: "value",
      type: "Any",
      descr: "The value to check"
    },
    {
      name: "pattern",
      type: "Match pattern",
      descr: "The [pattern](#matchpatterns) to match `value` against"
    }
  ]
};

Template.api.matchpatterns = {
  id: "matchpatterns",
  name: "Match patterns"
};

Template.api.setTimeout = {
  id: "meteor_settimeout",
  name: "Meteor.setTimeout(func, delay)",
  locus: "Anywhere",
  descr: ["Call a function in the future after waiting for a specified delay."],
  args: [
    {
      name: "func",
      type: "Function",
      descr: "The function to run"
    },
    {
      name: "delay",
      type: "Number",
      descr: "Number of milliseconds to wait before calling function"
    }
  ]
};

Template.api.setInterval = {
  id: "meteor_setinterval",
  name: "Meteor.setInterval(func, delay)",
  locus: "Anywhere",
  descr: ["Call a function repeatedly, with a time delay between calls."],
  args: [
    {
      name: "func",
      type: "Function",
      descr: "The function to run"
    },
    {
      name: "delay",
      type: "Number",
      descr: "Number of milliseconds to wait between each function call."
    }
  ]
};

Template.api.clearTimeout = {
  id: "meteor_cleartimeout",
  name: "Meteor.clearTimeout(id)",
  locus: "Anywhere",
  descr: ["Cancel a function call scheduled by `Meteor.setTimeout`."],
  args: [
    {
      name: "id",
      type: "Number",
      descr: "The handle returned by `Meteor.setTimeout`"
    }
  ]
};

Template.api.clearInterval = {
  id: "meteor_clearinterval",
  name: "Meteor.clearInterval(id)",
  locus: "Anywhere",
  descr: ["Cancel a repeating function call scheduled by `Meteor.setInterval`."],
  args: [
    {
      name: "id",
      type: "Number",
      descr: "The handle returned by `Meteor.setInterval`"
    }
  ]
};

Template.api.EnvironmentVariable = {
  id: "meteor_environmentvariable",
  name: "new Meteor.EnvironmentVariable()",
  locus: "Anywhere",
  descr: ["Construct a Meteor environment variable."]
};

Template.api.environmentVariable_get = {
  id: "env_var_get",
  name: "<i>env_var</i>.get()",
  locus: "Anywhere",
  descr: ["Return the current value of an EnvironmentVariable."]
};

Template.api.environmentVariable_withValue = {
  id: "env_var_withvalue",
  name: "<i>env_var</i>.withValue(value, func)",
  locus: "Anywhere",
  descr: ["Run `func` with the `env_var`'s value set to `value`."],
  args: [
    {name: "value",
     type: "Anything",
     descr: "Desired value of the environment variable."},
    {name: "func",
     type: "Function",
     descr: "Function to call"}
  ]
};

Template.api.bindEnvironment = {
  id: "env_var_bindenvironment",
  name: "<i>env_var</i>.bindEnvironment(func, onException, _this)",
  locus: "Anywhere",
  descr: ["Return a new function that calls `func` with `this` set to `_this`, and with environment variables set to their current values."],
  args: [
    {name: "func",
     type: "Function",
     descr: "Function to wrap"},
    {name: "onException",
     type: "Function",
     descr: "Function to call if `func` throws an exception.  It expects the thrown exception as its single argument."},
    {name: "_this",
     type: "Object",
     descr: "Value of `this` inside `func`."}
  ]
};

Template.api.set = {
  id: "session_set",
  name: "Session.set(key, value)",
  locus: "Client",
  descr: ["Set a variable in the session. Notify any listeners that the value has changed (eg: redraw templates, and rerun any [`Deps.autorun`](#deps_autorun) computations, that called [`Session.get`](#session_get) on this `key`.)"],
  args: [
    {name: "key",
     type: "String",
     descr: "The key to set, eg, `selectedItem`"},
    {name: "value",
     type: "EJSON-able object or undefined",
     descr: "The new value for `key`"}
  ]
};

Template.api.setDefault = {
  id: "session_set_default",
  name: "Session.setDefault(key, value)",
  locus: "Client",
  descr: ["Set a variable in the session if it is undefined. Otherwise works exactly the same as [`Session.set`](#session_set)."],
  args: [
    {name: "key",
     type: "String",
     descr: "The key to set, eg, `selectedItem`"},
    {name: "value",
     type: "EJSON-able object or undefined",
     descr: "The new value for `key`"}
  ]
};

Template.api.get = {
  id: "session_get",
  name: "Session.get(key)",
  locus: "Client",
  descr: ["Get the value of a session variable. If inside a [reactive computation](#reactivity), invalidate the computation the next time the value of the variable is changed by [`Session.set`](#session_set). This returns a clone of the session value, so if it's an object or an array, mutating the returned value has no effect on the value stored in the session."],
  args: [
    {name: "key",
     type: "String",
     descr: "The name of the session variable to return"}
  ]
};

Template.api.equals = {
  id: "session_equals",
  name: "Session.equals(key, value)",
  locus: "Client",
  descr: ["Test if a session variable is equal to a value. If inside a [reactive computation](#reactivity), invalidate the computation the next time the variable changes to or from the value."],
  args: [
    {name: "key",
     type: "String",
     descr: "The name of the session variable to test"},
    {name: "value",
     type: "String, Number, Boolean, null, or undefined",
     descr: "The value to test against"}
  ]
};

Template.api.httpcall = {
  id: "http_call",
  name: "HTTP.call(method, url [, options] [, asyncCallback])",
  locus: "Anywhere",
  descr: ["Perform an outbound HTTP request."],
  args: [
    {name: "method",
     type: "String",
     descr: 'The HTTP method to use: "`GET`", "`POST`", "`PUT`", or "`DELETE`".'},
    {name: "url",
     type: "String",
     descr: 'The URL to retrieve.'},
    {name: "asyncCallback",
     type: "Function",
     descr: "Optional callback.  If passed, the method runs asynchronously, instead of synchronously, and calls asyncCallback.  On the client, this callback is required."
    }
  ],
  options: [
    {name: "content",
     type: "String",
     descr: "String to use as the HTTP request body."
},
    {name: "data",
     type: "Object",
     descr: "JSON-able object to stringify and use as the HTTP request body. Overwrites `content`."},
    {name: "query",
     type: "String",
     descr: "Query string to go in the URL. Overwrites any query string in `url`."},
    {name: "params",
     type: "Object",
     descr: "Dictionary of request parameters to be encoded and placed in the URL (for GETs) or request body (for POSTs).  If `content` or `data` is specified, `params` will always be placed in the URL."
    },
    {name: "auth",
     type: "String",
     descr: 'HTTP basic authentication string of the form `"username:password"`'},
    {name: "headers",
     type: "Object",
     descr: "Dictionary of strings, headers to add to the HTTP request."},
    {name: "timeout",
     type: "Number",
     descr: "Maximum time in milliseconds to wait for the request before failing.  There is no timeout by default."},
    {name: "followRedirects",
     type: "Boolean",
     descr: "If true, transparently follow HTTP redirects.  Cannot be set to false on the client."}
  ]
};

Template.api.http_get = {
  id: "http_get",
  name: "HTTP.get(url, [options], [asyncCallback])",
  locus: "Anywhere",
  descr: ["Send an HTTP GET request.  Equivalent to `HTTP.call(\"GET\", ...)`."]
};

Template.api.http_post = {
  id: "http_post",
  name: "HTTP.post(url, [options], [asyncCallback])",
  locus: "Anywhere",
  descr: ["Send an HTTP POST request.  Equivalent to `HTTP.call(\"POST\", ...)`."]
};

Template.api.http_put = {
  id: "http_put",
  name: "HTTP.put(url, [options], [asyncCallback])",
  locus: "Anywhere",
  descr: ["Send an HTTP PUT request.  Equivalent to `HTTP.call(\"PUT\", ...)`."]
};

Template.api.http_del = {
  id: "http_del",
  name: "HTTP.del(url, [options], [asyncCallback])",
  locus: "Anywhere",
  descr: ["Send an HTTP DELETE request.  Equivalent to `HTTP.call(\"DELETE\", ...)`.  (Named `del` to avoid conflict with JavaScript's `delete`.)"]
};


// XXX move these up to right place
Template.api.template_call = {
  id: "template_call",
  name: "Template.<em>myTemplate</em>([data])",
  locus: "Client",
  descr: ["Call a template function by name to produce HTML."],
  args: [
    {name: "data",
     type: "Object",
     descr: 'Optional. The data context object with which to call the template.'}
  ]
};

Template.api.template_rendered = {
  id: "template_rendered",
  name: "Template.<em>myTemplate</em>.rendered = function ( ) { ... }",
  locus: "Client",
  descr: ["Provide a callback when an instance of a template is rendered."]
};

Template.api.template_created = {
  id: "template_created",
  name: "Template.<em>myTemplate</em>.created = function ( ) { ... }",
  locus: "Client",
  descr: ["Provide a callback when an instance of a template is created."]
};

Template.api.template_destroyed = {
  id: "template_destroyed",
  name: "Template.<em>myTemplate</em>.destroyed = function ( ) { ... }",
  locus: "Client",
  descr: ["Provide a callback when an instance of a template is destroyed."]
};

Template.api.template_events = {
  id: "template_events",
  name: "Template.<em>myTemplate</em>.events(eventMap)",
  locus: "Client",
  descr: ["Specify event handlers for this template."],
  args: [
    {name: "eventMap",
     type: "Event map",
     type_link: "eventmaps",
     descr: "Event handlers to associate with this template."}
  ]
};

Template.api.template_helpers = {
  id: "template_helpers",
  name: "Template.<em>myTemplate</em>.helpers(helpers)",
  locus: "Client",
  descr: ["Specify template helpers available to this template."],
  args: [
    {name: "helpers",
     type: "Object",
     descr: "Dictionary of helper functions by name."}
  ]
};

Template.api.template_preserve = {
  id: "template_preserve",
  name: "Template.<em>myTemplate</em>.preserve(selectors)",
  locus: "Client",
  descr: ["Specify rules for preserving individual DOM elements on re-render."],
  args: [
    {name: "selectors",
     type: "Array or Object",
     descr: "Array of CSS selectors that each match at most one element, such as `['.thing1', '.thing2']`, or, alternatively, a dictionary of selectors and node-labeling functions (see below)."}
  ]
};

Template.api.template_findAll = {
  id: "template_findAll",
  name: "<em>this</em>.findAll(selector)",
  locus: "Client",
  descr: ["Find all elements matching `selector` in this template instance."],
  args: [
    {name: "selector",
     type: "String",
     descr: 'The CSS selector to match, scoped to the template contents.'}
  ]
};

Template.api.template_find = {
  id: "template_find",
  name: "<em>this</em>.find(selector)",
  locus: "Client",
  descr: ["Find one element matching `selector` in this template instance."],
  args: [
    {name: "selector",
     type: "String",
     descr: 'The CSS selector to match, scoped to the template contents.'}
  ]
};

Template.api.template_firstNode = {
  id: "template_firstNode",
  name: "<em>this</em>.firstNode",
  locus: "Client",
  descr: ["The first top-level DOM node in this template instance."]
};

Template.api.template_lastNode = {
  id: "template_lastNode",
  name: "<em>this</em>.lastNode",
  locus: "Client",
  descr: ["The last top-level DOM node in this template instance."]
};

Template.api.template_data = {
  id: "template_data",
  name: "<em>this</em>.data",
  locus: "Client",
  descr: ["The data context of this instance's latest invocation."]
};

var rfc = function (descr) {
  return '[RFC5322](http://tools.ietf.org/html/rfc5322) ' + descr;
};

Template.api.email_send = {
  id: "email_send",
  name: "Email.send(options)",
  locus: "Server",
  descr: ["Send an email. Throws an `Error` on failure to contact mail " +
          "server or if mail server returns an error."],
  options: [
    {name: "from",
     type: "String",
     descr: rfc('"From:" address (required)')
    },
    {name: "to",
     type: "String or Array of strings",
     descr: rfc('"To:" address[es]')
    },
    {name: "cc",
     type: "String or Array of strings",
     descr: rfc('"Cc:" address[es]')
    },
    {name: "bcc",
     type: "String or Array of strings",
     descr: rfc('"Bcc:" address[es]')
    },
    {name: "replyTo",
     type: "String or Array of strings",
     descr: rfc('"Reply-To:" address[es]')
    },
    {name: "subject",
     type: "String",
     descr: rfc('"Subject:" line')
    },
    {name: "text",
     type: "String",
     descr: rfc('mail body (plain text)')
    },
    {name: "html",
     type: "String",
     descr: rfc('mail body (HTML)')
    },
    {name: "headers",
     type: "Object",
     descr: rfc('custom headers (dictionary)')
    }
  ]
};

Template.api.assets_getText = {
  id: "assets_getText",
  name: "Assets.getText(assetPath, [asyncCallback])",
  locus: "Server",
  descr: ["Retrieve the contents of the static server asset as a UTF8-encoded string."],
  args: [
    {name: "assetPath",
     type: "String",
     descr: "The path of the asset, relative to the application's " +
     "`private` subdirectory."
    },
    {name: "asyncCallback",
     type: "Function",
     descr: "Optional callback, which is called asynchronously with the error " +
     "or result after the function is complete. If not provided, the function " +
     "runs synchronously."
    }
  ]
};

Template.api.assets_getBinary = {
  id: "assets_getBinary",
  name: "Assets.getBinary(assetPath, [asyncCallback])",
  locus: "Server",
  descr: ["Retrieve the contents of the static server asset as an [EJSON Binary](#ejson_new_binary)."],
  args: [
    {name: "assetPath",
     type: "String",
     descr: "The path of the asset, relative to the application's " +
     "`private` subdirectory."
    },
    {name: "asyncCallback",
     type: "Function",
     descr: "Optional callback, which is called asynchronously with the error " +
     "or result after the function is complete. If not provided, the function " +
     "runs synchronously."
    }
  ]
};
