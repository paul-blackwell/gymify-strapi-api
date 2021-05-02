'use strict';
const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async find(ctx) {
        let entities;
        if (ctx.request.method === 'GET') {
            //entities = await strapi.services.restaurant.search(ctx.query);
            return strapi.query('week').find(ctx.query, [
                { path: 'workouts', populate: { path: 'warmups', } },
                { path: 'workouts', populate: { path: 'exercises' } },
            ]);
        }
        // } else if (ctx.request.method === 'POST') {
        //     //entities = await strapi.services.restaurant.find(ctx.query);
        //     console.log(ctx.request)
        // }

        //console.log(ctx.request)

        // return entities.map(entity => {
        //   const restaurant = sanitizeEntity(entity, {
        //     model: strapi.models.restaurant,
        //   });
        //   if (restaurant.chef && restaurant.chef.email) {
        //     delete restaurant.chef.email;
        //   }
        //   return restaurant;
        // });
    },
};
