# 问题记录

## node

### mac nvm安装
问题：安装nvm之前未卸载node，导致每次都使用常规环境node版本的问题
史上卸载node最强宝典 - 普通程序员的文章 - 知乎
https://zhuanlan.zhihu.com/p/89158928

### 删除yarn
如果npm uninstall -g yarn之后，yarn还是可用，可以尝试手动删除(Mac OSX)

rm -rf /usr/local/lib/node_modules/yarn

rm -rf /usr/local/bin/yarn yarnpkg
