
exports.seed = async function(knex) {
  return knex('Characters').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Characters').insert([
        {
          name: 'Michael Scott',
          department: 'Scranton, Branch Manager'
        },
        {
          name: 'Dwight Schrute',
          department: 'Sales'
        },
        {
          name: 'Jim Halpert',
          department: 'Sales'
        },
        {
          name: 'Kelly Kapoor',
          department: 'Customer Service'
        }
      ]);
    });
};
