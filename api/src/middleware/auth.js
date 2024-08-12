const { PrismaClient } = require('@prisma/client');
const jwt = require("jsonwebtoken")
const prisma = new PrismaClient({
    log: ['query']
});

const checkLoggedUser = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ message: "Não autorizado" });
    }

    const token = authorization.split(" ")[1];

    try {
        const { id } = jwt.verify(token, 'redizz');

        const user = await prisma.user.findUnique({
            where: {
                id
            },
        })

        if (!user) {
            return res.status(401).json({ message: "Não autorizado" });
        }

        req.usuario = user;

        next();
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = checkLoggedUser;