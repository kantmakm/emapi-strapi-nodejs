'use strict';

/**
 * Employees.js controller
 *
 * @description: A set of functions called "actions" for managing `Employees`.
 */

module.exports = {

  /**
   * Retrieve employees records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.employees.search(ctx.query);
    } else {
      return strapi.services.employees.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a employees record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.employees.fetch(ctx.params);
  },

  /**
   * Count employees records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.employees.count(ctx.query);
  },

  /**
   * Create a/an employees record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.employees.add(ctx.request.body);
  },

  /**
   * Update a/an employees record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.employees.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an employees record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.employees.remove(ctx.params);
  },

  /**
   * Add relation to a/an employees record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.employees.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an employees record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.employees.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an employees record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.employees.removeRelation(ctx.params, ctx.request.body);
  }
};
