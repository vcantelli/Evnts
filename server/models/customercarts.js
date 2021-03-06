'use strict';
module.exports = function(sequelize, DataTypes) {
  var CustomerCarts = sequelize.define('CustomerCarts', {

  });
  
  CustomerCarts.associate = models => {
    CustomerCarts.belongsTo(models.Customers);
    
    CustomerCarts.hasMany(models.CustomerCartsHasInventions, {
      as: 'CustomerCartsHasInventions'
    });     
  }
  return CustomerCarts;
};