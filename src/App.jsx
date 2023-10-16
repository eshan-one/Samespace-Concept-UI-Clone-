import styles from "./style"
import {Navbar,Billing,CardDeal,Business,Clients , Footer, Prospects, Testimonials,Puzzle, CallToAction,Hero, IQ} from "./components"


const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>

      </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Clients/> 
         
        {/* <Stats/> */}
        <Billing/>
        <CardDeal/> 
        <IQ/>
        <Puzzle/>
        <Business/>
        
        <Prospects/>
        <Testimonials/> 
        
        <CallToAction/>
        <Footer/> 
      </div>
    </div>


    </div>
  )
}

export default App