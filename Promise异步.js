//Promise对象
function helloworl (ready) {
	return new Promise(functin (resolve, reject) {
		if (ready) {
			resolve("hello World!");
		} else {
			reject('Good bye!')
		}
	});
}

helloWorld(true).then(function (message) {
	alert(message);
}, function (error) {
	alert(error);
});

//Promise.all可以接受参数为Promise的对象数组，当这个数组里面全部的Promise对象都变为resolve时，该方法才会返回。Promise.race是只要一个Promise对象的resolve改变就会返回该方法
{
	let p1 = new Promise(function (resolve) {
		setTimeout(function () {
			resolve("Hello");
		}, 3000);
	});
	let p2 = new Promise(function(resolve) {
		setTimeout(function () {
			resove('World');
		}, 1000);
	})
	Promise.all([p1, p2]).then(function(result){
		console.log(result);
	})
}
//上面的例子模仿了传输两个数据需要不同的时长，但是Promise里的数据会按照数组里面的顺序返回
//日常开发中经常遇到这样的需求，在不同的接口请求数据然后拼合成自己需要的数据，通常这些接口之间没有任何联系
//这时候，Promise.all()就派上用场了
