const PROXY_CONFIG = [
    {
        context: [
            "/users",
            "/user",
            "/user/{dni}"
        ],
        target: "http://localhost:8081/api",
        secure: false
    }
]

module.exports = PROXY_CONFIG;