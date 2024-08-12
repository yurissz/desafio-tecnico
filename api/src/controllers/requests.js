const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient({
    log: ['query']
});

const readRequests = async (req, res) => {
    try {
        const requests = await prisma.requests.findMany()
        console.log(requests);

        return res.status(200).json(requests)
    } catch (error) {
        console.log(error);
        return res.status(400).json(error.message);
    }
}

const readOneRequest = async (req, res) => {
    const { id } = req.params

    try {
        const request = await prisma.requests.findUnique({
            where: {
                id: (+id)
            },
        })

        if (!request) {
            return res.status(400).json({ message: "Esse pedido não existe" })
        }

        return res.status(200).json(request)
    } catch (error) {
        console.log(error);
        return res.status(400).json(error.message);
    }
}

const updateRequest = async (req, res) => {

    const { productId, userEmail } = req.body
    const { id } = req.params

    try {

        //if (!idProduto || !emailUser) {
        //   return res.status(400).json({ message: "Verifique se os campos de texto estão preenchido" })
        // }

        const requestExistent = await prisma.requests.findUnique({
            where: {
                id: (+id)
            },
        })

        if (!requestExistent) {
            return res.status(400).json({ message: "Esse pedido não existe" })
        }

        const user = await prisma.user.findUnique({
            where: {
                email: userEmail
            }
        })

        const request = await prisma.requests.updateMany({
            where: {
                id: (+id)
            },
            data: {
                idProduct: Number(productId),
                idUser: Number(user.id)
            }
        })

        if (!request) {
            return res.status(400).json({ message: "Não foi possivel realizar a edição do seu pedido" })
        }

        return res.status(200).json({ message: "Pedido editado com sucesso" })


    } catch (error) {
        console.log(error)
        return res.status(400).json(error.message);
    }
}

const deleteRequest = async (req, res) => {

    const { id } = req.params

    try {

        const request = await prisma.products.delete({
            where: {
                id: (+id)
            },
        })

        if (!request) {
            res.status(400).json({ message: "O pedido não existe" })
        }

        res.status(200).json({ message: "Pedido deletado com sucesso!" })

    } catch (error) {
        console.log(error)
        return res.status(400).json(error.message);
    }

}

const createRequest = async (req, res) => {

    const { productId, userEmail } = req.body

    try {

        const product = await prisma.products.findUnique({
            where: {
                id: (+productId)
            },
        })

        const user = await prisma.user.findUnique({
            where: {
                email: userEmail
            }
        })

        const request = await prisma.requests.create({
            data: {
                productId: Number(productId),
                userId: Number(user.id)
            }
        })

        res.status(200).json({ product, user })

    } catch (error) {
        console.log(error)
        return res.status(400).json(error.message);
    }

}

module.exports = {
    readOneRequest,
    readRequests,
    createRequest,
    deleteRequest,
    updateRequest
}