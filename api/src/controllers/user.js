const { PrismaClient } = require('@prisma/client');
const jwt = require("jsonwebtoken")
const prisma = new PrismaClient({
    log: ['query']
});


const readUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany()
        console.log(users);

        return res.status(200).json(users)
    } catch (error) {
        console.log(error);
        return res.status(400).json(error.message);
    }
}

const readOneUser = async (req, res) => {
    const { id } = req.params

    try {
        const user = await prisma.user.findUnique({
            where: {
                id: (+id)
            },
        })

        if (!user) {
            return res.status(400).json({ message: "Esse usuário não existe" })
        }

        return res.status(200).json(user)
    } catch (error) {
        console.log(error);
        return res.status(400).json(error.message);
    }
}


const registerUser = async (req, res) => {

    const { firstName, lastName, email, password } = req.body

    try {

        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({ message: "Verifique todos o campo de nome está preenchidos" })
        }

        const userWEmail = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (userWEmail) {
            return res.status(400).json({ message: "Existe outro usuário cadastrado com esse email" })
        }

        const user = await prisma.user.create({
            data: {
                firstName,
                lastName,
                email,
                password
            },
        })

        return res.status(200).json("Usuário cadastrado com sucesso")

    } catch (error) {
        console.log(error);
        return res.status(400).json(error.message);
    }
}


const updateUser = async (req, res) => {

    const { firstName, lastName, email, password } = req.body
    const { id } = req.params

    try {

        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({ message: "Verifique todos o campo de nome está preenchidos" })
        }

        const userExistent = await prisma.user.findUnique({
            where: {
                id: (+id)
            },
        })

        if (!userExistent) {
            return res.status(400).json({ message: "Esse usuário não existe" })
        }

        const user = await prisma.user.updateMany({
            where: {
                id: (+id)
            },
            data: {
                firstName,
                lastName,
                email,
                password
            }
        })

        if (!user) {
            return res.status(400).json({ message: "Não foi possivel realizar a edição do seu usuário" })
        }

        return res.status(200).json({ message: "Usuário editado com sucesso" })


    } catch (error) {
        console.log(error)
        return res.status(400).json(error.message);
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params

    try {
        const user = await prisma.user.delete({
            where: {
                id: (+id)
            },
        })

        if (!user) {
            res.status(400).json({ message: "O usuário não existe" })
        }

        res.status(200).json({ message: "Usuário deletado com sucesso!" })

    } catch (error) {
        console.log(error);
        return res.status(400).json(error.message);
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await prisma.user.findUnique({
            where: {
                email
            },
        })

        if (!user) {
            return res
                .status(404)
                .json({ message: "Email ou senha inválidos" });
        }

        if (password !== user.password) {
            return res
                .status(400)
                .json({ message: "Invalid username and/or password." });
        }

        const token = jwt.sign({ id: user.id }, "redizz", {
            expiresIn: "8h",
        });

        const { password: _, ...loginUser } = user;

        return res.status(200).json({ ...loginUser, token });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};


module.exports = {
    registerUser,
    updateUser,
    readOneUser,
    readUsers,
    deleteUser,
    login,
};