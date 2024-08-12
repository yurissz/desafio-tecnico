import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import PropTypes from 'prop-types';
import { makeRequest } from '../../utils/makeRequest'
import { useEffect, useState } from 'react';


CardComponent.propTypes = {
    item: PropTypes.node.isRequired,
};

export default function CardComponent({ item }) {

    const [productDecription, setProductDescription] = useState([])

    const functionRenderProducts = async () => {
        const { productId } = item
        const product = productId.toString()
        const produto = await makeRequest(`/product/${product}`, 'GET')
        setProductDescription(produto)
    }

    useEffect(() => {
        functionRenderProducts()
    }, [])

    return (
        <Card sx={{
            maxWidth: 345,
            marginTop: "9%",
            marginLeft: "4%",
        }}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {productDecription.product}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {productDecription.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
        </Card>
    );
}