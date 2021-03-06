import React, {useState, useEffect } from 'react'
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input, Typography} from 'antd';


import { useGetCryptosQuery } from '../services/cryptoApi';
import Loader from './Loader';

const {Title} = Typography;

const Cryptocurrencies = ({simplified}) => {
    const count = simplified ? 10 : 100;
    const {data: cryptosList, isFetching } = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // setCryptos(cryptosList?.data?.coins);
        const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));

        setCryptos(filteredData);

    },[cryptosList, searchTerm]);

    if(isFetching) return <Loader/>;

    console.log(cryptos);

    return (
        <>  
            <Title className='main-title'>
                Criptomonedas Actuales
            </Title>
            {!simplified && (
                <div className="search-crypto">
                    <Input placeholder="Buscar Criptomoneda" onChange={(e) => setSearchTerm(e.target.value)}/>
                </div>
            )}
    
            <Row gutter ={[ 32, 32 ]} className="crypto-car-container">
                {cryptos?.map((currency) => (
                    <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.uuid}>
                        <Link to={`/crypto/${currency.uuid}`} key={currency.uuid}>
                            <Card 
                                title={`${currency.rank}.${currency.name}`}
                                extra={<img className="crypto-image" src={currency.iconUrl} alt="cryptopicture"/>}
                                hoverable
                            >
                                <p>Precio: {millify(currency.price)}</p>
                                <p>Cap. del Mercado: {millify(currency.marketCap)}</p>
                                <p>Cambios Diarios: {millify(currency.change)}%</p>
                            </Card>
                        </Link>

                    </Col>
                ))}

            </Row>
        </>
    )
}

export default Cryptocurrencies;