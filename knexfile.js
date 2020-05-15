// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/characters.db3'
    }
  },
  test: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/characters-test.db3'
    },
  },

};
