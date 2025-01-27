import Header from "./components/Header"
import TestsList from "./components/TestsList"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"
import ProgressBar from "./components/ProgressBar"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F0F8FF]">
      <ProgressBar />
      <Header />
      <main className="flex-grow">
        <TestsList />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
