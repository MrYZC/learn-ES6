//解构赋值的作用
//变量交换
{
	let a = 2;
	let b = 1;
	[a,b] = [b,a];
	console.log(a,b);
}
//取函数的值
{
	function f(){
		return [1,2]
	}
	let a,b;
	console.log(a,b);
}
//选择性接收函数返回的某两个变量
{
	function f(){
		return [1,2,3,4,5]
	}
	let a,b,c;
	[a,,,b] = f();
	console.log(a,b);
}
//不确定函数返回的结果
{
	function f(){
		return [1,2,3,4,5]
	}
	let a,b,c;
	[a,...b] = f();
	console.log(a,b);
}
//对象的解构赋值
{
	let o = {p:42, q:true};
	let {p,q} = o;
	console.log(p,q);
}
{
	let {a=10,b =5}={a:3};
	console.log(a,b);
}
//json实现前后端通信
{
	let metaData={
		title: 'abc',
		test:[{
			title:'test',
			desc:'description'
		}]
	}
	let {title:esTitle,test:[{title:cnTitle}]}=metaData;
	console.log(esTitle,cnTitle)
}