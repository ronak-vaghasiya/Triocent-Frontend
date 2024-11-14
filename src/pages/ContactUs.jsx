import BgHeader from "../components/BgHeader"
import Footer from "../components/Footer"
import ContactSection from "../components/sections/ContactSection"

const ContactUs = () => {
  return (
    <div>
      <BgHeader title={"Contact Us"} section={"contact"} />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default ContactUs