const { Op } = require("sequelize");
const Language = require("../models").languages;
const Helpers = require("../helper/functions");
const json = require("../utils/jsonresponse");

const { DataTypes } = require("sequelize");
const { sequelize } = require("../models");
const queryInterface = sequelize.getQueryInterface();

exports.add = async (req, res) => {
  try {
    const check = await Language.findOne({
      where: {
        [Op.or]: [
          { lang_name: req.body.lang_name },
          { lang_code: req.body.lang_code },
        ],
      },
    });

    if (check) {
      json(res, 409, "Use Unique Name or Code");
    } else {
      await Language.create({
        lang_name: req.body.lang_name,
        lang_code: req.body.lang_code?.toLowerCase(),
        rtl: req.body.rtl,
      });
      json(res, 201, "Registered successfully");
    }
  } catch (error) {
    json(res, 500, error.message);
  }
};

exports.all = async (req, res) => {
  try {
    let data = await Language.findAll();
    json(res, 200, null, data);
  } catch (error) {
    json(res, 500, error.message);
  }
};

exports.toggleRtl = async (req, res) => {
  try {
    let languageData = await Helpers.findLanguageById(req.body.id);
    if (!languageData) return json(res, 404, "Invalid language");

    await Language.update(
      {
        rtl: !languageData.rtl,
      },
      {
        where: { id: req.body.id },
      },
    );
    json(res, 200, "Language Updated");
  } catch (error) {
    json(res, 500, error.message);
  }
};

exports.updateContent = async (req, res) => {
  try {
    let lang = await Language.findByPk(req.body.id);

    if (lang) {
      await Language.update(
        {
          myDigitalCard: req.body.myDigitalCard,
          pleaseCreateNewBusinessCard: req.body.pleaseCreateNewBusinessCard,
          createCard: req.body.createCard,
          createNewCard: req.body.createNewCard,
          cardDesign: req.body.cardDesign,
          businessLogo: req.body.businessLogo,
          coverPhoto: req.body.coverPhoto,
          backgroundImage: req.body.backgroundImage,
          sortAt: req.body.sortAt,
          businessName: req.body.businessName,
          title: req.body.title,
          slogan: req.body.slogan,
          color: req.body.color,
          coverColor: req.body.coverColor,
          backgroundColor: req.body.backgroundColor,
          mainIcons: req.body.mainIcons,
          addIcons: req.body.addIcons,
          iconUsedFor: req.body.iconUsedFor,
          whatsappNumber: req.body.whatsappNumber,
          smsNumber: req.body.smsNumber,
          phoneNumber: req.body.phoneNumber,
          mailAddress: req.body.mailAddress,
          linkAddress: req.body.linkAddress,
          openingHours: req.body.openingHours,
          monday: req.body.monday,
          tuesday: req.body.tuesday,
          wednesday: req.body.wednesday,
          thursday: req.body.thursday,
          friday: req.body.friday,
          saturday: req.body.saturday,
          sunday: req.body.sunday,
          gallery: req.body.gallery,
          addPicture: req.body.addPicture,
          upload: req.body.upload,
          reviews: req.body.reviews,
          addReviews: req.body.addReviews,
          editReviews: req.body.editReviews,
          rateYourExperienceWith: req.body.rateYourExperienceWith,
          name: req.body.name,
          yourExperience: req.body.yourExperience,
          select: req.body.select,
          likeButton: req.body.likeButton,
          floatingButton: req.body.floatingButton,
          accSettings: req.body.accSettings,
          updateProfile: req.body.updateProfile,
          floatingNumber: req.body.floatingNumber,
          logo: req.body.logo,
          editIcon: req.body.editIcon,
          generalSettings: req.body.generalSettings,
          preview: req.body.preview,
          addContact: req.body.addContact,
          emailAddress: req.body.emailAddress,
          password: req.body.password,
          newPassword: req.body.newPassword,
          currentPassword: req.body.currentPassword,
          confirmPassword: req.body.confirmPassword,
          changePassword: req.body.changePassword,
          share: req.body.share,
          sr: req.body.sr,
          url: req.body.url,
          status: req.body.status,
          action: req.body.action,
          approved: req.body.approved,
          rating: req.body.rating,
          logout: req.body.logout,
          login: req.body.login,
          forgetPassword: req.body.forgetPassword,
          forget: req.body.forget,
          dontHaveAccount: req.body.dontHaveAccount,
          signup: req.body.signup,
          reset: req.body.reset,
          alreadyHaveAccount: req.body.alreadyHaveAccount,
          resetPassword: req.body.resetPassword,
          resetCode: req.body.resetCode,
          language: req.body.language,
          qrCode: req.body.qrCode,
          openCameraScanCode: req.body.openCameraScanCode,
          aboutUs: req.body.aboutUs,
          packages: req.body.packages,
          howItWorks: req.body.howItWorks,
          getAQuote: req.body.getAQuote,
          howItWorks: req.body.howItWorks,
          ourCaptivatingTemplateCollection:
            req.body.ourCaptivatingTemplateCollection,
          customerTestimonials: req.body.customerTestimonials,
          basic: req.body.basic,
          standard: req.body.standard,
          premium: req.body.premium,
          greatForStarters: req.body.greatForStarters,
          forPlannedProjects: req.body.forPlannedProjects,
          customizableDesignOptions: req.body.customizableDesignOptions,
          pricingPlans: req.body.pricingPlans,
          socialMediaIntegration: req.body.socialMediaIntegration,
          mobileFriendlyLayouts: req.body.mobileFriendlyLayouts,
          easySharingCapabilities: req.body.easySharingCapabilities,
          analyticsForTrackingGrowth: req.body.analyticsForTrackingGrowth,
          getNow: req.body.getNow,
          heroTitle: req.body.heroTitle,
          heroDescription: req.body.heroDescription,
          workingStep1Title: req.body.workingStep1Title,
          workingStep1Description: req.body.workingStep1Description,
          workingStep2Title: req.body.workingStep2Title,
          workingStep2Description: req.body.workingStep2Description,
          workingStep3Title: req.body.workingStep3Title,
          workingStep3Description: req.body.workingStep3Description,
          workingStep4Title: req.body.workingStep4Title,
          workingStep4Description: req.body.workingStep4Description,
          bussinessTitle: req.body.bussinessTitle,
          bussinessDescription: req.body.bussinessDescription,
          business1Label: req.body.business1Label,
          business1Description: req.body.business1Description,
          business2Label: req.body.business2Label,
          business2Description: req.body.business2Description,
          business3Label: req.body.business3Label,
          business3Description: req.body.business3Description,
          needTheSameThing: req.body.needTheSameThing,
          clickToGet: req.body.clickToGet,
          footerText: req.body.footerText,
          copyRight: req.body.copyRight,
          allRightsReserved: req.body.allRightsReserved,
          termAndServices: req.body.termAndServices,
          privacyPolicy: req.body.privacyPolicy,
          cookiePolicy: req.body.cookiePolicy,
          contactUs: req.body.contactUs,
          email: req.body.email,
          phone: req.body.phone,
          paymentType1Desc: req.body.paymentType1Desc,
          paymentType1Name: req.body.paymentType1Name,
          paymentType1Price: req.body.paymentType1Price,
          paymentType2Desc: req.body.paymentType2Desc,
          paymentType2Name: req.body.paymentType2Name,
          paymentType2Price: req.body.paymentType2Price,
          paymentType3Desc: req.body.paymentType3Desc,
          paymentType3Name: req.body.paymentType3Name,
          paymentType3Price: req.body.paymentType3Price,
          paymentLink1: req.body.paymentLink1,
          paymentLink2: req.body.paymentLink2,
          paymentLink3: req.body.paymentLink3,
          paymentLink4: req.body.paymentLink4,
          paymentLink5: req.body.paymentLink5,
          legal: req.body.legal,
          links: req.body.links,
        },
        {
          where: { id: req.body.id },
        },
      );
      json(res, 200, "Updated successfully");
    } else {
      json(res, 404, "Language not found");
    }
  } catch (error) {
    json(res, 500, error.message);
  }
};

