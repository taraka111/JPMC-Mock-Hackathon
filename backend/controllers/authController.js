const User = require("../models/User");
const jwt = require("jsonwebtoken");

const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

exports.loginAWW = async (req, res) => {
  const { phone } = req.body;
  try {
    const otp = generateOTP();
    const otpExpires = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes

    let user = await User.findOne({ phone });
    if (!user) {
      user = new User({ name: "AWW", phone, role: "aww" });
    }
    user.otp = otp;
    user.otpExpires = otpExpires;
    await user.save();

    // Simulate sending OTP (log it for now)
    console.log(`OTP for ${phone}: ${otp}`);

    res.status(200).json({ message: "OTP sent" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.verifyOTP = async (req, res) => {
  const { phone, otp } = req.body;
  try {
    const user = await User.findOne({ phone });
    if (!user || user.otp !== otp || new Date() > user.otpExpires) {
      return res.status(401).json({ error: "Invalid or expired OTP" });
    }

    user.otp = null;
    user.otpExpires = null;
    await user.save();

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "2d",
    });

    res.status(200).json({ token, user: { id: user._id, name: user.name, role: user.role } });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.loginMother = async (req, res) => {
  const { phone } = req.body;
  try {
    const otp = generateOTP();
    const otpExpires = new Date(Date.now() + 5 * 60 * 1000);

    let user = await User.findOne({ phone, role: "mother" });

    if (!user) {
      user = new User({ name: "Mother", phone, role: "mother" });
    }

    user.otp = otp;
    user.otpExpires = otpExpires;
    await user.save();

    console.log(`OTP for Mother (${phone}): ${otp}`);

    res.status(200).json({ message: "OTP sent" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.verifyMotherOTP = async (req, res) => {
  const { phone, otp } = req.body;
  try {
    const user = await User.findOne({ phone, role: "mother" });

    if (!user || user.otp !== otp || new Date() > user.otpExpires) {
      return res.status(401).json({ error: "Invalid or expired OTP" });
    }

    user.otp = null;
    user.otpExpires = null;
    await user.save();

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "2d",
    });

    res.status(200).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        role: user.role,
        phone: user.phone,
      },
    });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
