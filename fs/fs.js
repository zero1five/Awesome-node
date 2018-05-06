const fs = require('fs')

/**
 * fs.open(path, flags, [mode], callback)
 *  path： 要打开的文件路径
 *  flags： 打开文件的方式 读/写
 *  设置文件的模式： 读/写/执行
 *  callback： 回调
 *      err： 文件打开失败的错误保存在err里, 如果成功则为null
 *      fd： 被打开文件的标识
 */

/* fs异步打开 */
fs.open('1.txt', 'r', (err, fd) => {
    if (err) {
       console.log('文件打开失败') 
    } else {
        console.log(fd)
    }
})

fs.open('1.txt', 'r', (err, fd) => {
    if (err) {
       console.log('文件打开失败') 
    } else {
        console.log(fd)
    }
})

/* fs同步打开 */

let fd = fs.openSync('1.txt', 'r')

console.log(fd)

fs.open('1.txt', 'r', (err, fd) => {
    if (err) {
       console.log('文件打开失败') 
    } else {
        /**
         * 读取文件
         * fs.read(fd, buffer, offset, length, position, callback)
         * fd： 文件编号
         * buffer： buffer对象 文件读取完毕即填充到该buffer对象里
         * offset： 新的内容被添加到buffer中的起始位置
         * length： 添加到buffer内容中的长度
         * position： 读取的文件中的起始位置
         * callback： 回调函数
         *      err： 错误信息
         *      len： buffer对象的长度
         */
        let str = new Buffer('123456789000');
        fs.read(fd, str, 0, 12, null, (err, len) => {
            console.log(str.toString())
            console.log(len)
        })
    }
})