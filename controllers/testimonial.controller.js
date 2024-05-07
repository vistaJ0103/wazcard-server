const cloudinary = require("cloudinary").v2;
const json = require("../utils/jsonresponse");
const sendToken = require("../utils/jwttoken");
const FloatingIcon = require("../models").floating_icons;
const Helpers = require("../helper/functions");
const Testimonial = require("../models").testimonials;

exports.create = async (req, res) => {
  try {
    const { name, company, description } = req.body;
    console.log(req.body);
    const newTestimonial = await Testimonial.create({
      name,
      company,
      description,
    });
    json(res, 200, newTestimonial);
  } catch (error) {
    json(res, 500, error.message);
  }
};

exports.update = async (req, res) => {
  try {
    const { name, company, description } = req.body;
    const { id } = req.params;
    const updatedTestimonial = await Testimonial.update(
      {
        name,
        company,
        description,
      },
      { where: { id } }
    );
    json(res, 200, updatedTestimonial);
  } catch (error) {
    json(res, 500, error.message);
  }
};

exports.deleteTestimonial = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTestimonial = await Testimonial.destroy({ where: { id } });
    json(res, 200, deletedTestimonial);
  } catch (error) {
    json(res, 500, error.message);
  }
};

exports.getOne = async (req, res) => {
  try {
    const { id } = req.params;
    const testimonial = await Testimonial.findOne({ where: { id } });
    json(res, 200, testimonial);
  } catch (error) {
    json(res, 500, error.message);
  }
};

exports.getAll = async (req, res) => {
  try {
    const testimonials = await Testimonial.findAll();
    json(res, 200, testimonials);
  } catch (error) {
    json(res, 500, error.message);
  }
};
