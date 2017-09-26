{
	let person = {
		name: '张三'
	};
	var proxy = new Proxy(person, {
		get: function(target, property) {
			if(property in target) {
				return target[property]
			} else {
				throw new ReferenceError('property: '+ property +'does not exit.')
			}
		}
	});
	proxy.name //"张三"
	proxy.age //"抛出一个错误"
}
//get方法可以继承
{
	let proto = new Proxy({}, {
		get(target, propertyKey, receiver) {
			console.log(target[propertyKey]);
			return target[propertyKey]
		}
	});
	let obj = Object.create(proto);
	obj.xxx //"GET xxx"
}
//利用Proxy,可以将读取属性的操作get,转化为执行某个函数,从而实现属性的链式操作。
{
	function createArray(...elements) {
		let handler = {
			get(target, propKey, receiver) {
				let index = Number(propkey);
				if(index<0) {
					propKey = String(target.length + index);
				}
				return Reflect.get(target, propKey, receiver)
			}
		};
		let target = [];
		target.push(...elements);
		return new Proxy(target, handler);
	}
	let arr = createArray('a', 'b', 'c');
	arr[-1] //c
}

//结合get和set方法，防止内部属性被外部读到
{
	var handler = {
		get(target, key) {
			invariant(key, 'get');
			return target[key];
		}
		set(target, key, value) {
			invariant(key, 'set');
			return true;
		}
	};
	function invariant () {
		if(key[0] === "_") {
			throw new Error(`Invalid attempt to ${action} private "${key}" property`);
		}
	}
	var target = {};
	var proxy = new Proxy(target, handler);
}