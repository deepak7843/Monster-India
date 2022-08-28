
import React from 'react';
import {Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import Slider from 'react-slick';

// Slider

const settings = {
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: false,
};

export default function HomeSlider1() {

  const [slider, setSlider] = React.useState(1)

  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // Images for slide1

  const cards = [
    {
        "id" : 1,
        "name" : "Pure Nutrition Progut Plus Veg Capsules 60's",
        "image" : "https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/january/Vt3mzVSvBb6NkFhELbk0NzIv3sSmcRm9LFUGC4rG.jpeg",
        "mkt" : "Mkt: Herbs Nutriproducts Pvt. Ltd. ",
        "price" : "Rs. 1,499.00",
        "mrp" : "Rs. 1799.00"
    },
    {
        "id" : 2,
        "name" : "INLIFE Triphala Extract Capsules 60's",
        "image" :  'https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/april/Mp2fRLKl9YmxG7YBxanGbRYdkzMayIcwhiEe8HyD.jpeg',
        "mkt" : "Mkt: Inlife Pharma Private Limited",
        "price" : " Rs. 243.27",
        "mrp" : "Rs. 499.00"
    },
    {
        "id" : 3,
        "name" : "INLIFE Guggul Extract Capsules 60's",
        "image" :  'https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/august/nGqLoPmZun0GxVuKOgaEBB7Q63BGdyOPqHxRpTCl.jpeg',
        "mkt" : "Mkt: Inlife Pharma Private Limited",
        "price" :" Rs. 329.34" ,
        "mrp" : "Rs. 499.00"
    },
    {
        "id" : 4,
        "name" : "INLIFE Shatavari Extract Capsules 60's",
        "image" : 'https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2021/october/S75zzSg0xsbyLirgPUWCqPUuUT9LpsXVQp6uLb7B.jpeg',
        "mkt" : "Mkt: Inlife Pharma Private Limited",
        "price" : " Rs. 289.42",
        "mrp" : "Rs. 499.00"
    },
    {
        "id" : 5,
        "name" : "HealthVit Ginkgo Biloba 180 mg Capsules 60's",
        "image" :  'https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2021/november/aGHVfuwztrBLUqQ4hUb3uhV1zgbGZTf9VaoKyRkm.jpeg',
        "mkt" :"Mkt: West Coast Works Ltd" ,
        "price" :" Rs. 860.00" ,
        "mrp" : "Rs. 1000.00"
    },
    {
        "id" : 6,
        "name" :  "HealthVit Horse Chestnut 500 mg Capsules 60's",
        "image" : 'https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/january/I32QY2OzbvdjaGT1p5mPc7YPDdxkEOAMeyIt3vHT.jpeg',
        "mkt" : "Mkt: West Coast Works Ltd",
        "price" : " Rs. 688.00",
        "mrp" : "Rs. 800.00"
    },

    {
        "id" : 7,
        "name" :  "INLIFE Diastan Plus Diabetic Care Powder 300 gm",
        "image" : 'https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/march/THyXXtT5sPRi1gVwdxkrksZzSsv7f5UkDFwkaQJD.jpeg',
        "mkt" :"Mkt: Inlife Pharma Pvt Limited" ,
        "price" : " Rs. 495.00",
        "mrp" : "Rs. 900.00"
    },

    {
        "id" : 8,
        "name" :  "Keral-Ayurveda Extract Capsules 60's",
        "image" : ' https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2021/june/ZnNwNuQzQu0ja8wsf8vGg4ajsi5RRpd7vlOX71RC.jpeg',
        "mkt" : "Mkt: West Coast  Ltd",
        "price" : " Rs. 387.00",
        "mrp" : "Rs. 499.00"
    },
    {
        "id" : 9,
        "name" : "INLIFE Guggul Extract Capsules 60's",
        "image" :  'https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/april/3u92a6TD7MslWbPJic4wSzABsLPBwtL0mrthYvxW.jpeg',
        "mkt" : "Mkt: Inlife Pharma Private Limited",
        "price" :" Rs. 329.34" ,
        "mrp" : "Rs. 499.00"
    },
    {
        "id" : 10,
        "name" : "INLIFE Shatavari Extract Capsules 60's",
        "image" : 'https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/may/csLqDvD5G1J8NuUjYIXIS9vjE8FQMQjWJ6SRP4aj.jpeg',
        "mkt" : "Mkt: Inlife Pharma Private Limited",
        "price" : " Rs. 289.42",
        "mrp" : "Rs. 459.00"
    },
    
    
  ];
 
 

  return (
    <div style={{height:"180px",width:"1200px",margin:"20px 0 0 140px",backgroundColor:"white",boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"}
    }>
    <h1 style={{fontSize:"22px",fontWeight:"bold",letterSpacing:"2px",padding:"20px 0 10px 30px",color:"rgb(60 60 60)"}}>Employers of Choice</h1>
    <Box
      position={'relative'}
      height={'auto'}
      width={'100%'}
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
            marginTop={8}
            key={index}
            height={'auto'}
            width={'auto'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
          >
            <Box fontSize='sm'  rounded={10} p={4}  ml={8}  bg={'white'} width={'100%'} height={'auto'}>
              <img style={{paddingLeft:"14px",paddingTop:"-8px",marginTop:"-13px"}} src={url.image} alt=''/> 
            </Box> 
          </Box>
        ))}
      </Slider>
    </Box>
    </div>
  );
}