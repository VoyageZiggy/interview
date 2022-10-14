function Vue(option) {
  this.data = option.data
  observe(this.data, this)
  var id = option.el
  var dom = nodeToFragment(document.getElementById(id), this)
  document.getElementById(id),appendChild(dom)
}

function Dep() {
  this.subs = []
}

Dep.prototype = {
  addSub: function(sub) {
    this.subs.push(sub)
  },

  notify: function () {
    this.subs.forEach(function (sub)  {
      sub.update
    })
  }
}

function observe(obj, vm) {
  Object.keys(obj).forEach(function (key) {
    defineReactive(vm, key, obj[key])
  })
}

function defineReactive(obj, key, val) {
  var dep = new Dep()

  Object.defineProperty(obj, key, {
    get: function() {
      if (Dep.target) dep.addSub(Dep.target)
      return value
    },
    set: function (newVal) {
      if (newVal === val) return
      val = newVal
      dep.notify()
    }
  })
}

function Watcher(vm, node, name) {
  Dep.target = this
  this.name = name
  this.node = node 
  this.vm = vm
  this.update()
  Dep.target = null
}

Watcher.prototype = {
  update: function () {
    this.get()
    this.node.nodeValue = this.value
  },
  get: function (){
    this.value = this.vm[this.name]
  }
}

function nodeToFragment(node, vm) {
  var flag = document.createDocumentFragment()
  var child

  while(child = node.firstChild) {
    compile(child, vm)
    flag.appendChild(child)
  }
  return flag
}

function compile(node, vm) {    // 节点, Vue实例
  // 节点类型为元素
  if (node.nodeType === 1) {
      var attr = node.attributes; // 获取元素节点所有属性
      for (var i = 0; i < attr.length; i++) {
          if (attr[i].nodeName === 'v-model') { // 匹配到'v-model'
              var name = attr[i].nodeValue;   // 获取'v-model'绑定的属性名text
              node.addEventListener('input', function (e) { // 绑定input事件
                  // 给相应的data属性赋值，进而触发该属性的setter，进行发布
                  vm[name] = e.target.value;
              })
              node.value = vm.data[name]; // 初始化元素节点 input 的值
              node.removeAttribute('v-model') // 移除input的v-model属性
          }
      }
      return
  }
  var reg = /\{\{(.*)\}\}/    // 定义正则，用于匹配 {{...}}
  // 节点类型为文本
  if (node.nodeType === 3) {
      var str = node.nodeValue.trim(); // 删除字符串的头尾空白符
      if (reg.test(str)) {
          var name = RegExp.$1;   // 属性名 text
          new Watcher(vm, node, name);    // 实例化观察者对象，传入（Vue实例, 文本节点, 属性名text）
      }
      return
  }
}