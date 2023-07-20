// create web server
// handle http request
// read and write file
// handle ajax request
// handle router

// 1. create web server
// 2. handle http request
// 3. read and write file
// 4. handle ajax request
// 5. handle router

var http = require('http')
var fs = require('fs')
var url = require('url')
var template = require('art-template')

var comments = [
	{
		name: '张三',
		message: '今天天气不错',
		dateTime: '2018-10-16'
	},
	{
		name: '张三',
		message: '今天天气不错',
		dateTime: '2018-10-16'
	},
	{
		name: '张三',
		message: '今天天气不错',
		dateTime: '2018-10-16'
	},
	{
		name: '张三',
		message: '今天天气不错',
		dateTime: '2018-10-16'
	},
	{
		name: '张三',
		message: '今天天气不错',
		dateTime: '2018-10-16'
	}
]

http
	.createServer(function(req, res) {
		// 2. handle http request
		// 使用 url.parse 方法将路径解析为一个方便操作的对象，第二个参数为 true 表示直接将查询字符串转为一个对象（通过 query 属性来访问）
		var parseObj = url.parse(req.url, true)
		// 单独获取不包含查询字符串的路径部分（该路径不包含 ? 之后的内容）
		var pathname = parseObj.pathname
		// 3. read and write file
		if (pathname === '/') {
			fs.readFile('./views/index.html', function(err, data) {
				if (err) {
					return res.end('404 Not Found.')
				}
				var htmlStr = template.render(data.toString(), {
					comments: comments
				})
				res.end(htmlStr)
			})
		} else if (pathname === '/post') {
			fs.readFile('./views/post.html', function(err, data) {
				if (err) {