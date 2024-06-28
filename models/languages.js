"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class languages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      languages.hasOne(models.cards, { foreignKey: "id" });
    }
  }
  languages.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      lang_code: {
        type: DataTypes.TEXT,
      },
      lang_name: {
        type: DataTypes.TEXT,
      },
      rtl: {
        type: DataTypes.BOOLEAN,
      },
      myDigitalCard: {
        type: DataTypes.TEXT,
        defaultValue: "My Digital Cards",
      },
      pleaseCreateNewBusinessCard: {
        type: DataTypes.TEXT,
        defaultValue: "Please create new business card",
      },
      createCard: {
        type: DataTypes.TEXT,
        defaultValue: "Create Card",
      },
      createNewCard: {
        type: DataTypes.TEXT,
        defaultValue: "Create New Card",
      },
      cardDesign: {
        type: DataTypes.TEXT,
        defaultValue: "Card Design",
      },
      businessLogo: {
        type: DataTypes.TEXT,
        defaultValue: "Business Logo",
      },
      coverPhoto: {
        type: DataTypes.TEXT,
        defaultValue: "Cover Photo",
      },
      backgroundImage: {
        type: DataTypes.TEXT,
        defaultValue: "Background Image",
      },
      sortAt: {
        type: DataTypes.TEXT,
        defaultValue: "Sort at",
      },
      businessName: {
        type: DataTypes.TEXT,
        defaultValue: "Business Name",
      },
      title: {
        type: DataTypes.TEXT,
        defaultValue: "Title",
      },
      slogan: {
        type: DataTypes.TEXT,
        defaultValue: "Slogan",
      },
      color: {
        type: DataTypes.TEXT,
        defaultValue: "Color",
      },
      coverColor: {
        type: DataTypes.TEXT,
        defaultValue: "Cover Color",
      },
      backgroundColor: {
        type: DataTypes.TEXT,
        defaultValue: "Background Color",
      },
      mainIcons: {
        type: DataTypes.TEXT,
        defaultValue: "Main Icons",
      },
      addIcons: {
        type: DataTypes.TEXT,
        defaultValue: "Add Icons",
      },
      iconUsedFor: {
        type: DataTypes.TEXT,
        defaultValue: "Icon used for?",
      },
      openingHours: {
        type: DataTypes.TEXT,
        defaultValue: "Opening Hours",
      },
      monday: {
        type: DataTypes.TEXT,
        defaultValue: "Monday",
      },
      tuesday: {
        type: DataTypes.TEXT,
        defaultValue: "Tuesday",
      },
      wednesday: {
        type: DataTypes.TEXT,
        defaultValue: "Wednesday",
      },
      thursday: {
        type: DataTypes.TEXT,
        defaultValue: "Thursday",
      },
      friday: {
        type: DataTypes.TEXT,
        defaultValue: "Friday",
      },
      saturday: {
        type: DataTypes.TEXT,
        defaultValue: "Saturday",
      },
      sunday: {
        type: DataTypes.TEXT,
        defaultValue: "Sunday",
      },
      gallery: {
        type: DataTypes.TEXT,
        defaultValue: "Gallery",
      },
      addPicture: {
        type: DataTypes.TEXT,
        defaultValue: "Add Picture",
      },
      upload: {
        type: DataTypes.TEXT,
        defaultValue: "Upload",
      },
      reviews: {
        type: DataTypes.TEXT,
        defaultValue: "Reviews",
      },
      addReviews: {
        type: DataTypes.TEXT,
        defaultValue: "Add Review",
      },
      editReviews: {
        type: DataTypes.TEXT,
        defaultValue: "Edit Review",
      },
      rateYourExperienceWith: {
        type: DataTypes.TEXT,
        defaultValue: "Rate your experience with",
      },
      name: {
        type: DataTypes.TEXT,
        defaultValue: "Name",
      },
      yourExperience: {
        type: DataTypes.TEXT,
        defaultValue: "Your Experience",
      },
      floatingNumber: {
        type: DataTypes.TEXT,
        defaultValue: "Floating Number",
      },
      editIcon: {
        type: DataTypes.TEXT,
        defaultValue: "Edit Icon",
      },
      generalSettings: {
        type: DataTypes.TEXT,
        defaultValue: "General Settings",
      },
      preview: {
        type: DataTypes.TEXT,
        defaultValue: "Preview",
      },
      addHome: {
        type: DataTypes.TEXT,
        defaultValue: "Add to Home Screen",
      },
      clickBottom: {
        type: DataTypes.TEXT,
        defaultValue: "Click on at the bottom of the screen",
      },
      scrollDown: {
        type: DataTypes.TEXT,
        defaultValue: "Scroll down and click on",
      },
      clickCorner: {
        type: DataTypes.TEXT,
        defaultValue: "Click on at the corner of the screen",
      },
      clickOn: {
        type: DataTypes.TEXT,
        defaultValue: "Click on",
      },
      addContact: {
        type: DataTypes.TEXT,
        defaultValue: "Add Contact",
      },
      share: {
        type: DataTypes.TEXT,
        defaultValue: "Share",
      },
      whatsappNumber: {
        type: DataTypes.TEXT,
        defaultValue: "Whatsapp Number",
      },
      smsNumber: {
        type: DataTypes.TEXT,
        defaultValue: "SMS Number",
      },
      phoneNumber: {
        type: DataTypes.TEXT,
        defaultValue: "Phone Number",
      },
      mailAddress: {
        type: DataTypes.TEXT,
        defaultValue: "Mail Address",
      },
      linkAddress: {
        type: DataTypes.TEXT,
        defaultValue: "Link Address",
      },
      select: {
        type: DataTypes.TEXT,
        defaultValue: "Select",
      },
      logo: {
        type: DataTypes.TEXT,
        defaultValue: "Logo",
      },
      floatingButton: {
        type: DataTypes.TEXT,
        defaultValue: "Floating Button",
      },
      likeButton: {
        type: DataTypes.TEXT,
        defaultValue: "Like Button",
      },
      accSettings: {
        type: DataTypes.TEXT,
        defaultValue: "Account Settings",
      },
      updateProfile: {
        type: DataTypes.TEXT,
        defaultValue: "Update Profile",
      },
      emailAddress: {
        type: DataTypes.TEXT,
        defaultValue: "Email Address",
      },
      password: {
        type: DataTypes.TEXT,
        defaultValue: "Password",
      },
      confirmPassword: {
        type: DataTypes.TEXT,
        defaultValue: "Confirm Password",
      },
      newPassword: {
        type: DataTypes.TEXT,
        defaultValue: "New Password",
      },
      currentPassword: {
        type: DataTypes.TEXT,
        defaultValue: "Current Password",
      },
      changePassword: {
        type: DataTypes.TEXT,
        defaultValue: "Change Password",
      },
      forgetPassword: {
        type: DataTypes.TEXT,
        defaultValue: "Forget Password?",
      },
      dontHaveAccount: {
        type: DataTypes.TEXT,
        defaultValue: "Don’t have account?",
      },
      sr: {
        type: DataTypes.TEXT,
        defaultValue: "Sr.",
      },
      url: {
        type: DataTypes.TEXT,
        defaultValue: "URL",
      },
      status: {
        type: DataTypes.TEXT,
        defaultValue: "Status",
      },
      action: {
        type: DataTypes.TEXT,
        defaultValue: "Action",
      },
      approved: {
        type: DataTypes.TEXT,
        defaultValue: "Approved",
      },
      rating: {
        type: DataTypes.TEXT,
        defaultValue: "Rating",
      },
      logout: {
        type: DataTypes.TEXT,
        defaultValue: "Logout",
      },
      login: {
        type: DataTypes.TEXT,
        defaultValue: "Login",
      },
      signup: {
        type: DataTypes.TEXT,
        defaultValue: "Signup",
      },
      forget: {
        type: DataTypes.TEXT,
        defaultValue: "Forget",
      },
      reset: {
        type: DataTypes.TEXT,
        defaultValue: "Reset",
      },
      alreadyHaveAccount: {
        type: DataTypes.TEXT,
        defaultValue: "Already have account?",
      },
      resetPassword: {
        type: DataTypes.TEXT,
        defaultValue: "Reset Password",
      },
      resetCode: {
        type: DataTypes.TEXT,
        defaultValue: "Reset Code",
      },
      language: {
        type: DataTypes.TEXT,
        defaultValue: "Language",
      },
      qrCode: {
        type: DataTypes.TEXT,
        defaultValue: "QR Code",
      },
      openCameraScanCode: {
        type: DataTypes.TEXT,
        defaultValue: "Open Camera and Scan QR Code",
      },
      aboutUs: {
        type: DataTypes.TEXT,
        defaultValue: "About Us",
      },
      packages: {
        type: DataTypes.TEXT,
        defaultValue: "Packages",
      },
      howItWorks: {
        type: DataTypes.TEXT,
        defaultValue: "How It Works",
      },
      getAQuote: {
        type: DataTypes.TEXT,
        defaultValue: "Get A Quote",
      },
      howItWorks: {
        type: DataTypes.TEXT,
        defaultValue: "How It Works",
      },
      ourCaptivatingTemplateCollection: {
        type: DataTypes.TEXT,
        defaultValue: "Our Captivating Template Collection",
      },
      customerTestimonials: {
        type: DataTypes.TEXT,
        defaultValue: "Customer Testimonials",
      },
      basic: {
        type: DataTypes.TEXT,
        defaultValue: "Basic",
      },
      standard: {
        type: DataTypes.TEXT,
        defaultValue: "Standard",
      },
      premium: {
        type: DataTypes.TEXT,
        defaultValue: "Premium",
      },
      greatForStarters: {
        type: DataTypes.TEXT,
        defaultValue: "Great for starters",
      },
      forPlannedProjects: {
        type: DataTypes.TEXT,
        defaultValue: "For planned projects",
      },
      customizableDesignOptions: {
        type: DataTypes.TEXT,
        defaultValue: "Customizable design options",
      },
      pricingPlans: {
        type: DataTypes.TEXT,
        defaultValue: "Pricing Plans",
      },
      socialMediaIntegration: {
        type: DataTypes.TEXT,
        defaultValue: "Social media integration",
      },
      mobileFriendlyLayouts: {
        type: DataTypes.TEXT,
        defaultValue: "Mobile-friendly layouts",
      },
      easySharingCapabilities: {
        type: DataTypes.TEXT,
        defaultValue: "Easy sharing capabilities",
      },
      analyticsForTrackingGrowth: {
        type: DataTypes.TEXT,
        defaultValue: "Analytics for tracking growth",
      },
      getNow: {
        type: DataTypes.TEXT,
        defaultValue: "Get Now",
      },
      heroTitle: {
        type: DataTypes.TEXT,
        defaultValue: "Hero Title",
      },
      heroDescription: {
        type: DataTypes.TEXT,
        defaultValue: "Hero Description",
      },
      workingStep1Title: {
        type: DataTypes.TEXT,
        defaultValue: "Consult with Experts",
      },
      workingStep1Description: {
        type: DataTypes.TEXT,
        defaultValue:
          "Leave Details And Talk To One Of Our Marketing Consultants. Suits You? Excellent - We Open A Light Phone Order Together",
      },
      workingStep2Title: {
        type: DataTypes.TEXT,
        defaultValue: "Card Characterization",
      },
      workingStep2Description: {
        type: DataTypes.TEXT,
        defaultValue:
          "Our Marketing Consultant Will Characterize Your Business Card - There Is No Need To Prepare Anything Or Fill Out Exhausting Forms, We Will Already Lead The Process",
      },
      workingStep3Title: {
        type: DataTypes.TEXT,
        defaultValue: "Complete & Guide Solutions",
      },
      workingStep3Description: {
        type: DataTypes.TEXT,
        defaultValue:
          "Are You Missing Images Or A Logo? We Will Make Sure To Complete What Is Missing And Give You Professional Guidance. Don't Worry, We Have Solutions For Everything",
      },
      workingStep4Title: {
        type: DataTypes.TEXT,
        defaultValue: "Instant Guidance & Tools",
      },
      workingStep4Description: {
        type: DataTypes.TEXT,
        defaultValue:
          "You Receive Your New Digital Business Card Along With Personal Telephone Guidance And Work Tools From The First Moment. Simple And Easy!",
      },
      bussinessTitle: {
        type: DataTypes.TEXT,
        defaultValue: "Share Your Digital Business Card",
      },
      bussinessDescription: {
        type: DataTypes.TEXT,
        defaultValue:
          "Design your personalized digital business card and easily share it across social media with a private link and QR code. Elevate your networking experience today!",
      },
      business1Label: {
        type: DataTypes.TEXT,
        defaultValue: "Private Link",
      },
      business1Description: {
        type: DataTypes.TEXT,
        defaultValue:
          "Discreetly share your digital card with a private link exclusively for you. Send via messages, emails, or embed in your website or email signature.",
      },
      business2Label: {
        type: DataTypes.TEXT,
        defaultValue: "QR Code for Instant Access",
      },
      business2Description: {
        type: DataTypes.TEXT,
        defaultValue:
          "Embrace QR tech with a dynamic code for your digital card, enabling effortless smartphone scanning. Explore networking opportunities at events & conferences.",
      },
      business3Label: {
        type: DataTypes.TEXT,
        defaultValue: "Seamless Social Sharing",
      },
      business3Description: {
        type: DataTypes.TEXT,
        defaultValue:
          "Effortlessly share your digital card on Instagram, TikTok, Twitter, etc., and connect with potential clients, collaborators, and prospects for broader reach.",
      },
      needTheSameThing: {
        type: DataTypes.TEXT,
        defaultValue: "Need the same thing?",
      },
      clickToGet: {
        type: DataTypes.TEXT,
        defaultValue: "Click to get",
      },
      footerText: {
        type: DataTypes.TEXT,
        defaultValue: "All rights reserved to",
      },
      copyRight: {
        type: DataTypes.TEXT,
        defaultValue: "Copy Right",
      },
      allRightsReserved: {
        type: DataTypes.TEXT,
        defaultValue: "All Rights Reserved",
      },
      termAndServices: {
        type: DataTypes.TEXT,
        defaultValue: "Terms and Services",
      },
      privacyPolicy: {
        type: DataTypes.TEXT,
        defaultValue: "Privacy Policy",
      },
      cookiePolicy: {
        type: DataTypes.TEXT,
        defaultValue: "Cookie Policy",
      },
      contactUs: {
        type: DataTypes.TEXT,
        defaultValue: "Contact Us",
      },
      email: {
        type: DataTypes.TEXT,
        defaultValue: "Email",
      },
      phone: {
        type: DataTypes.TEXT,
        defaultValue: "Phone",
      },
      paymentType1Desc: {
        type: DataTypes.TEXT,
        defaultValue: "paymentType1Desc",
      },
      paymentType1Name: {
        type: DataTypes.TEXT,
        defaultValue: "paymentType1Name",
      },
      paymentType1Price: {
        type: DataTypes.TEXT,
        defaultValue: "paymentType1Price",
      },
      paymentType2Desc: {
        type: DataTypes.TEXT,
        defaultValue: "paymentType2Desc",
      },
      paymentType2Name: {
        type: DataTypes.TEXT,
        defaultValue: "paymentType2Name",
      },
      paymentType2Price: {
        type: DataTypes.TEXT,
        defaultValue: "paymentType2Price",
      },
      paymentType3Desc: {
        type: DataTypes.TEXT,
        defaultValue: "paymentType3Desc",
      },
      paymentType3Name: {
        type: DataTypes.TEXT,
        defaultValue: "paymentType3Name",
      },
      paymentType3Price: {
        type: DataTypes.TEXT,
        defaultValue: "paymentType3Price",
      },
      paymentLink1: {
        type: DataTypes.TEXT,
        defaultValue: "paymentLink1",
      },
      paymentLink2: {
        type: DataTypes.TEXT,
        defaultValue: "paymentLink2",
      },
      paymentLink3: {
        type: DataTypes.TEXT,
        defaultValue: "paymentLink3",
      },
      paymentLink4: {
        type: DataTypes.TEXT,
        defaultValue: "paymentLink4",
      },
      paymentLink5: {
        type: DataTypes.TEXT,
        defaultValue: "paymentLink5",
      },
      legal: {
        type: DataTypes.TEXT,
        defaultValue: "legal",
      },
      links: {
        type: DataTypes.TEXT,
        defaultValue: "links",
      },
      appointment: {
        type: DataTypes.TEXT,
        defaultValue: "Appointment",
      },
      addAppointment: {
        type: DataTypes.TEXT,
        defaultValue: "Add Appointment",
      },
      selectDates: {
        type: DataTypes.TEXT,
        defaultValue: "Select Dates",
      },
      bookMeeting: {
        type: DataTypes.TEXT,
        defaultValue: "Book Meeting",
      },
      createMeeting: {
        type: DataTypes.TEXT,
        defaultValue: "Create Meeting",
      },
      viewAll: {
        type: DataTypes.TEXT,
        defaultValue: "View All",
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "languages",
    }
  );
  return languages;
};
