import Pricing from '../../components/Pricing/pricing';
import Navbar from '@/components/Navbar/nav';
import Footer from '@/components/Footer/footer';
import SectionSeparator from '@/components/sectionSeparator';

const NextPage = ({toggleThemeMode}) => {
    const pricingData = [
        { id: 1, name: 'Plan 1', price: '$10' },
        { id: 2, name: 'Plan 2', price: '$20' },
      ];
  return (
    <>
      <Navbar toggleColorMode={toggleThemeMode} />
      <Pricing pricingData={pricingData} />
      <SectionSeparator />
      <Footer />
    </>
  );
};

export default NextPage;
