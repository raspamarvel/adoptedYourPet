const { Schema, model } = require("mongoose");

const poundSchema = new Schema(
    {
        username: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            require: true,
            unique: true
        },
        password: String,
        profileImg: {
            type: String,
            default: "https://w7.pngwing.com/pngs/510/43/png-transparent-computer-icons-avatar-facebook-messenger-avatar-heroes-silhouette-artwork.png"
        },
        role: {
            type: String,
            enum: ['USER', 'ADMIN', 'OWNER'],
            default: 'USER'

        },
    },
    {

        timestamps: true,
    }
);

const Pound = model("Pound", poundSchema);

module.exports = Pound;
