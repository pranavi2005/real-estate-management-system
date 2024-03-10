import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const PropertyDetails = () => {
  const [expandedProperty, setExpandedProperty] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleExpandClick = (index) => {
    setExpandedProperty(expandedProperty === index ? null : index);
  };

  // Sample property data
  const properties = [
    {
      title: 'Welcome to a life of splendour at GUNADALA',
      subheader: 'October 28, 2022',
      image: '/b2.jpg',
      alt: 'VILLA',
      description: 'BANDI YALAMANCHALI is the prestigious project in Gunadala.\n62 VILLAS 11 ACRES',
      details: [
        'BANDI YALAMANCHALI project is currently under-construction and will be ready for possession by June 2024. The construction is in full swing and the foundation work is under process.',
        'Part payment on initial reservation of Villa.',
        'A 1BHK (1BHK+1T + Study Room) apartment with total area of 512 sq ft ()is priced Rs 81 lakh.',
        'AMENITIES: -Swimming Pool  -Children’s Play Area  -Banquet Hall  and many more.',
      ],
    },
    {
      title: 'Welcome to a life of splendour at TADEPALLI',
      subheader: 'October 28, 2022',
      image: '/b1.jpg',
      alt: 'APPARTMENT',
      description: 'LOTUS is the prestigious project in Tadepalli.',
      details: [
        'LOTUS project is currently under-construction and will be ready for possession by January 2023. The construction is in full swing and the foundation work is under process.',
        'Part payment on initial reservation of Flat.',
        'Built Up area: 1680 sq.ft. (156.08 sq.m.)\nCarpet area: 1350 sq.ft. (125.42 sq.m.)',
        '₹ 79 Lac+ Govt Charges & Tax\n@ 4,438 per sq.ft. (Negotiable)',
      ],
    },
    {
      title: 'SPACIOUS LAND FOR SALE!!',
      subheader: 'December 28, 2022',
      image: '/b3.jpg',
      alt: 'LAND',
      description: 'LAND for sale at miriyalagudem.\n8 ACRES',
      details: [
        'This project is currently vacent and has high high demand. This land could be used for cultivation.',
        'Part payment on initial reservation of Land.',
        'For further details of land you can contact us!',
      ],
    },
    {
      title: 'LIVE A JOYFUL LIFE AT BHAVANIPURAM',
      subheader: 'October 28, 2022',
      image: '/b4.jpg',
      alt: 'VILLA',
      description: 'KONERU is the prestigious project at bhavanipuram.\n13 floors apartment',
      details: [
        'KONERU project is currently under-construction and will be ready for possession by October 2026. The construction is in full swing and the foundation work is under process.',
        'Part payment on initial reservation of your flat.',
        'A 1BHK (1BHK+1T + Study Room) apartment with total area of 812 sq ft ()is priced Rs 96 lakh.',
        'AMENITIES: -Swimming Pool  -Children’s Play Area  -Banquet Hall  and many more.',
      ],
    },
  ];

  // Filtered properties based on search term
  const filteredProperties = properties.filter((property) =>
    property.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        {filteredProperties.map((property, index) => (
          <Card key={index} sx={{ maxWidth: 345 }}>
            <CardHeader
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={property.title}
              subheader={property.subheader}
            />
            <CardMedia component="img" height="194" image={property.image} alt={property.alt} />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {property.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <ExpandMore
                expand={expandedProperty === index}
                onClick={() => handleExpandClick(index)}
                aria-expanded={expandedProperty === index}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expandedProperty === index} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph color={'red'}>
                  DETAILS:
                </Typography>
                {property.details.map((detail, index) => (
                  <Typography key={index} paragraph color={'darkblue'}>
                    {detail}
                  </Typography>
                ))}
              </CardContent>
            </Collapse>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PropertyDetails;
