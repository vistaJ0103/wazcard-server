"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("languages", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      lang_code: {
        type: Sequelize.TEXT,
      },
      lang_name: {
        type: Sequelize.TEXT,
      },
      rtl: {
        type: Sequelize.BOOLEAN,
      },
      myDigitalCard: {
        type: Sequelize.TEXT,
        defaultValue: "My Digital Cards",
      },
      pleaseCreateNewBusinessCard: {
        type: Sequelize.TEXT,
        defaultValue: "Please create the new business card",
      },
      qrCode: {
        type: Sequelize.TEXT,
        defaultValue: "QR Code",
      },
      openCameraScanCode: {
        type: Sequelize.TEXT,
        defaultValue: "Open Camera and Scan QR Code",
      },
      createCard: {
        type: Sequelize.TEXT,
        defaultValue: "Create Card",
      },
      createNewCard: {
        type: Sequelize.TEXT,
        defaultValue: "Create New Card",
      },
      cardDesign: {
        type: Sequelize.TEXT,
        defaultValue: "Card Design",
      },
      businessLogo: {
        type: Sequelize.TEXT,
        defaultValue: "Business Logo",
      },
      coverPhoto: {
        type: Sequelize.TEXT,
        defaultValue: "Cover Photo",
      },
      backgroundImage: {
        type: Sequelize.TEXT,
        defaultValue: "Background Image",
      },
      sortAt: {
        type: Sequelize.TEXT,
        defaultValue: "Sort at",
      },
      businessName: {
        type: Sequelize.TEXT,
        defaultValue: "Business Name",
      },
      title: {
        type: Sequelize.TEXT,
        defaultValue: "Title",
      },
      slogan: {
        type: Sequelize.TEXT,
        defaultValue: "Slogan",
      },
      color: {
        type: Sequelize.TEXT,
        defaultValue: "Color",
      },
      coverColor: {
        type: Sequelize.TEXT,
        defaultValue: "Cover Color",
      },
      backgroundColor: {
        type: Sequelize.TEXT,
        defaultValue: "Background Color",
      },
      mainIcons: {
        type: Sequelize.TEXT,
        defaultValue: "Main Icons",
      },
      addIcons: {
        type: Sequelize.TEXT,
        defaultValue: "Add Icons",
      },
      iconUsedFor: {
        type: Sequelize.TEXT,
        defaultValue: "Icon used for?",
      },
      openingHours: {
        type: Sequelize.TEXT,
        defaultValue: "Opening Hours",
      },
      monday: {
        type: Sequelize.TEXT,
        defaultValue: "Monday",
      },
      tuesday: {
        type: Sequelize.TEXT,
        defaultValue: "Tuesday",
      },
      wednesday: {
        type: Sequelize.TEXT,
        defaultValue: "Wednesday",
      },
      thursday: {
        type: Sequelize.TEXT,
        defaultValue: "Thursday",
      },
      friday: {
        type: Sequelize.TEXT,
        defaultValue: "Friday",
      },
      saturday: {
        type: Sequelize.TEXT,
        defaultValue: "Saturday",
      },
      sunday: {
        type: Sequelize.TEXT,
        defaultValue: "Sunday",
      },
      gallery: {
        type: Sequelize.TEXT,
        defaultValue: "Gallery",
      },
      addPicture: {
        type: Sequelize.TEXT,
        defaultValue: "Add Picture",
      },
      upload: {
        type: Sequelize.TEXT,
        defaultValue: "Upload",
      },
      reviews: {
        type: Sequelize.TEXT,
        defaultValue: "Reviews",
      },
      addReviews: {
        type: Sequelize.TEXT,
        defaultValue: "Add Review",
      },
      editReviews: {
        type: Sequelize.TEXT,
        defaultValue: "Edit Review",
      },
      name: {
        type: Sequelize.TEXT,
        defaultValue: "Name",
      },
      rateYourExperienceWith: {
        type: Sequelize.TEXT,
        defaultValue: "Rate your experience with",
      },
      yourExperience: {
        type: Sequelize.TEXT,
        defaultValue: "Your Experience",
      },
      floatingNumber: {
        type: Sequelize.TEXT,
        defaultValue: "Floating Number",
      },
      editIcon: {
        type: Sequelize.TEXT,
        defaultValue: "Edit Icon",
      },
      generalSettings: {
        type: Sequelize.TEXT,
        defaultValue: "General Settings",
      },
      preview: {
        type: Sequelize.TEXT,
        defaultValue: "Preview",
      },
      addContact: {
        type: Sequelize.TEXT,
        defaultValue: "Add Contact",
      },
      share: {
        type: Sequelize.TEXT,
        defaultValue: "Share",
      },
      whatsappNumber: {
        type: Sequelize.TEXT,
        defaultValue: "Whatsapp Number",
      },
      smsNumber: {
        type: Sequelize.TEXT,
        defaultValue: "SMS Number",
      },
      phoneNumber: {
        type: Sequelize.TEXT,
        defaultValue: "Phone Number",
      },
      mailAddress: {
        type: Sequelize.TEXT,
        defaultValue: "Mail Address",
      },
      linkAddress: {
        type: Sequelize.TEXT,
        defaultValue: "Link Address",
      },
      select: {
        type: Sequelize.TEXT,
        defaultValue: "Select",
      },
      logo: {
        type: Sequelize.TEXT,
        defaultValue: "Logo",
      },
      floatingButton: {
        type: Sequelize.TEXT,
        defaultValue: "Floating Button",
      },
      likeButton: {
        type: Sequelize.TEXT,
        defaultValue: "Like Button",
      },
      accSettings: {
        type: Sequelize.TEXT,
        defaultValue: "Account Settings",
      },
      updateProfile: {
        type: Sequelize.TEXT,
        defaultValue: "Update Profile",
      },
      emailAddress: {
        type: Sequelize.TEXT,
        defaultValue: "Email Address",
      },
      password: {
        type: Sequelize.TEXT,
        defaultValue: "Password",
      },
      confirmPassword: {
        type: Sequelize.TEXT,
        defaultValue: "Confirm Password",
      },
      newPassword: {
        type: Sequelize.TEXT,
        defaultValue: "New Password",
      },
      currentPassword: {
        type: Sequelize.TEXT,
        defaultValue: "Current Password",
      },
      changePassword: {
        type: Sequelize.TEXT,
        defaultValue: "Change Password",
      },
      sr: {
        type: Sequelize.TEXT,
        defaultValue: "Sr.",
      },
      url: {
        type: Sequelize.TEXT,
        defaultValue: "URL",
      },
      status: {
        type: Sequelize.TEXT,
        defaultValue: "Status",
      },
      action: {
        type: Sequelize.TEXT,
        defaultValue: "Action",
      },
      approved: {
        type: Sequelize.TEXT,
        defaultValue: "Approved",
      },
      rating: {
        type: Sequelize.TEXT,
        defaultValue: "Rating",
      },
      logout: {
        type: Sequelize.TEXT,
        defaultValue: "Logout",
      },
      login: {
        type: Sequelize.TEXT,
        defaultValue: "Login",
      },
      forgetPassword: {
        type: Sequelize.TEXT,
        defaultValue: "Forget Password?",
      },
      dontHaveAccount: {
        type: Sequelize.TEXT,
        defaultValue: "Don’t have account?",
      },
      signup: {
        type: Sequelize.TEXT,
        defaultValue: "Signup",
      },
      forget: {
        type: Sequelize.TEXT,
        defaultValue: "Forget",
      },
      reset: {
        type: Sequelize.TEXT,
        defaultValue: "Reset",
      },
      alreadyHaveAccount: {
        type: Sequelize.TEXT,
        defaultValue: "Already have account?",
      },
      resetPassword: {
        type: Sequelize.TEXT,
        defaultValue: "Reset Password",
      },
      resetCode: {
        type: Sequelize.TEXT,
        defaultValue: "Reset Code",
      },
      language: {
        type: Sequelize.TEXT,
        defaultValue: "Language",
      },
      aboutUs: {
        type: Sequelize.TEXT,
        defaultValue: "About Us",
      },
      packages: {
        type: Sequelize.TEXT,
        defaultValue: "Packages",
      },
      howItWorks: {
        type: Sequelize.TEXT,
        defaultValue: "How It Works",
      },
      getAQuote: {
        type: Sequelize.TEXT,
        defaultValue: "Get A Quote",
      },
      howItWorks: {
        type: Sequelize.TEXT,
        defaultValue: "How It Works",
      },
      ourCaptivatingTemplateCollection: {
        type: Sequelize.TEXT,
        defaultValue: "Our Captivating Template Collection",
      },
      customerTestimonials: {
        type: Sequelize.TEXT,
        defaultValue: "Customer Testimonials",
      },
      basic: {
        type: Sequelize.TEXT,
        defaultValue: "Basic",
      },
      standard: {
        type: Sequelize.TEXT,
        defaultValue: "Standard",
      },
      premium: {
        type: Sequelize.TEXT,
        defaultValue: "Premium",
      },
      greatForStarters: {
        type: Sequelize.TEXT,
        defaultValue: "Great for starters",
      },
      forPlannedProjects: {
        type: Sequelize.TEXT,
        defaultValue: "For planned projects",
      },
      customizableDesignOptions: {
        type: Sequelize.TEXT,
        defaultValue: "Customizable design options",
      },
      pricingPlans: {
        type: Sequelize.TEXT,
        defaultValue: "Pricing Plans",
      },
      socialMediaIntegration: {
        type: Sequelize.TEXT,
        defaultValue: "Social media integration",
      },
      mobileFriendlyLayouts: {
        type: Sequelize.TEXT,
        defaultValue: "Mobile-friendly layouts",
      },
      easySharingCapabilities: {
        type: Sequelize.TEXT,
        defaultValue: "Easy sharing capabilities",
      },
      analyticsForTrackingGrowth: {
        type: Sequelize.TEXT,
        defaultValue: "Analytics for tracking growth",
      },
      getNow: {
        type: Sequelize.TEXT,
        defaultValue: "Get Now",
      },
      heroTitle: {
        type: Sequelize.TEXT,
        defaultValue: "Hero Title",
      },
      heroDescription: {
        type: Sequelize.TEXT,
        defaultValue: "Hero Description",
      },
      workingStep1Title: {
        type: Sequelize.TEXT,
        defaultValue: "Consult with Experts",
      },
      workingStep1Description: {
        type: Sequelize.TEXT,
        defaultValue:
          "Leave Details And Talk To One Of Our Marketing Consultants. Suits You? Excellent - We Open A Light Phone Order Together",
      },
      workingStep2Title: {
        type: Sequelize.TEXT,
        defaultValue: "Card Characterization",
      },
      workingStep2Description: {
        type: Sequelize.TEXT,
        defaultValue:
          "Our Marketing Consultant Will Characterize Your Business Card - There Is No Need To Prepare Anything Or Fill Out Exhausting Forms, We Will Already Lead The Process",
      },
      workingStep3Title: {
        type: Sequelize.TEXT,
        defaultValue: "Complete & Guide Solutions",
      },
      workingStep3Description: {
        type: Sequelize.TEXT,
        defaultValue:
          "Are You Missing Images Or A Logo? We Will Make Sure To Complete What Is Missing And Give You Professional Guidance. Don't Worry, We Have Solutions For Everything",
      },
      workingStep4Title: {
        type: Sequelize.TEXT,
        defaultValue: "Instant Guidance & Tools",
      },
      workingStep4Description: {
        type: Sequelize.TEXT,
        defaultValue:
          "You Receive Your New Digital Business Card Along With Personal Telephone Guidance And Work Tools From The First Moment. Simple And Easy!",
      },
      bussinessTitle: {
        type: Sequelize.TEXT,
        defaultValue: "Share Your Digital Business Card",
      },
      bussinessDescription: {
        type: Sequelize.TEXT,
        defaultValue:
          "Design your personalized digital business card and easily share it across social media with a private link and QR code. Elevate your networking experience today!",
      },
      business1Label: {
        type: Sequelize.TEXT,
        defaultValue: "Private Link",
      },
      business1Description: {
        type: Sequelize.TEXT,
        defaultValue:
          "Discreetly share your digital card with a private link exclusively for you. Send via messages, emails, or embed in your website or email signature.",
      },
      business2Label: {
        type: Sequelize.TEXT,
        defaultValue: "QR Code for Instant Access",
      },
      business2Description: {
        type: Sequelize.TEXT,
        defaultValue:
          "Embrace QR tech with a dynamic code for your digital card, enabling effortless smartphone scanning. Explore networking opportunities at events & conferences.",
      },
      business3Label: {
        type: Sequelize.TEXT,
        defaultValue: "Seamless Social Sharing",
      },
      business3Description: {
        type: Sequelize.TEXT,
        defaultValue:
          "Effortlessly share your digital card on Instagram, TikTok, Twitter, etc., and connect with potential clients, collaborators, and prospects for broader reach.",
      },
      needTheSameThing: {
        type: Sequelize.TEXT,
        defaultValue: "Need the same thing?",
      },
      clickToGet: {
        type: Sequelize.TEXT,
        defaultValue: "Click to get",
      },
      footerText: {
        type: Sequelize.TEXT,
        defaultValue: "All rights reserved to",
      },
      copyRight: {
        type: Sequelize.TEXT,
        defaultValue: "Copy Right",
      },
      allRightsReserved: {
        type: Sequelize.TEXT,
        defaultValue: "All Rights Reserved",
      },
      termAndServices: {
        type: Sequelize.TEXT,
        defaultValue: "Terms and Services",
      },
      privacyPolicy: {
        type: Sequelize.TEXT,
        defaultValue: "Privacy Policy",
      },
      cookiePolicy: {
        type: Sequelize.TEXT,
        defaultValue: "Cookie Policy",
      },
      contactUs: {
        type: Sequelize.TEXT,
        defaultValue: "Contact Us",
      },
      email: {
        type: Sequelize.TEXT,
        defaultValue: "Email",
      },
      phone: {
        type: Sequelize.TEXT,
        defaultValue: "Phone",
      },
      paymentType1Desc: {
        type: Sequelize.TEXT,
        defaultValue: "paymentType1Desc",
      },
      paymentType1Name: {
        type: Sequelize.TEXT,
        defaultValue: "paymentType1Name",
      },
      paymentType1Price: {
        type: Sequelize.TEXT,
        defaultValue: "paymentType1Price",
      },
      paymentType2Desc: {
        type: Sequelize.TEXT,
        defaultValue: "paymentType2Desc",
      },
      paymentType2Name: {
        type: Sequelize.TEXT,
        defaultValue: "paymentType2Name",
      },
      paymentType2Price: {
        type: Sequelize.TEXT,
        defaultValue: "paymentType2Price",
      },
      paymentType3Desc: {
        type: Sequelize.TEXT,
        defaultValue: "paymentType3Desc",
      },
      paymentType3Name: {
        type: Sequelize.TEXT,
        defaultValue: "paymentType3Name",
      },
      paymentType3Price: {
        type: Sequelize.TEXT,
        defaultValue: "paymentType3Price",
      },
      paymentLink1: {
        type: Sequelize.TEXT,
        defaultValue: "paymentLink1",
      },
      paymentLink2: {
        type: Sequelize.TEXT,
        defaultValue: "paymentLink2",
      },
      paymentLink3: {
        type: Sequelize.TEXT,
        defaultValue: "paymentLink3",
      },
      paymentLink4: {
        type: Sequelize.TEXT,
        defaultValue: "paymentLink4",
      },
      paymentLink5: {
        type: Sequelize.TEXT,
        defaultValue: "paymentLink5",
      },
      legal: {
        type: Sequelize.TEXT,
        defaultValue: "legal",
      },
      links: {
        type: Sequelize.TEXT,
        defaultValue: "links",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("languages");
  },
};
