const sharedConfig = {
    client: 'sqlite3',
    migrations: { directory: './data/migrations'},
    useNullAsDefault: true,
    pool: { afterCreate: (conn, done) => conn.run('PRAGMA foreign_key = ON', done)},
}

module.exports = {
    development: {
        ...sharedConfig,
        connection: {filename: './data/cook_book.db3'},
        seeds: {directory: './data/seed'},
    },
    testing: {
        ...sharedConfig,
        connection: {filename: './data/cook_book.test.db3'},
    },
}