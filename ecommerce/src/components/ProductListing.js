import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';
import { loadUsersAPI } from '../Redux/api';
import { loadUsersStart, setProducts } from '../Redux/action';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Divider, Grid, Stack } from '@mui/material';
import { grey } from '@mui/material/colors';
import CustomButton from './materialui/CustomButton';



export default function ProductListing() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const dispatch = useDispatch();
    const items = useSelector((state) => state);

    /*  useEffect(() => {
         const fetchProducts = async () => {
             const response = await axios.get("https://fakestoreapi.com/products");
             setData(await response.clone.json())
             setFilter(await response.json())
             console.log(filter);
         }
         fetchProducts();
     }, []);   */
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((response) => setFilter(response.data))
        console.log(filter);
    }, [])

    console.log(filter);


    return (
        <div className='row  '>
        {
          filter.map((user, i) =>{
            return (
              
              <div className='col-12 col-lg-3 col-md-6 ' key={i}>
              <div className="card card__xtra">
                <div className='card__imgcontainer'>
                <img src={user.image} className="card-img-top" alt={user.title} />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{user.title.substring(0, 15)}...</h5>
                  <p className="card-text">{user.description.substring(0, 45)}...</p>
                  <Link to={`/view/${user.id}`} className="btn btn-success">View detail</Link>
                </div>
              </div>
              </div>
              
            )
          })
        }
   
        
      </div>

    )

};




