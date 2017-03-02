function stringReplace (dirPath, fileTypeReg, version,  replaceString) {
  var fs = require("fs");
  var files = fs.readdirSync(dirPath);

  files.forEach(
      function (fileName) {
          var filePath = dirPath + "/" + fileName;
          console.log(fileName);
          var stats = fs.statSync(filePath);
          if (stats.isFile()) {
              //console.log("%s is file", file);
              var data = fs.readFileSync(filePath, 'utf8');
              var result = data.replace(fileTypeReg, replaceString);
              fs.writeFileSync(filePath, result);
          } else if (stats.isDirectory()) {
              console.log(filePath);
              stringReplace(filePath, fileTypeReg, version,  replaceString)
          }
      }
  );
}
var dirPath = "your_dir_path";//like /var/www/html/static/images

var fileTypeReg = /png/gi;
var version = 'v=1.3.101';
var replaceString = 'png?' + version;
stringReplace(dirPath, fileTypeReg, version,  replaceString);
