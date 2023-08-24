import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from '../components/Header';
import Pricing from '../components/Pricing/pricing';
import PaymentMethod from '../components/PaymentMethod';
import Navbar from './../components/Navbar/nav';
import OurModelSection from '@/components/ourModelSection';
import SectionSeparator from '@/components/sectionSeparator';
import Feature from '@/components/Feature/features';
import BorderedSection from '@/components/BorderedSection/borderedSection';
import ViewFeature from '@/components/ViewFeature/viewFeature';
import Footer from '@/components/Footer/footer';

const Dashboard = ({toggleThemeMode}) => {
  // Customize these props as needed
  const headerLogo = '/images/logo.png';

  const introText = '"Experience the future of AI with Codainer - Where Innovation Meets Software Excellence."';
  const paymentMethods = [
    { id: 1, name: 'Credit Card' },
    { id: 2, name: 'PayPal' },
    // Add more payment method options
  ];


  return (
    <Box>
      <Navbar toggleColorMode={toggleThemeMode} />
      <Header headerLogo={headerLogo} introText={introText} />
      <SectionSeparator />
      {/* <PaymentMethod paymentMethods={paymentMethods} /> */}
      <OurModelSection />
      <SectionSeparator />
      <ViewFeature />
      <SectionSeparator />
      <Feature />
      <BorderedSection />
      <Footer />
    </Box>
  );
};

export default Dashboard;
