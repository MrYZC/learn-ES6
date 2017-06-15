//正则
//在ES5中
{
	let regex = new RegExp('xyz',"i");
}
//在ES6中
//第二个修饰符覆盖第一个修饰符
{
	let regex = new RegExp(/xyz/ig,"i");
	console.log(regex3.flags);//flags获得正则当中的修饰符
}
//y修饰符
//g和y修饰符都是全局匹配
//g不强调位置，y必须在下一个匹配成功
{
	let s = 'bbb_bb_b';
	let a1 =/b+/g;
	let a2 = /b+/y;
	console.log('one',a1.exec(s),a2.exec(s));
	console.log('two',a1.exec(s),a2.exec(s));
	console.log(a1.sticky,a1.sticky);//检验是否开启y修饰符
}
//u修饰符
//处理Unicode字符
//字符串中有字符大于两个字节，需要使用u修饰符
{
	console.log('u-1',/^uD83D/.test('\uD83D\uDC2A'));
	console.log('u-1',/^uD83D/u.test('\uD83D\uDC2A'));//u修饰符会把4个字节当成一个字符
	console.log(/\u{61}/.test('a'));
	console.log(/\u{61}/u.test('a'));
	console.log('\u{20BB7}');//输出吉
}