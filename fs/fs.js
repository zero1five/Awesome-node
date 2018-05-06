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