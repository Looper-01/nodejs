###
 # @Description: 日志拆分shell
 # @Author: Looper
 # @Date: 2020-06-13 22:17:58
 # @LastEditors: Looper
 # @LastEditTime: 2020-06-13 22:23:53
 # @FilePath: /nodejs/blog-1/src/utils/copy.sh
### 

#!/bin/sh
cd /Users/liuzhiyao837/workspace/nodejs/blog-1/logs
cp access.log $(date +%Y-%m-%d).access.log
echo "" > access.log