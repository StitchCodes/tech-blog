const User = require('./userModel');
const Post = require('./postModel');

User.hasMany( Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo( User, {
  foreignKey: 'user_id'
});

module.exports = { User, Post };