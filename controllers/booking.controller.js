const cloudinary = require("cloudinary").v2;
const bookings = require("../models/bookings");
const json = require("../utils/jsonresponse");
const BookingsModel = require("../models").bookings;
const nodemailer = require("nodemailer");

exports.add = async (req, res) => {
  try {
    let check = await BookingsModel.findOne({ where: { cid: req.body.cid } });
    console.log("check", check);
    if (check) {
      await BookingsModel.update(
        {
          cid: req.body.cid,
          name: req.body.name,
          email: req.body.email,
          phone: req.body.phone,
          booking: req.body.booking,
        },
        {
          where: { cid: req.body.cid },
        }
      );
      json(res, 200, "Updated successfully");
    } else {
      await BookingsModel.create({
        cid: req.body.cid,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        booking: req.body.booking,
      });
      json(res, 200, "Booking Added");
    }
  } catch (error) {
    json(res, 500, error.message);
  }
};
exports.send = async (req, res) => {
  try {
    let transporter = nodemailer.createTransport(
      {
        host: "wazcard.com",
        port: 465,
        secure: true,
        service: "SMTP",
        auth: {
          user: "service@wazcard.com",
          pass: "a@KenQeVNwPR",
        },
        tls: {
          rejectUnauthorized: false,
        },
      },
      {
        logger: true,
        debug: true,
      }
    );

    let mailOptions = {
      from: "service@wazcard.com",
      to: req.body.sendEmail,
      subject: "Booking Appointment",
      html:
        "<!DOCTYPE html>\n" +
        '<html lang="en">\n' +
        "<head>\n" +
        '    <meta charset="UTF-8">\n' +
        "    <title></title>\n" +
        "</head>\n" +
        "<body>\n" +
        "<p>Name: <b>" +
        req.body.name +
        "\n" +
        "<p>Email: <b>" +
        req.body.sendEmail +
        "\n" +
        "<p>PhoneNumber: <b>" +
        req.body.phone +
        "\n" +
        "<p>Time: <b>" +
        req.body.booking +
        "\n" +
        "</b></p>\n" +
        "</body>\n" +
        "</html>",
    };

    let info = await transporter.sendMail(mailOptions);

    console.log("Message sent: %s");
    console.log("Message sent: %s", info.messageId);
    res.json({ success: true, message: "Email sent successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.byId = async (req, res) => {
  try {
    console.log("id", req.params.id);
    let data = await BookingsModel.findOne({ where: { cid: req.params.id } });
    json(res, 200, "success", data);
  } catch (error) {
    json(res, 500, error.message);
  }
};
