import { apple, studio, google } from "../assets" 
import styles, {layout}  from "../style"

const Billing = () => 
   (
    <section id="product" className={`${layout.sectionReverse}`}>
      <div className={layout.sectionImgReverse}>
        <img src={studio} alt="billing"
        className="w-[100%] h-[100%] relative z-[5] rounded-2xl" />

        <div className="absolute z-[3] -left-1/2
        top-0 w-[50%] h-[50%] rounded-full white__gradient  "/>
        
        <div className="absolute z-[0] -left-1/2
        top-0 w-[50%] h-[50%] rounded-full pink__gradient  "/> 

      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2} >Drag. Drop. Done.
         <br className="sm:block hidden" />
      
        </h2>

        <p className={`${styles.paragraph} max-w-[470px]
         mt-5`}>
          Create and integrate dynamic voice, chat,
          email and conversational AI flows by simply drag 
          and drop functions, no coding needed.
          Managing an omnichannel contact center has never been so smooth. 
        </p>

        <div className="flex flex-row flex-wrap 
        sm:mt-10 mt-6">
          {/* Apple Store img */}
          <img src={apple} alt="apple_store"
          className="w-[128px] h-42px 
          object-contain mr-5 cursor-pointer " />
          
            {/* Google Store img */}
          <img src={google} alt="google_play"
          className="w-[128px] h-42px 
          object-contain  cursor-pointer " />
        </div>

      </div>

    </section>

    
  )


export default Billing