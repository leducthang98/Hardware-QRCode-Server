export default {
    PORT: process.env.SERVER_PORT || 8080,
    DATABASE_URL: process.env.DATABASE_URL,
    JWT_SECRET: process.env.JWT_SECRET || 'leducthang98',
    REDIS: {
        PORT: process.env.REDIS_PORT || 6379,
        HOST: process.env.REDIS_URL || 'localhost'
    },
}