exports.updateNameCode = async (req, res) => {
  try {
    let lang = await Language.findByPk(req.body.id);

    if (lang) {
      await Language.update(
        {
          lang_name: req.body.lang_name,
          lang_code: req.body.lang_code,
        },
        {
          where: { id: req.body.id },
        },
      );
      json(res, 200, "Updated successfully");
    } else {
      json(res, 404, "Language not found");
    }
  } catch (error) {
    json(res, 500, error.message);
  }
};

exports.byId = async (req, res) => {
  try {
    let data = await Language.findOne({ where: { id: req.params.id } });
    json(res, 200, null, data);
  } catch (error) {
    json(res, 500, error.message);
  }
};

exports.byCode = async (req, res) => {
  try {
    let data = await Language.findOne({
      where: { lang_code: req.params.code },
    });
    json(res, 200, null, data);
  } catch (error) {
    json(res, 500, error.message);
  }
};

exports.deleteLanguage = async (req, res) => {
  try {
    const language = await Helpers.findLanguageById(req.params.id);
    if (!language) return json(res, 404, "Language not found");
    await Language.destroy({ where: { id: req.params.id } });
    json(res, 200, "Language deleted");
  } catch (error) {
    json(res, 500, error.message);
  }
};

exports.addColumn = async (req, res) => {
  try {
    const { column, value = "" } = req.body;

    if (!column) return json(res, 400, "Column name is required");

    await queryInterface.addColumn("languages", column, {
      type: DataTypes.STRING,
      defaultValue: value,
    });

    json(res, 200, "Column added");
  } catch (error) {
    json(res, 500, error.message);
  }
};

exports.removeColumn = async (req, res) => {
  try {
    const { column } = req.body;

    if (!column) return json(res, 400, "Column name is required");

    await queryInterface.removeColumn("languages", column);

    json(res, 200, "Column removed");
  } catch (error) {
    json(res, 500, error.message);
  }
};

exports.updateAll = async (req, res) => {
  try {
    let lang = await Language.findByPk(req.body.id);
    if (lang) {
      await Language.update(
        {
          ...req.body,
        },
        {
          where: { id: req.body.id },
        },
      );
      json(res, 200, "Updated successfully");
    } else {
      json(res, 404, "Language not found");
    }
  } catch (error) {
    json(res, 500, error.message);
  }
};

exports.allByQuery = async (req, res) => {
  // use sqeluize.query
  try {
    let data = await sequelize.query(`SELECT * FROM languages`, {
      type: sequelize.QueryTypes.SELECT,
    });
    json(res, 200, null, data);
  } catch (error) {
    json(res, 500, error.message);
  }
};
