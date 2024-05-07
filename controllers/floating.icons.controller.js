const cloudinary = require("cloudinary").v2;
const json = require("../utils/jsonresponse");
const sendToken = require("../utils/jwttoken");
const FloatingIcon = require("../models").floating_icons;
const Helpers = require("../helper/functions");

exports.add = async (req, res) => {
  try {
    const image = await cloudinary.uploader.upload(req.body.image, {
      folder: "wazcard/floating_icons",
      resource_type: "image",
    });
    await FloatingIcon.create({
      imageUrl: image.secure_url,
      imagePublicId: image.public_id,
    });
    json(res, 201, "Icon Added");
  } catch (error) {
    json(res, 500, error.message);
  }
};

exports.all = async (req, res) => {
  try {
    let data = await FloatingIcon.findAll();
    json(res, 200, null, data);
  } catch (error) {
    json(res, 500, error.message);
  }
};

exports.update = async (req, res) => {
  try {
    let check = await FloatingIcon.findByPk(req.body.id);

    if (check) {
      await cloudinary.uploader.destroy(check.imagePublicId);
      const image = await cloudinary.uploader.upload(req.body.image, {
        folder: "wazcard/floating_icons",
        resource_type: "image",
      });
      await FloatingIcon.update(
        {
          imageUrl: image.secure_url,
          imagePublicId: image.public_id,
        },
        {
          where: { id: req.body.id },
        }
      );
      json(res, 200, "Updated successfully");
    } else {
      json(res, 404, "Icon not found");
    }
  } catch (error) {
    json(res, 500, error.message);
  }
};

exports.byId = async (req, res) => {
  try {
    let data = await FloatingIcon.findOne({ where: { id: req.params.id } });
    json(res, 200, null, data);
  } catch (error) {
    json(res, 500, error.message);
  }
};

exports.deleteIcon = async (req, res) => {
  try {
    const icon = await FloatingIcon.findByPk(req.params.id);
    if (!icon) return json(res, 404, "Icon not found");
    await cloudinary.uploader.destroy(icon.imagePublicId);
    await FloatingIcon.destroy({ where: { id: req.params.id } });

    json(res, 200, "Icon deleted");
  } catch (error) {
    json(res, 500, error.message);
  }
};
