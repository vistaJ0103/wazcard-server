const hero = require("../models").heros;
const business = require("../models").businesses;
const working = require("../models").workings;
const json = require("../utils/jsonresponse");

exports.updateHero = async (req, res) => {
  try {
    let check = await hero.findByPk(1);

    if (check) {
      await hero.update(
        {
          title: req.body.title,
          description: req.body.description,
        },
        {
          where: { id: 1 },
        }
      );

      json(res, 200, "Updated successfully");
    } else {
      json(res, 404, "Hero not found");
    }
  } catch (error) {
    json(res, 500, error.message);
  }
};

exports.updateBusiness = async (req, res) => {
  try {
    let check = await business.findByPk(1);

    if (check) {
      await business.update(
        {
          title: req.body.title,
          description: req.body.description,
          s1_title: req.body.s1_title,
          s1_description: req.body.s1_description,
          s2_title: req.body.s2_title,
          s2_description: req.body.s2_description,
          s3_title: req.body.s3_title,
          s3_description: req.body.s3_description,
        },
        {
          where: { id: 1 },
        }
      );

      json(res, 200, "Updated successfully");
    } else {
      json(res, 404, "Business not found");
    }
  } catch (error) {
    json(res, 500, error.message);
  }
};

exports.updateWorking = async (req, res) => {
  try {
    let check = await working.findByPk(1);

    if (check) {
      await working.update(
        {
          s1_title: req.body.s1_title,
          s1_description: req.body.s1_description,
          s2_title: req.body.s2_title,
          s2_description: req.body.s2_description,
          s3_title: req.body.s3_title,
          s3_description: req.body.s3_description,
          s4_title: req.body.s4_title,
          s4_description: req.body.s4_description,
        },
        {
          where: { id: 1 },
        }
      );

      json(res, 200, "Updated successfully");
    } else {
      json(res, 404, "Working not found");
    }
  } catch (error) {
    json(res, 500, error.message);
  }
};

exports.getAll = async (req, res) => {
  try {
    let heroData = await hero.findByPk(1);
    let businessData = await business.findByPk(1);
    let workingData = await working.findByPk(1);

      json(res, 200, {
        hero: heroData,
        business: businessData,
        working: workingData,
      });
   
  } catch (error) {
    json(res, 500, error.message);
  }
};
