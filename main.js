// 奥兰系统同学互评自动满分脚本

for (var i = 2; i <= 41; ++i) {
    for (var j = 1; j <= 6; ++j) {
      var o = document.getElementById('MyDataGrid__ctl' + i + '_cp' + j + '_2');
      console.log(o); // 调试时检查元素是否存在
      if (o) { // 直接检查元素是否存在
        o.value = (j === 6) ? 5 : 6;
      }
    }
  }
