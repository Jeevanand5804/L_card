import User from "../models/User.js";

export const getProfile = async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select("-password");

		if (!user) {
			return res.status(404).json({ msg: "User not found" });
		}

		res.json({
			id: user._id,
			name: user.name,
			email: user.email,
			points: user.points,
			streak: user.streak,
			tier: user.tier,
		});
	} catch (err) {
		res.status(500).json({ msg: err.message });
	}
};
