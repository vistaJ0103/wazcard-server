const cloudinary = require("cloudinary").v2;
const json = require("../utils/jsonresponse");
const ImageModel = require("../models").images;

exports.update = async (req, res) => {
  try {
    let check = await ImageModel.findByPk(req.body.id);

    if (check) {
      if (check?.imagePublicId) {
        await cloudinary.uploader.destroy(check.imagePublicId);
      }
      const image = await cloudinary.uploader.upload(req.body.image, {
        folder: "wazcard/designs",
        resource_type: "image",
      });
      await ImageModel.update(
        {
          imageUrl: image.secure_url,
          imagePublicId: image.public_id,
        },
        {
          where: { id: req.body.id },
        },
      );
      json(res, 200, "Updated successfully");
    } else {
      json(res, 404, "Image not found");
    }
  } catch (error) {
    json(res, 500, error.message);
  }
};

exports.all = async (req, res) => {
  try {
    let data = await ImageModel.findAll();
    json(res, 200, null, data);
  } catch (error) {
    json(res, 500, error.message);
  }
};
