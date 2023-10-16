import {call_iq } from "../assets" 
import styles, {layout}  from "../style"

const IQ = () => 
   (
    <section id="product" className={`${layout.sectionReverse}`}>
      <div className={layout.sectionImgReverse}>
        <img src={call_iq} alt="call_iq_img"
        className="w-[100%] h-[100%] relative z-[5] rounded-2xl" />

        <div className="absolute z-[3] -left-1/2
        top-0 w-[50%] h-[50%] rounded-full white__gradient  "/>
        
        <div className="absolute z-[0] -left-1/2
        top-0 w-[50%] h-[50%] rounded-full pink__gradient  "/> 

      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2} >Raise Your Call IQ
         <br className="sm:block hidden" />
      
        </h2>

        <p className={`${styles.paragraph} max-w-[470px]
         mt-5`}>
          The smart solution to your prospect call flow. Leverage intelligent routing
           to make sure the right agent gets the call every time.
        </p>
      </div>

    </section>

    
  )


// eslint-disable-next-line react-refresh/only-export-components
export default IQ