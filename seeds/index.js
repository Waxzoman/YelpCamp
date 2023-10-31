const mongoose = require('mongoose');
const port = 3000;
const cities = require('./cities');
const {places, descriptors} = require('./seedHelpers')
const Campground = require('../models/campground');

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp');

const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error:"));
db.once('open', ()=>{
    console.log('database connected')
})

const sample = array => array[Math.floor(Math.random()* array.length)]


const seedDB = async () => {
    await Campground.deleteMany({});
    for(let i =0; i<400; i++){
        const random1000 = Math.floor(Math.random()* 1000);
        const price = Math.floor(Math.random()* 20) + 10;
        const camp = new Campground({
            author: '64f497499af48b22c29e7e3a',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            price,
            geometry: {
                type: 'Point',
                coordinates: [ 
                    cities[random1000].longitude,
                    cities[random1000].latitude
                 ]
            }, 
            images: [
                  {
                    url: 'https://res.cloudinary.com/dbw347frm/image/upload/v1694131067/YelpCamp/gorhsmzrxth2htnd5kbi.jpg',
                    filename: 'YelpCamp/gorhsmzrxth2htnd5kbi',
                  },
                  {
                    url: 'https://res.cloudinary.com/dbw347frm/image/upload/v1694131067/YelpCamp/rlwhcpujtjpeyoyoo0hp.jpg',
                    filename: 'YelpCamp/rlwhcpujtjpeyoyoo0hp',
                  }
            ]
        })
        await camp.save();
    }
}
seedDB().then(()=>{
    mongoose.connection.close()
})