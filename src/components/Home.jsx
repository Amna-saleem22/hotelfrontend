import React, { useRef ,useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Chip,
  Avatar,
  IconButton,
  Paper,
  Stack,
 
} from '@mui/material';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SpaIcon from '@mui/icons-material/Spa';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import PoolIcon from '@mui/icons-material/Pool';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import DiamondIcon from '@mui/icons-material/Diamond';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarIcon from '@mui/icons-material/Star';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { SPACING, CONTAINER, COLORS } from '../theme/designSystem';
import { useThemeMode } from '../context/ThemeContext';

const Home = () => {
  const { isDark } = useThemeMode();

  const textPrimary   = isDark ? '#F0EBE1' : '#1A1612';
  const textSecondary = isDark ? 'rgba(240,235,225,0.68)' : 'rgba(26,22,18,0.65)';
  const textMuted     = isDark ? 'rgba(240,235,225,0.55)' : 'rgba(26,22,18,0.52)';
  const sectionBg     = isDark ? '#0A0909' : '#F7F4EF';
  const sectionAltBg  = isDark
    ? 'linear-gradient(135deg, #0a0a0a 0%, #111111 100%)'
    : 'linear-gradient(135deg, #EEE9E2 0%, #F7F4EF 100%)';
  const cardBg        = isDark ? 'rgba(22,19,14,0.92)' : 'rgba(255,253,249,0.97)';
  const cardBorder    = isDark ? 'rgba(201,169,110,0.14)' : 'rgba(201,169,110,0.2)';
  const cardBorderHover = isDark ? 'rgba(201,169,110,0.36)' : 'rgba(201,169,110,0.42)';

  const heroRef = useRef(null);
  const featuredRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const isFeaturedInView = useInView(featuredRef, { once: true, amount: 0.3 });
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.3 });
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.3 });
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  

  const services = [
    { 
      icon: <SpaIcon sx={{ fontSize: 40 }} />, 
      title: 'Luxury Spa', 
      description: 'Rejuvenate with our signature treatments and therapies',
      color: COLORS.primaryLight
    },
    { 
      icon: <RestaurantIcon sx={{ fontSize: 40 }} />, 
      title: 'Fine Dining', 
      description: 'Michelin-starred culinary experience with ocean views',
      color: COLORS.primaryLight
    },
    { 
      icon: <PoolIcon sx={{ fontSize: 40 }} />, 
      title: 'Infinity Pool', 
      description: 'Stunning ocean-view infinity pool with cabana service',
      color: COLORS.primaryLight
    },
    { 
      icon: <FitnessCenterIcon sx={{ fontSize: 40 }} />, 
      title: 'Fitness Center', 
      description: 'State-of-the-art equipment with personal trainers',
      color: COLORS.primaryLight
    },
    { 
      icon: <LocalBarIcon sx={{ fontSize: 40 }} />, 
      title: 'Sky Bar', 
      description: 'Premium cocktails and champagne with panoramic views',
      color: COLORS.primaryLight
    },
    { 
      icon: <DiamondIcon sx={{ fontSize: 40 }} />, 
      title: 'Concierge', 
      description: '24/7 personalized service for your every need',
      color: COLORS.primaryLight
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Jennifer Lawrence',
      role: 'Travel Blogger',
      comment: 'An absolutely breathtaking experience. The attention to detail and service was impeccable. The Presidential Suite exceeded all expectations.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108777-467ef4b7b4c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    {
      id: 2,
      name: 'Robert Downey Jr.',
      role: 'Business Executive',
      comment: 'The Royal Penthouse offers unparalleled luxury. The views are spectacular and the service is world-class. My favorite stay in the city.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    {
      id: 3,
      name: 'Emma Watson',
      role: 'Actor',
      comment: 'The spa treatments were divine and the staff made me feel like royalty. Already planning my next visit with family.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    {
      id: 4,
      name: 'George Clooney',
      role: 'Film Director',
      comment: 'This is what luxury truly means. Every detail is carefully curated for the discerning traveler. Highly recommended.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 1
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const scaleOnHover = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };




const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format", alt: "Grand lobby with soaring chandelier", category: "Lobby", tall: true },
  { id: 2, src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&auto=format", alt: "Elegant suite with panoramic city view", category: "Room" },
  { id: 3, src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&auto=format", alt: "Infinity pool at sunset", category: "Pool" },
  { id: 4, src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&auto=format", alt: "Fine dining with ocean view", category: "Restaurant", wide: true },
  { id: 5, src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&auto=format", alt: "Hotel exterior at dusk", category: "Exterior" },
  { id: 6, src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&auto=format", alt: "Serene spa with marble and candlelight", category: "Spa" },
  { id: 7, src: "https://images.unsplash.com/photo-1561501878-aabd62634533?w=900&auto=format", alt: "Grand ballroom with crystal chandeliers", category: "Events", tall: true },
  { id: 8, src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=900&auto=format", alt: "Sky bar with panoramic rooftop views", category: "Bar" },
  { id: 9, src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&auto=format", alt: "Luxury hotel pool terrace", category: "Pool" },
];

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const [selectedImage, setSelectedImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeGalleryFilter, setActiveGalleryFilter] = useState('All');

  const filteredGallery = activeGalleryFilter === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeGalleryFilter);

  const openLightbox = (img, idx) => {
    const i = idx != null ? idx : filteredGallery.findIndex(g => g === img);
    setLightboxIndex(i >= 0 ? i : 0);
    setSelectedImage(img);
  };

  const closeLightbox = () => { setSelectedImage(null); };

  const nextLightbox = (e) => {
    e.stopPropagation();
    const next = (lightboxIndex + 1) % filteredGallery.length;
    setLightboxIndex(next);
    setSelectedImage(filteredGallery[next]);
  };

  const prevLightbox = (e) => {
    e.stopPropagation();
    const prev = (lightboxIndex - 1 + filteredGallery.length) % filteredGallery.length;
    setLightboxIndex(prev);
    setSelectedImage(filteredGallery[prev]);
  };

  return (
    <Box sx={{ overflow: 'hidden' }}>
      {/* Hero Section */}
      <Box
        ref={heroRef}
        component={motion.section}
        style={{
          opacity: heroOpacity,
          scale: heroScale,
          y: heroY,
        }}
        sx={{
          height: '100vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: isDark
            ? 'linear-gradient(135deg, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.7) 100%), url("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80")'
            : 'linear-gradient(135deg, rgba(240,235,225,0.87) 0%, rgba(220,210,195,0.76) 100%), url("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(201,169,110,0.07) 0%, transparent 55%)',
            pointerEvents: 'none',
          },
        }}
      >
        <Container maxWidth={CONTAINER.content}>
          <Grid container spacing={SPACING.gridGap} alignItems="center">
            <Grid item xs={12} md={8}>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={fadeInUp}>
                  <Typography
                    variant="overline"
                    sx={{
                      color: COLORS.primaryLight,
                      fontSize: '1.2rem',
                      letterSpacing: 3,
                      mb: 2,
                      display: 'block',
                    }}
                  >
                    WELCOME TO LUXURY
                  </Typography>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Typography
                    variant="h1"
                    sx={{
                      color: textPrimary,
                      fontSize: { xs: '2.5rem', md: '4.5rem', lg: '5.5rem' },
                      fontWeight: 700,
                      lineHeight: 1.1,
                      mb: 2,
                      fontFamily: '"Playfair Display", Georgia, serif',
                    }}
                  >
                    Experience
                    <Typography
                      component="span"
                      sx={{
                        display: 'block',
                        background: isDark
                          ? `linear-gradient(135deg, #F0EBE1 20%, ${COLORS.primaryLight} 75%)`
                          : `linear-gradient(135deg, #3D2B1F 20%, ${COLORS.primaryDark} 75%)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontSize: { xs: '3rem', md: '5rem', lg: '6rem' },
                        fontFamily: '"Playfair Display", Georgia, serif',
                      }}
                    >
                      Ultimate Luxury
                    </Typography>
                  </Typography>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: textSecondary,
                      maxWidth: '600px',
                      mb: 4,
                      fontSize: { xs: '1rem', md: '1.2rem' },
                    }}
                  >
                    Indulge in unparalleled comfort and sophistication at our award-winning hotel. 
                    Where every moment is crafted to perfection.
                  </Typography>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <motion.div whileHover="hover" variants={scaleOnHover}>
                      <Link to="/login" >
                      <Button
                        variant="contained"
                        size="large"
                        endIcon={<ArrowForwardIcon />}
                        sx={{
                          background: `linear-gradient(135deg, ${COLORS.primaryLight} 30%, ${COLORS.primaryDark} 90%)`,
                          color: '#0A0909',
                          fontWeight: 700,
                          fontSize: '1.0rem',
                          letterSpacing: '0.04em',
                          py: 1.5,
                          px: 4,
                          borderRadius: 2,
                          boxShadow: '0 8px 24px rgba(201,169,110,0.25)',
                          '&:hover': {
                            background: `linear-gradient(135deg, #DFC085 0%, ${COLORS.primaryDark} 100%)`,
                            boxShadow: '0 14px 36px rgba(201,169,110,0.4)',
                          },
                        }}
                      >
                        Book Your Stay
                      </Button>
                      </Link>
                    </motion.div>

                    <motion.div whileHover="hover" variants={scaleOnHover}>
                      <Button
    component={Link}
    to="/rooms"
    variant="text"
    endIcon={<ArrowForwardIcon />}
    sx={{
      color: COLORS.primaryLight,
      fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
      py: { xs: 1.5, sm: 2 },
      px: { xs: 3, sm: 4 },
      position: "relative",
      textTransform: "none",

      "&::after": {
        content: '""',
        position: "absolute",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: 0,
        height: "2px",
        background: COLORS.primaryLight,
        transition: "width 0.3s ease",
      },

      "&:hover::after": {
        width: "80%",
      },

      "&:hover": {
        backgroundColor: "transparent",
        color: COLORS.primaryLight,
      },
    }}
  >
    Explore All Luxury Rooms
  </Button>
                    </motion.div>
                  </Stack>
                </motion.div>
              </motion.div>
            </Grid>
          </Grid>
        </Container>

        {/* Scroll Indicator */}
        <motion.div
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            bottom: 40,
            left: '50%',
            transform: 'translateX(-50%)',
            cursor: 'pointer',
          }}
        >
          <IconButton
            sx={{
              color: COLORS.primaryLight,
              border: `2px solid ${COLORS.borderStrong}`,
              '&:hover': {
                border: `2px solid ${COLORS.primaryLight}`,
                backgroundColor: 'rgba(201,169,110,0.08)',
              },
            }}
            aria-label="Scroll down"
          >
            <KeyboardArrowDownIcon />
          </IconButton>
        </motion.div>
      </Box>

 {/* Hero Section end */}







{/* about Section */}
     
       <style>{`
        /* UNIQUE CLASS NAME - premium-hotel-about */
        .premium-hotel-about {
          background-color: #0A0909;
          padding: 6rem 2rem;
          font-family: 'Inter', 'Helvetica Neue', sans-serif;
          color: #F0EBE1;
          position: relative;
          overflow: hidden;
        }

        .premium-hotel-about::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 0% 50%, rgba(201,169,110,0.08) 0%, transparent 50%);
          pointer-events: none;
        }

        .premium-hotel-container {
          max-width: 1280px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .premium-hotel-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        /* Left Column - Image */
        .premium-hotel-image-wrapper {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8);
          border: 1px solid rgba(201, 169, 110, 0.25);
          opacity: 0;
          transform: translateX(-30px);
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), 
                      transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .premium-hotel-image-wrapper.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .premium-hotel-image {
          width: 100%;
          height: 600px;
          object-fit: cover;
          display: block;
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .premium-hotel-image-wrapper:hover .premium-hotel-image {
          transform: scale(1.05);
        }

        /* Right Column - Content */
        .premium-hotel-content {
          opacity: 0;
          transform: translateX(30px);
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), 
                      transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          transition-delay: 0.2s;
        }

        .premium-hotel-content.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .premium-hotel-heading {
          font-size: clamp(2rem, 4vw, 3rem);
          font-family: 'Playfair Display', Georgia, serif;
          font-weight: 400;
          letter-spacing: 0.5px;
          margin: 0 0 0.5rem 0;
          color: #F0EBE1;
          line-height: 1.2;
        }

        .premium-hotel-heading span {
          color: #C9A96E;
          font-weight: 600;
          display: block;
          margin-top: 0.5rem;
        }

        .premium-hotel-description {
          font-size: 1.0625rem;
          line-height: 1.85;
          color: rgba(240, 235, 225, 0.7);
          margin: 2rem 0 2rem 0;
          max-width: 500px;
        }

        .premium-hotel-description p {
          margin-bottom: 1.5rem;
        }

        .premium-hotel-description p:last-child {
          margin-bottom: 0;
        }

        .premium-hotel-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          color: #C9A96E;
          border: 1.5px solid #C9A96E;
          border-radius: 50px;
          padding: 1rem 2.5rem;
          font-size: 0.9375rem;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          z-index: 1;
        }

        .premium-hotel-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #C9A96E 0%, #A68550 100%);
          transition: left 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: -1;
        }

        .premium-hotel-button:hover {
          color: #0A0909;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(201, 169, 110, 0.3);
        }

        .premium-hotel-button:hover::before {
          left: 0;
        }

        /* Decorative Elements */
        .premium-hotel-accent {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 350px;
          height: 350px;
          background: radial-gradient(circle at 100% 100%, rgba(201,169,110,0.08) 0%, transparent 70%);
          pointer-events: none;
          z-index: 1;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .premium-hotel-image {
            height: 500px;
          }
        }

        @media (max-width: 768px) {
          .premium-hotel-about {
            padding: 4rem 1.5rem;
          }

          .premium-hotel-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }

          .premium-hotel-image-wrapper {
            max-width: 600px;
            margin: 0 auto;
          }

          .premium-hotel-image {
            height: 400px;
          }

          .premium-hotel-content {
            text-align: center;
          }

          .premium-hotel-description {
            margin-left: auto;
            margin-right: auto;
          }

          .premium-hotel-button {
            margin: 0 auto;
          }
        }

        @media (max-width: 480px) {
          .premium-hotel-about {
            padding: 3rem 1rem;
          }

          .premium-hotel-image {
            height: 300px;
          }

          .premium-hotel-heading {
            font-size: 1.75rem;
          }

          .premium-hotel-description {
            font-size: 1rem;
          }

          .premium-hotel-button {
            padding: 0.875rem 2rem;
            font-size: 0.9rem;
          }
        }

        /* Smooth scrolling for the whole page */
        html { scroll-behavior: smooth; }

        /* About section light mode */
        [data-theme="light"] .premium-hotel-about {
          background-color: #F7F4EF;
          color: #1A1612;
        }
        [data-theme="light"] .premium-hotel-about::before {
          background: radial-gradient(circle at 0% 50%, rgba(201,169,110,0.11) 0%, transparent 50%);
        }
        [data-theme="light"] .premium-hotel-heading { color: #1A1612; }
        [data-theme="light"] .premium-hotel-description { color: rgba(26,22,18,0.7); }
      `}</style>

      <section ref={sectionRef} className="premium-hotel-about">
        <div className="premium-hotel-container">
          <div className="premium-hotel-grid">
            {/* Left Column - Image */}
            <div className={`premium-hotel-image-wrapper ${isVisible ? 'visible' : ''}`}>
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
                alt="Luxury hotel exterior with infinity pool"
                className="premium-hotel-image"
              />
            </div>

            {/* Right Column - Content */}
            <div className={`premium-hotel-content ${isVisible ? 'visible' : ''}`}>
              <h2 className="premium-hotel-heading">
                About Our
                <span>Luxury Hotel</span>
              </h2>
              
              <div className="premium-hotel-description">
                <p>
                  Step into a world of timeless elegance where every detail has been 
                  meticulously curated to exceed the expectations of the most discerning 
                  travelers. Our sanctuary offers an intimate escape from the ordinary.
                </p>
                <p>
                  From the moment you arrive, experience unparalleled comfort and 
                  personalized service that anticipates your every need. Each space 
                  tells a story of sophisticated design and uncompromising luxury.
                </p>
              </div>
<Link to="/about" >
              <button className="premium-hotel-button">
             About Our Hotel
              </button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative accent */}
        <div className="premium-hotel-accent"></div>
      </section>
{/* about Section end */  }




{/* ═══ GALLERY SECTION — Premium Redesign ═══ */}
<section className="lx-gallery">
  <style>{`
    .lx-gallery {
      padding: 90px 24px;
      background-color: #0A0909;
      font-family: 'Inter', sans-serif;
      overflow: hidden;
      position: relative;
      transition: background-color 0.38s ease;
    }
    [data-theme="light"] .lx-gallery { background-color: #EEE9E2; }
    .lx-gallery::before {
      content: ''; position: absolute; inset: 0;
      background: radial-gradient(ellipse at 80% 15%, rgba(201,169,110,0.07) 0%, transparent 60%);
      pointer-events: none;
    }
    [data-theme="light"] .lx-gallery::before {
      background: radial-gradient(ellipse at 80% 15%, rgba(201,169,110,0.1) 0%, transparent 60%);
    }
    .lx-gallery-inner { max-width: 1280px; margin: 0 auto; position: relative; z-index: 1; }
    .lx-gallery-overline {
      text-align: center; font-size: 0.7rem; letter-spacing: 5px;
      text-transform: uppercase; color: #C9A96E; font-weight: 600; margin: 0 0 14px;
    }
    .lx-gallery-title {
      text-align: center;
      font-family: 'Playfair Display', Georgia, serif;
      font-size: clamp(2rem, 5vw, 3rem);
      font-weight: 300; letter-spacing: 2px; text-transform: uppercase;
      color: #F0EBE1; margin: 0 0 10px;
      transition: color 0.38s ease;
    }
    [data-theme="light"] .lx-gallery-title { color: #1A1612; }
    .lx-gallery-title b { color: #C9A96E; font-weight: 600; }
    .lx-gallery-divider {
      width: 60px; height: 1px;
      background: linear-gradient(90deg, transparent, #C9A96E, transparent);
      margin: 14px auto 18px;
    }
    .lx-gallery-sub {
      text-align: center; font-size: 0.95rem;
      color: rgba(240,235,225,0.55); margin: 0 0 44px;
      transition: color 0.38s ease;
    }
    [data-theme="light"] .lx-gallery-sub { color: rgba(26,22,18,0.52); }
    .lx-gallery-filters {
      display: flex; justify-content: center; gap: 8px;
      flex-wrap: wrap; margin-bottom: 40px;
    }
    .lx-gf-btn {
      background: transparent;
      border: 1px solid rgba(201,169,110,0.22);
      color: rgba(240,235,225,0.62);
      padding: 6px 20px; border-radius: 50px;
      font-size: 0.72rem; letter-spacing: 1.5px; text-transform: uppercase;
      cursor: pointer; font-family: 'Inter', sans-serif; font-weight: 500;
      transition: all 0.25s ease; outline: none;
    }
    [data-theme="light"] .lx-gf-btn {
      color: rgba(26,22,18,0.58); border-color: rgba(201,169,110,0.28);
    }
    .lx-gf-btn:hover, .lx-gf-btn.active {
      background: rgba(201,169,110,0.12); border-color: #C9A96E; color: #C9A96E;
    }
    .lx-gallery-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: 240px;
      gap: 14px;
    }
    @media (max-width: 1100px) { .lx-gallery-grid { grid-template-columns: repeat(3, 1fr); } }
    @media (max-width: 768px)  { .lx-gallery-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 200px; } }
    @media (max-width: 480px)  { .lx-gallery-grid { grid-template-columns: 1fr; grid-auto-rows: 220px; } }
    .lx-gi {
      position: relative; overflow: hidden; border-radius: 10px; cursor: pointer;
      border: 1px solid rgba(201,169,110,0.1);
      background-color: #141210;
      transition: transform 0.4s cubic-bezier(0.4,0,0.2,1), box-shadow 0.4s ease, border-color 0.38s ease;
    }
    [data-theme="light"] .lx-gi { background-color: #d4cfc9; border-color: rgba(201,169,110,0.16); }
    .lx-gi:hover {
      transform: translateY(-5px) scale(1.01);
      border-color: rgba(201,169,110,0.5);
      box-shadow: 0 24px 60px rgba(0,0,0,0.55), 0 0 0 1px rgba(201,169,110,0.1);
      z-index: 3;
    }
    [data-theme="light"] .lx-gi:hover {
      box-shadow: 0 24px 60px rgba(26,22,18,0.2), 0 0 0 1px rgba(201,169,110,0.2);
    }
    .lx-gi.tall { grid-row: span 2; }
    .lx-gi.wide { grid-column: span 2; }
    @media (max-width: 480px) { .lx-gi.tall, .lx-gi.wide { grid-row: span 1; grid-column: span 1; } }
    .lx-gi-img {
      width: 100%; height: 100%; object-fit: cover; display: block;
      transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
    }
    .lx-gi:hover .lx-gi-img { transform: scale(1.12); }
    .lx-gi-overlay {
      position: absolute; inset: 0;
      background: linear-gradient(0deg, rgba(6,5,4,0.88) 0%, rgba(6,5,4,0.2) 45%, transparent 100%);
      display: flex; flex-direction: column; justify-content: flex-end;
      padding: 18px 20px; opacity: 0; transition: opacity 0.35s ease;
    }
    .lx-gi:hover .lx-gi-overlay { opacity: 1; }
    .lx-gi-cat {
      font-size: 0.67rem; text-transform: uppercase; letter-spacing: 2.5px;
      color: #C9A96E; font-weight: 600; margin-bottom: 5px;
      transform: translateY(10px); transition: transform 0.35s ease;
    }
    .lx-gi:hover .lx-gi-cat { transform: translateY(0); }
    .lx-gi-cap {
      font-size: 0.88rem; color: #F0EBE1; font-weight: 400; margin: 0;
      transform: translateY(10px); transition: transform 0.35s ease 0.04s; line-height: 1.4;
    }
    .lx-gi:hover .lx-gi-cap { transform: translateY(0); }
    .lx-gi-expand {
      position: absolute; top: 12px; right: 12px;
      width: 30px; height: 30px; border-radius: 50%;
      background: rgba(10,9,8,0.5); border: 1px solid rgba(201,169,110,0.4);
      display: flex; align-items: center; justify-content: center;
      color: #C9A96E; font-size: 14px;
      opacity: 0; transform: scale(0.6);
      transition: opacity 0.3s ease, transform 0.3s ease;
    }
    .lx-gi:hover .lx-gi-expand { opacity: 1; transform: scale(1); }
    .lx-gallery-count {
      text-align: center; margin-top: 28px;
      font-size: 0.72rem; letter-spacing: 2px;
      color: rgba(240,235,225,0.35); text-transform: uppercase;
      transition: color 0.38s ease;
    }
    [data-theme="light"] .lx-gallery-count { color: rgba(26,22,18,0.35); }
    .lx-lb {
      position: fixed; inset: 0; background: rgba(4,3,3,0.97);
      backdrop-filter: blur(22px); z-index: 9999;
      display: flex; align-items: center; justify-content: center; padding: 24px;
      animation: lxFadeIn 0.28s ease;
    }
    @keyframes lxFadeIn { from { opacity: 0; } to { opacity: 1; } }
    .lx-lb-wrap {
      position: relative; display: flex; align-items: center; gap: 16px;
      max-width: min(92vw, 1100px);
    }
    .lx-lb-img-box { position: relative; animation: lxSlide 0.3s cubic-bezier(0.4,0,0.2,1); }
    @keyframes lxSlide { from { opacity: 0; transform: scale(0.92); } to { opacity: 1; transform: scale(1); } }
    .lx-lb-img {
      display: block; max-width: 100%; max-height: 80vh; object-fit: contain;
      border-radius: 10px; border: 1px solid rgba(201,169,110,0.25);
      box-shadow: 0 20px 60px rgba(0,0,0,0.7);
    }
    .lx-lb-info {
      position: absolute; bottom: -36px; left: 0; right: 0; text-align: center;
      color: rgba(240,235,225,0.5); font-size: 0.82rem; letter-spacing: 0.5px;
    }
    .lx-lb-close {
      position: absolute; top: -44px; right: 0;
      background: rgba(201,169,110,0.1); border: 1px solid rgba(201,169,110,0.3);
      color: #C9A96E; width: 34px; height: 34px; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      cursor: pointer; font-size: 15px; transition: all 0.25s ease; line-height: 1;
    }
    .lx-lb-close:hover { background: rgba(201,169,110,0.22); transform: scale(1.1); }
    .lx-lb-counter {
      position: absolute; top: -44px; left: 0;
      color: rgba(240,235,225,0.42); font-size: 0.78rem; letter-spacing: 1px;
    }
    .lx-lb-nav {
      background: rgba(201,169,110,0.1); border: 1px solid rgba(201,169,110,0.25);
      color: #C9A96E; width: 46px; height: 46px; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      cursor: pointer; font-size: 22px; flex-shrink: 0; transition: all 0.25s ease;
    }
    .lx-lb-nav:hover { background: rgba(201,169,110,0.22); transform: scale(1.08); }
    @media (max-width: 600px) { .lx-lb-nav { display: none; } .lx-lb-img { max-height: 70vh; } }
  `}</style>

  <div className="lx-gallery-inner">
    <div style={{ textAlign: 'center' }}>
      <p className="lx-gallery-overline">Our Spaces</p>
      <h2 className="lx-gallery-title">Hotel <b>Gallery</b></h2>
      <div className="lx-gallery-divider" />
      <p className="lx-gallery-sub">Explore our world-class luxury spaces</p>
    </div>

    <div className="lx-gallery-filters">
      {['All', 'Lobby', 'Room', 'Pool', 'Restaurant', 'Exterior', 'Spa', 'Events', 'Bar'].map(cat => (
        <button
          key={cat}
          className={`lx-gf-btn${activeGalleryFilter === cat ? ' active' : ''}`}
          onClick={() => setActiveGalleryFilter(cat)}
        >
          {cat}
        </button>
      ))}
    </div>

    <div className="lx-gallery-grid">
      {filteredGallery.map((img, i) => (
        <div
          key={img.id + '-' + i}
          className={`lx-gi${img.tall ? ' tall' : ''}${img.wide ? ' wide' : ''}`}
          onClick={() => openLightbox(img, i)}
        >
          <img src={img.src} alt={img.alt} className="lx-gi-img" loading="lazy" />
          <div className="lx-gi-overlay">
            <span className="lx-gi-cat">{img.category}</span>
            <p className="lx-gi-cap">{img.alt}</p>
          </div>
          <div className="lx-gi-expand">&#8599;</div>
        </div>
      ))}
    </div>
    <p className="lx-gallery-count">{filteredGallery.length} luxury spaces</p>
  </div>

  {selectedImage && (
    <div className="lx-lb" onClick={closeLightbox}>
      <div className="lx-lb-wrap" onClick={e => e.stopPropagation()}>
        <span className="lx-lb-counter">{lightboxIndex + 1} / {filteredGallery.length}</span>
        <button className="lx-lb-close" onClick={closeLightbox}>&#x2715;</button>
        <button className="lx-lb-nav" onClick={prevLightbox}>&#8249;</button>
        <div className="lx-lb-img-box">
          <img
            key={selectedImage.src + lightboxIndex}
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="lx-lb-img"
          />
          <div className="lx-lb-info">
            {selectedImage.alt}&nbsp;&middot;&nbsp;
            <span style={{ color: '#C9A96E' }}>{selectedImage.category}</span>
          </div>
        </div>
        <button className="lx-lb-nav" onClick={nextLightbox}>&#8250;</button>
      </div>
    </div>
  )}
</section>
{/* Featured end gallerySection */}
















{/* Services Section */}
<Box
  ref={servicesRef}
  component={motion.section}
  initial="hidden"
  animate={isServicesInView ? "visible" : "hidden"}
  variants={staggerContainer}
  sx={{
    py: { xs: 6, sm: 8, md: 10, lg: 12 },
    px: { xs: 2, sm: 3, md: 4 },
    background: sectionAltBg,
    position: 'relative',
    transition: 'background 0.38s ease',
  }}
>
  <Container 
    maxWidth={CONTAINER.wide}
    sx={{
      px: { xs: 2, sm: 3, md: 4 },
    }}
  >
    <motion.div variants={fadeInUp}>
      <Typography
        variant="h2"
        align="center"
        sx={{
          color: textPrimary,
          mb: { xs: 1, sm: 2 },
          fontSize: { 
            xs: '1.8rem', 
            sm: '2.2rem', 
            md: '2.5rem', 
            lg: '3rem' 
          },
          lineHeight: 1.2,
        }}
      >
        Premium
        <Typography 
          component="span" 
          sx={{ 
            color: COLORS.primaryLight, 
            ml: { xs: 1, sm: 2 },
            display: { xs: 'block', sm: 'inline' },
            fontSize: { 
              xs: '1.8rem', 
              sm: '2.2rem', 
              md: '2.5rem', 
              lg: '3rem' 
            },
          }}
        >
          Services
        </Typography>
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{
          color: textMuted,
          mb: { xs: 4, sm: 5, md: 6, lg: 8 },
          maxWidth: { xs: '100%', sm: '90%', md: '800px' },
          mx: 'auto',
          fontSize: { 
            xs: '0.875rem', 
            sm: '0.9375rem', 
            md: '1rem' 
          },
          px: { xs: 2, sm: 3, md: 4 },
          lineHeight: 1.6,
        }}
      >
        Indulge in our world-class amenities and services designed for the discerning traveler
      </Typography>
    </motion.div>

    <Grid 
      container 
      spacing={{ xs: 3, sm: 4, md: 4 }}
      sx={{
        justifyContent: 'center',
      }}
    >
      {services.map((service, index) => (
        <Grid 
          item 
          xs={12} 
          sm={6} 
          md={4} 
          key={index}
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <motion.div
            variants={{ ...fadeInUp, hover: { scale: 1.05, y: -10 } }}
            whileHover="hover"
            style={{
              width: '100%',
              maxWidth: { xs: '100%', sm: '350px', md: '100%' },
            }}
          >
            <Paper
              elevation={0}
              sx={{
                p: { xs: 2.5, sm: 3, md: 3.5 },
                textAlign: 'center',
                backgroundColor: cardBg,
                backdropFilter: 'blur(10px)',
                border: `1px solid ${cardBorder}`,
                borderRadius: { xs: 3, sm: 3.5, md: 4 },
                height: '100%',
                transition: 'all 0.3s ease-in-out',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '&:hover': {
                  border: `1px solid ${cardBorderHover}`,
                  boxShadow: isDark ? '0 20px 40px rgba(0,0,0,0.35), 0 0 30px rgba(201,169,110,0.08)' : '0 20px 40px rgba(26,22,18,0.12), 0 0 20px rgba(201,169,110,0.1)',
                },
              }}
            >
              <Box
                sx={{
                  display: 'inline-flex',
                  p: { xs: 1.5, sm: 1.75, md: 2 },
                  borderRadius: '50%',
                  background: 'rgba(201,169,110,0.1)',
                  color: COLORS.primaryLight,
                  mb: { xs: 1.5, sm: 2 },
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'rgba(201,169,110,0.2)',
                    transform: 'scale(1.1)',
                  },
                }}
              >
                {React.cloneElement(service.icon, {
                  sx: { 
                    fontSize: { xs: 30, sm: 35, md: 40 } 
                  }
                })}
              </Box>
              <Typography 
                variant="h5" 
                sx={{ 
                  color: textPrimary, 
                  fontWeight: 600, 
                  mb: { xs: 1, sm: 1.5 },
                  fontSize: { 
                    xs: '1.1rem', 
                    sm: '1.2rem', 
                    md: '1.3rem' 
                  },
                }}
              >
                {service.title}
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: textSecondary,
                  fontSize: { 
                    xs: '0.8rem', 
                    sm: '0.85rem', 
                    md: '0.875rem' 
                  },
                  lineHeight: 1.6,
                  maxWidth: { xs: '100%', sm: '280px' },
                  mx: 'auto',
                }}
              >
                {service.description}
              </Typography>
            </Paper>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  </Container>
</Box>
{/* Services Section end*/}



      {/* Testimonials Section with Carousel */}
      <Box
        ref={testimonialsRef}
        component={motion.section}
        initial="hidden"
        animate={isTestimonialsInView ? "visible" : "hidden"}
        variants={staggerContainer}
        sx={{
          py: SPACING.sectionY,
          px: SPACING.sectionX,
          backgroundColor: sectionBg,
          position: 'relative',
          transition: 'background-color 0.38s ease',
        }}
      >
        <Container maxWidth={CONTAINER.content}>
          <motion.div variants={fadeInUp}>
            <Typography
              variant="h2"
              align="center"
              sx={{
                color: textPrimary,
                mb: 2,
                fontSize: { xs: '2rem', md: '3rem' },
              }}
            >
                Guest
              <Typography component="span" sx={{ color: COLORS.primaryLight, ml: 2 }}>
                Experiences
              </Typography>
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{
                color: textMuted,
                mb: 8,
                maxWidth: '800px',
                mx: 'auto',
              }}
            >
              What our valued guests say about their stay at Luxury Stay Hotel
            </Typography>
          </motion.div>

          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={1}>
              <IconButton
                onClick={handlePrevTestimonial}
                aria-label="Previous testimonial"
                sx={{
                  color: COLORS.primaryLight,
                  border: `1px solid ${COLORS.borderStrong}`,
                  '&:hover': {
                    backgroundColor: 'rgba(201,169,110,0.1)',
                  },
                }}
              >
                <ChevronLeftIcon />
              </IconButton>
            </Grid>

            <Grid item xs={12} md={10}>
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <Card
                  sx={{
                    p: SPACING.cardPadding,
                    backgroundColor: cardBg,
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${cardBorderHover}`,
                    borderRadius: 2,
                  }}
                >
                  <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={4}>
                      <Box sx={{ textAlign: 'center' }}>
                        <Avatar
                          src={testimonials[currentTestimonial].avatar}
                          sx={{
                            width: 150,
                            height: 150,
                            mx: 'auto',
                            mb: 2,
                            border: `4px solid ${COLORS.primaryLight}`,
                          }}
                        />
                        <Typography variant="h5" sx={{ color: textPrimary, fontWeight: 600 }}>
                          {testimonials[currentTestimonial].name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: COLORS.primaryLight, mb: 1 }}>
                          {testimonials[currentTestimonial].role}
                        </Typography>
                        <Rating
                          value={testimonials[currentTestimonial].rating}
                          readOnly
                          sx={{ color: COLORS.primaryLight }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={8}>
                      <Typography
                        variant="h4"
                        sx={{
                          color: textPrimary,
                          mb: 3,
                          fontSize: { xs: '1.5rem', md: '2rem' },
                        }}
                      >
                        "
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: textSecondary,
                          fontSize: { xs: '1rem', md: '1.2rem' },
                          lineHeight: 1.8,
                          fontStyle: 'italic',
                        }}
                      >
                        {testimonials[currentTestimonial].comment}
                      </Typography>
                      <Typography
                        variant="h4"
                        sx={{
                          color: textPrimary,
                          mt: 3,
                          textAlign: 'right',
                          fontSize: { xs: '1.5rem', md: '2rem' },
                        }}
                      >
                        "
                      </Typography>
                    </Grid>
                  </Grid>
                </Card>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={1}>
              <IconButton
                onClick={handleNextTestimonial}
                aria-label="Next testimonial"
                sx={{
                  color: COLORS.primaryLight,
                  border: `1px solid ${COLORS.borderStrong}`,
                  '&:hover': {
                    backgroundColor: 'rgba(201,169,110,0.1)',
                  },
                }}
              >
                <ChevronRightIcon />
              </IconButton>
            </Grid>
          </Grid>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, gap: 1 }}>
            {testimonials.map((_, index) => (
              <Box
                key={index}
                component={motion.div}
                whileHover={{ scale: 1.2 }}
                onClick={() => setCurrentTestimonial(index)}
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  backgroundColor: index === currentTestimonial ? COLORS.primaryLight : 'rgba(201,169,110,0.25)',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease',
                }}
              />
            ))}
          </Box>
        </Container>
      </Box>
  {/* Testimonials Section with Carousel  end*/}






      {/* Call to Action Section */}
     

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </Box>
  );
};

export default Home;