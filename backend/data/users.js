const bcrypt = require("bcryptjs")

const users = [
    {
        name: "Admin User",
        email: "admin@test.com",
        password: bcrypt.hashSync("admin123", 10),
        isAdmin: true,
    },

    {
        name: "Faizan Pervaiz",
        email: "faixanpervaix@gmail.com",
        password: bcrypt.hashSync("admin123", 10),
    },

    {
        name: "Test User",
        email: "test@test.com",
        password: bcrypt.hashSync("admin123", 10),
    },

    {
        name: "Mailinator User",
        email: "test@mailinator.com",
        password: bcrypt.hashSync("admin123", 10),
    },

    {
        name: "Another User",
        email: "another@test.com",
        password: bcrypt.hashSync("admin123", 10),
    }
]

module.exports = users