const fs = require("fs");

const FileText = {
  /**
   *TODO同步读文件，返回文件内容
   *
   * @param {*} path 文件路径
   * @param {Boolean} toJson 布尔值
   * @returns toJson为ture返回json对象,false返回String
   */
  readFile(path, toJson) {
    try {
      let content = fs.readFileSync(path, "utf8");
      return toJson ? JSON.parse(content) : content;
    } catch (error) {
      console.log(`error!!! read file ${path}`);
      return null;
    }
  },

  /**
   *TODO读文件每一行
   *
   * @param {*} path 文件路径
   * @param {*} func 每一行的回调函数
   */
  readLines(path, func) {
    let remaining = "";
    let input = fs.createReadStream(path);
    input.on("data", function(data) {
      remaining += data;
      let index = remaining.indexOf("\n");
      let last = 0;
      while (index > -1) {
        let line = remaining.substring(last, index);
        last = index + 1;
        func(line);
        index = remaining.indexOf("\n", last);
      }

      remaining = remaining.substring(last);
    });

    input.on("end", function() {
      if (remaining.length > 0) {
        func(remaining);
      }
    });
  }
  
};
module.exports = FileText;
