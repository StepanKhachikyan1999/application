import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { green } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import "./ButtonType.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Upload } from '../Upload';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`action-tabpanel-${index}`}
            aria-labelledby={`action-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `action-tab-${index}`,
        'aria-controls': `action-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 700,
        position: 'relative',
        height: 51,
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    fabGreen: {
        color: theme.palette.common.white,
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[600],
        },
    },
}));

const settings = {
    dot: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
};

export default function ButtonType(props) {

    const [title, setTitle] = useState("React App")
    const [data, setData] = useState([])
    const [category, setCategory] = useState("jewelery")

    useEffect(() => {
        const axiosData = async () => {
            const result = await axios(
                `https://fakestoreapi.com/products/category/${category}`
            );

            setData(result.data)
        }
        axiosData();
    }, [category])
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="action tabs example"
                >
                    <Tab  onClick={() => setCategory("jewelery")} label="jewelery" {...a11yProps(0)} />
                    <Tab  onClick={() => setCategory("electronics")} label="Electronics" {...a11yProps(1)} />
                    <Tab  onClick={() => setCategory("women's clothing")} label="women's clothing" {...a11yProps(2)} />
                    <Tab  onClick={() => setCategory("men's clothing")} label="men's clothing" {...a11yProps(3)} />
                </Tabs>
            </AppBar>

           
            
            <div>
            <Slider {...settings}>
                {data.map((item) => {
                    return  <img src={item.image} className="categoryImage"  />
                }
               )}
               </Slider>
            </div>
            <Upload />
        </div>
    );
}