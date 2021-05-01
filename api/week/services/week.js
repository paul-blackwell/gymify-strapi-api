'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
    find: ctx => {
        return strapi.query('week').find(ctx.query, [
            { path: 'workouts', populate: { path: 'warmups',}},
            { path: 'workouts', populate: { path: 'exercises' }},
        ]);
    },
};