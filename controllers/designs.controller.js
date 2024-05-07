const cloudinary = require("cloudinary").v2;
const json = require("../utils/jsonresponse");
const DesignsModal = require("../models").designs;

exports.add = async (req, res) => {
  try {
    const image = await cloudinary.uploader.upload(req.body.image, {
      folder: "wazcard/designs",
      resource_type: "image",
    });
    await DesignsModal.create({
      imageUrl: image.secure_url,
      imagePublicId: image.public_id,
    });
    json(res, 201, "Design Added");
  } catch (error) {
    json(res, 500, error.message);
  }
};

exports.all = async (req, res) => {
  try {
    let data = await DesignsModal.findAll();
    json(res, 200, null, data);
  } catch (error) {
    json(res, 500, error.message);
  }
};

exports.update = async (req, res) => {
  try {
    let check = await DesignsModal.findByPk(req.body.id);

    if (check) {
      await cloudinary.uploader.destroy(check.imagePublicId);
      const image = await cloudinary.uploader.upload(req.body.image, {
        folder: "wazcard/designs",
        resource_type: "image",
      });
      await DesignsModal.update(
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
      json(res, 404, "Design not found");
    }
  } catch (error) {
    json(res, 500, error.message);
  }
};

exports.byId = async (req, res) => {
  try {
    let data = await DesignsModal.findOne({ where: { id: req.params.id } });
    json(res, 200, null, data);
  } catch (error) {
    json(res, 500, error.message);
  }
};

exports.deleteIcon = async (req, res) => {
  try {
    const icon = await DesignsModal.findByPk(req.params.id);
    if (!icon) return json(res, 404, "Design not found");
    await cloudinary.uploader.destroy(icon.imagePublicId);
    await DesignsModal.destroy({ where: { id: req.params.id } });

    json(res, 200, "Design deleted");
  } catch (error) {
    json(res, 500, error.message);
  }
};
