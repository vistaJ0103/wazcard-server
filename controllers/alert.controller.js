const cloudinary = require("cloudinary").v2;
const json = require("../utils/jsonresponse");
const AlertsModel = require("../models").alerts;

exports.add = async (req, res) => {
  try {
    const image = await cloudinary.uploader.upload(req.body.image, {
      folder: "wazcard/alerts",
      resource_type: "image",
    });
    console.log("dddd", req.body.user_id);
    for (const userId of req.body.user_id) {
      for (const date of req.body.date_list) {
        await AlertsModel.create({
          user_id: userId,
          imageUrl: image.secure_url,
          imagePublicId: image.public_id,
          description: req.body.description,
          url: req.body.url,
          date: date,
          count: req.body.count,
        });
      }
    }
    json(res, 201, "Alert Added");
  } catch (error) {
    json(res, 500, error.message);
  }
};

exports.all = async (req, res) => {
  try {
    let data = await AlertsModel.findAll();
    json(res, 200, null, data);
  } catch (error) {
    json(res, 500, error.message);
  }
};

exports.update = async (req, res) => {
  try {
    let check = await AlertsModel.findByPk(req.body.id);

    if (check) {
      await cloudinary.uploader.destroy(check.imagePublicId);
      const image = await cloudinary.uploader.upload(req.body.image, {
        folder: "wazcard/designs",
        resource_type: "image",
      });
      await AlertsModel.update(
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
      json(res, 404, "Alert not found");
    }
  } catch (error) {
    json(res, 500, error.message);
  }
};

exports.dataUpdate = async (req, res) => {
  try {
    let check = await AlertsModel.findByPk(req.body.id);
    console.log("body", req.body.data);
    console.log("check", check);
    if (check) {
      await AlertsModel.update(
        {
          user_id: req.body.data.user_id,
          description: req.body.data.description,
          url: req.body.data.url,
          date: req.body.data.date,
          count: req.body.data.count,
        },
        {
          where: { id: req.body.id },
        }
      );
      json(res, 200, "Updated successfully");
    } else {
      json(res, 404, "Alert not found");
    }
  } catch (error) {
    json(res, 500, error.message);
  }
};
exports.countUpdate = async (req, res) => {
  try {
    let check = await AlertsModel.findByPk(req.body.id);
    if (check) {
      await AlertsModel.update(
        {
          count: req.body.counts,
        },
        {
          where: { id: req.body.id },
        }
      );
      json(res, 200, "Updated successfully");
    } else {
      json(res, 404, "Alert not found");
    }
  } catch (error) {
    json(res, 500, error.message);
  }
};

exports.byId = async (req, res) => {
  try {
    console.log("id", req.params.id);
    let data = await AlertsModel.findOne({ where: { id: req.params.id } });
    console.log(data);
    json(res, 200, null, data);
  } catch (error) {
    json(res, 500, error.message);
  }
};
exports.byUId = async (req, res) => {
  try {
    console.log("id", req.params.id);
    let data = await AlertsModel.findAll({ where: { user_id: req.params.id } });
    console.log(data);
    json(res, 200, null, data);
  } catch (error) {
    json(res, 500, error.message);
  }
};

exports.deleteIcon = async (req, res) => {
  try {
    const icon = await AlertsModel.findByPk(req.params.id);
    if (!icon) return json(res, 404, "Alert not found");
    await cloudinary.uploader.destroy(icon.imagePublicId);
    await AlertsModel.destroy({ where: { id: req.params.id } });

    json(res, 200, "Alert deleted");
  } catch (error) {
    json(res, 500, error.message);
  }
};
