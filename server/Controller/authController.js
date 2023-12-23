const userModal = require("../Modal/userModal");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const path = require("path")
require("dotenv").config();

const authController = {
    registerUser: async (req, res) => {
        console.log(req.body);
        try {
            const checkphoneNumber = await userModal.find({
                phone: req.body.phone,
            });
            if (checkphoneNumber.length !== 0) {
                return res.status(401).json({ message: "Người dùng đã tồn tại" });
            }

            const salt = await bcrypt.genSalt(10);
            const password = await bcrypt.hash(req.body.password, salt);

            let newUserData = {
                password: password,
                phone: req.body.phone,
            };
            let newUser = await userModal.create(newUserData);
            const userdata = await userModal.findById(newUser._id);

            res.status(200).json({ message: "Đăng ký thành công", userdata });
        } catch (error) {
            res.status(500).json({ message: "Đăng ký error", error });
        }
    },
    getUserInfo: async (req, res) => {
        try {
            const userInfo = await userModal.findOne({ _id: req.params._id });

            if (!userInfo) {
                return res.status(404).json({ message: "Không tìm thấy người dùng" });
            }

            res.status(200).json({ message: "Thành công", userInfo });
        } catch (error) {
            res.status(500).json({ message: "Lỗi khi lấy thông tin người dùng", error });
        }
    },
    generateToken: (payload) => {
        const {
            userId,
            role,
            phone,
            createAt,
        } = payload;
        const accessToken = jwt.sign(
            {
                userId,
                role,
                phone,
                createAt,
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "1d" }
        );
        const refreshToken = jwt.sign(
            {
                userId,
                role,
                phone,
                createAt,
            },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: "30d" }
        );
        return { accessToken, refreshToken };
    },
    loginUser: async (req, res) => {
        try {
            const { phone, password } = req.body;
            const user = await userModal.findOne(
               {phone:phone}
            );
            if (!user) {
                return res
                    .status(401)
                    .json({ status: 401, message: "Tên người dùng không tồn tại" });
            }
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                return res.status(200).json({ status: 401, message: "Mật khẩu không đúng" });
            }
            const token = authController.generateToken({
                userId: user._id,
                role: user.role,
                phone: user.phone,
                createAt: user.created_at,

            });
            let user_refreshToken = await userModal.updateOne(
                {  phone: user.phone},
                { refreshToken: token.refreshToken }
            );
            res
                .status(401)
                .json({
                    status: 200,
                    message: "Đăng nhập thành công", data: {
                        ...token,
                        user
                    },
                });
        } catch (error) {
            res.status(500).json({ message: "Lỗi đăng nhập", error });
        }
    },
    refreshToken: async (req, res) => {
        const refreshToken = req.body.refreshToken;
        if (!refreshToken) return res.status(401).json({ message: 'Chưa đăng nhập' });
        const user = await userModal.findOne({ refreshToken: refreshToken });
        if (!user) {
            return res.status(403).json({ message: 'Chưa đăng nhập' });
        }

        try {

            jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
            const token = authController.generateToken({
                userId: user._id,
                role: user.role,
                phone: user.phone,
                createAt: user.created_at,
            });
            const user_refreshToken = await userModal.updateOne(
                { phone: user?.phone },
                { refreshToken: token.refreshToken }
            );
            res.status(200).json({ message: 'RefreshToken thành công', data: token });
        } catch (error) {
            console.error('Lỗi xác thực refreshToken:', error);

            res.status(403).json({ message: 'Xác thực refreshToken thất bại', error });
        }
    },

    logout: async (req, res) => {
        try {
            const data = await userModal.updateOne(
                { phone: req.body.phone },
                { refreshToken: null }
            );
            res.status(200).json({ message: 'Đăng xuất thành công' });
        } catch (error) {

            res.status(500).json({ message: error });
        }
    }


};

module.exports = authController;
