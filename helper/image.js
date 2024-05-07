const fs = require("fs")

const saveImages = (req, type) => {
  let date = Date.now()
  let file = req.files.image
  let fileName = `${date}${file.name.slice(file.name.indexOf("."))}`
  const newpath = `public/upload/${type}/${fileName}`

  file.mv(newpath, (err) => {
    if (err) {
      console.log(err)
    }
  })
  return `${req.protocol}://${req.get("host")}/upload/${type}/${fileName}`
}

const delImages = (fileName, type) => {
  fileName = fileName.slice(fileName.lastIndexOf("/") + 1)
  if (
    fileName === "default_logo.png" ||
    fileName === "default_cover.png" ||
    fileName === "default_fIcon.png"
  )
    return

  let path = `public/upload/${type}/${fileName}`
  fs.unlink(path, function (err) {
    if (err) {
      // throw err;
    }
  })
}

module.exports.saveImages = saveImages
module.exports.delImages = delImages
