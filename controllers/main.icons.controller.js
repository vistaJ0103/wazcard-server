const cloudinary = require("cloudinary").v2
const json = require("../utils/jsonresponse")
const MainIcons = require("../models").main_icons

exports.add = async (req, res) => {
  try {
    const image = await cloudinary.uploader.upload(req.body.image, {
      folder: "wazcard/main_icons",
      resource_type: "image",
    })
    await MainIcons.create({
      imageUrl: image.secure_url,
      imagePublicId: image.public_id,
    })
    json(res, 201, "Icon Added")
  } catch (error) {
    json(res, 500, error.message)
  }
}

exports.all = async (req, res) => {
  try {
    let data = await MainIcons.findAll()
    json(res, 200, null, data)
  } catch (error) {
    json(res, 500, error.message)
  }
}

exports.update = async (req, res) => {
  try {
    let check = await MainIcons.findByPk(req.body.id)

    if (check) {
      await cloudinary.uploader.destroy(check.imagePublicId)
      const image = await cloudinary.uploader.upload(req.body.image, {
        folder: "wazcard/main_icons",
        resource_type: "image",
      })
      await MainIcons.update(
        {
          imageUrl: image.secure_url,
          imagePublicId: image.public_id,
        },
        {
          where: { id: req.body.id },
        },
      )
      json(res, 200, "Updated successfully")
    } else {
      json(res, 404, "Icon not found")
    }
  } catch (error) {
    json(res, 500, error.message)
  }
}

exports.byId = async (req, res) => {
  try {
    let data = await MainIcons.findOne({ where: { id: req.params.id } })
    json(res, 200, null, data)
  } catch (error) {
    json(res, 500, error.message)
  }
}

exports.deleteIcon = async (req, res) => {
  try {
    const icon = await MainIcons.findByPk(req.params.id)
    if (!icon) return json(res, 404, "Icon not found")
    await cloudinary.uploader.destroy(icon.imagePublicId)
    await MainIcons.destroy({ where: { id: req.params.id } })

    json(res, 200, "Icon deleted")
  } catch (error) {
    json(res, 500, error.message)
  }
}
