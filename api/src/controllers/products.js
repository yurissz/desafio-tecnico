const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient({
    log: ['query']
});


const readProducts = async (req, res) => {
    try {
        const products = await prisma.products.findMany()
        console.log(products);

        return res.status(200).json(products)
    } catch (error) {
        console.log(error);
        return res.status(400).json(error.message);
    }
}

const readOneProduct = async (req, res) => {
    const { id } = req.params

    try {
        const product = await prisma.products.findUnique({
            where: {
                id: (+id)
            },
        })

        if (!product) {
            return res.status(400).json({ message: "Esse usuário não existe" })
        }

        return res.status(200).json(product)
    } catch (error) {
        console.log(error);
        return res.status(400).json(error.message);
    }
}


const registerProduct = async (req, res) => {

    const { product } = req.body

    try {

        if (!product) {
            return res.status(400).json({ message: "Verifique o campo de texto está preenchido" })
        }

        await prisma.products.create({
            data: {
                product
            },
        })

        return res.status(200).json("Produto cadastrado com sucesso")

    } catch (error) {
        console.log(error);
        return res.status(400).json(error.message);
    }
}


const updateProduct = async (req, res) => {

    const { product } = req.body
    const { id } = req.params

    try {

        if (!product) {
            return res.status(400).json({ message: "Verifique se o campo de texto está preenchido" })
        }

        const productExistent = await prisma.products.findUnique({
            where: {
                id: (+id)
            },
        })

        if (!productExistent) {
            return res.status(400).json({ message: "Esse usuário não existe" })
        }

        const product = await prisma.products.updateMany({
            where: {
                id: (+id)
            },
            data: {
                product
            }
        })

        if (!product) {
            return res.status(400).json({ message: "Não foi possivel realizar a edição do seu produto" })
        }

        return res.status(200).json({ message: "Produto editado com sucesso" })


    } catch (error) {
        console.log(error)
        return res.status(400).json(error.message);
    }
}

const deleteProduct = async (req, res) => {
    const { id } = req.params

    try {
        const product = await prisma.products.delete({
            where: {
                id: (+id)
            },
        })

        if (!product) {
            res.status(400).json({ message: "O produto não existe" })
        }

        res.status(200).json({ message: "Produto deletado com sucesso!" })

    } catch (error) {
        console.log(error);
        return res.status(400).json(error.message);
    }
}

module.exports = {
    registerProduct,
    updateProduct,
    readOneProduct,
    readProducts,
    deleteProduct,
};