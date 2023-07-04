import {db} from '../db.js';
import {DataTypes} from 'sequelize';

export const User = db.define('telegram_subscriber', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nick: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    chat_id: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    }
}, {
    timestamps: false
})