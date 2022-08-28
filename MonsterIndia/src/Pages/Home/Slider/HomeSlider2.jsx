
import React from 'react';
import {Text, Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import Slider from 'react-slick';


// Slider

const settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
};

export default function HomeSlider2() {

  const [slider, setSlider] = React.useState(1)

  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // Images for slide2

  const cards = [
    {
        "id" : 1,
        "name" : "Hucon Solution",
        "image" : "https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/january/Vt3mzVSvBb6NkFhELbk0NzIv3sSmcRm9LFUGC4rG.jpeg",
        "mkt" : "Customer support Exwcutive ",
        "price" : "Experience: 0-5 years",
        "mrp" : "location: Hyderabad"
    },
    {
        "id" : 2,
        "name" : "Teleperformance Global",
        "image" :  'https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/april/Mp2fRLKl9YmxG7YBxanGbRYdkzMayIcwhiEe8HyD.jpeg',
        "mkt" : "Email and Chat process",
        "price" : "Experience: 0-3 years",
        "mrp" : "location: Chennai"
    },
    {
        "id" : 3,
        "name" : "Larsen & Tubro",
        "image" :  'https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2021/august/6P61ns5WeVzLF5ajZVTMDC20iVeCX7moBrZxkFY6.jpeg',
        "mkt" : "Sourcing Executive",
        "price" :"Experience: 2-5 years" ,
        "mrp" : "location: Mumbai"
    },
    {
        "id" : 4,
        "name" : "Hucon Solution",
        "image" : "https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/january/Vt3mzVSvBb6NkFhELbk0NzIv3sSmcRm9LFUGC4rG.jpeg",
        "mkt" : "Customer support Exwcutive ",
        "price" : "Experience: 0-5 years",
        "mrp" : "location: Hyderabad"
    },
    {
        "id" : 5,
        "name" : "Teleperformance Global",
        "image" :  'https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/april/Mp2fRLKl9YmxG7YBxanGbRYdkzMayIcwhiEe8HyD.jpeg',
        "mkt" : "Email and Chat process",
        "price" : "Experience: 0-3 years",
        "mrp" : "location: Chennai"
    },
    {
        "id" : 6,
        "name" : "Larsen & Tubro",
        "image" :  'https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2021/august/6P61ns5WeVzLF5ajZVTMDC20iVeCX7moBrZxkFY6.jpeg',
        "mkt" : "Sourcing Executive",
        "price" :"Experience: 2-5 years" ,
        "mrp" : "location: Mumbai"
    },

    {
        "id" : 7,
        "name" : "Hucon Solution",
        "image" : "https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/january/Vt3mzVSvBb6NkFhELbk0NzIv3sSmcRm9LFUGC4rG.jpeg",
        "mkt" : "Customer support Exwcutive ",
        "price" : "Experience: 0-5 years",
        "mrp" : "location: Hyderabad"
    },

    {
        "id" : 8,
        "name" : "Teleperformance Global",
        "image" :  'https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/april/Mp2fRLKl9YmxG7YBxanGbRYdkzMayIcwhiEe8HyD.jpeg',
        "mkt" : "Email and Chat process",
        "price" : "Experience: 0-3 years",
        "mrp" : "location: Chennai"
    },
    {
        "id" : 9,
        "name" : "Larsen & Tubro",
        "image" :  'https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2021/august/6P61ns5WeVzLF5ajZVTMDC20iVeCX7moBrZxkFY6.jpeg',
        "mkt" : "Sourcing Executive",
        "price" :"Experience: 2-5 years" ,
        "mrp" : "location: Mumbai"
    },
    {
        "id" : 10,
        "name" : "Hucon Solution",
        "image" : "https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/january/Vt3mzVSvBb6NkFhELbk0NzIv3sSmcRm9LFUGC4rG.jpeg",
        "mkt" : "Customer support Exwcutive ",
        "price" : "Experience: 0-5 years",
        "mrp" : "location: Hyderabad"
    },
    
    
  ];
 
 

  return (

    <div style={{height:"170px",width:"900px",marginLeft:"140px",backgroundColor:"white",boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"}
    }>
    <h1 style={{fontSize:"24px",fontWeight:"bold",marginTop:"30px",padding:"20px 0 0 30px"}}>Work From Home Jobs</h1>
    <Box
      position={'relative'}
      height={'auto'}
      width={'900px'}
      bg={'white'}
      overflow={'hidden'}>

      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      {/* Left Icon */}
         <IconButton
            marginTop={'0px'}
            aria-label="left-arrow"
            color="black"
            colorScheme="white"
            boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px"
            borderRadius="full"
            position="absolute"
            left={side}
            top={top}
            transform={'translate(0%, -50%)'}
            zIndex={2}
            onClick={() => slider?.slickPrev()}>
            <ChevronLeftIcon/>
        </IconButton>

      {/* Right Icon */}
        <IconButton
            marginTop={'0px'}
            aria-label="right-arrow"
            color="black"
            colorScheme="white"
            boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px"
            borderRadius="full"
            position="absolute"
            right={side}
            top={top}
            transform={'translate(0%, -50%)'}
            zIndex={2}
            onClick={() => slider?.slickNext()}>
            <ChevronRightIcon/>
        </IconButton>

      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url,index) => (
          <Box
                display={"flex"}
                ml={index > 0 ? "30px" :"30px"}
                mr={10}
                marginTop={8}
                key={index}
                height={'150px'}
                width={'auto'}
                position="relative"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"  
          >
                <Box  fontSize='sm'  rounded={5} p={5} bg={'rgb(245,245,245)'} width={'240px'} height={'auto'}>
                    <Text color={'black'} fontWeight={500}>{url.name}</Text>
                    <Text style={{color:"#6F7284",fontWeight:"500px"}}>{url.mkt}  </Text>
                    <Text style={{color:"#EF4281"}}>{url.price}</Text>
                    <Text color={'#717486'} >{url.mrp}</Text> 
                </Box>
           
          </Box>
        ))}
      </Slider>
    </Box>
    </div>
  );
}