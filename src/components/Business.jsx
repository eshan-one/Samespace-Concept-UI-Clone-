/* eslint-disable react/prop-types */
import styles, {layout} from "../style"
import { features } from "../constants"


const FeatureCard =  ({icon, title, content, index}) => (
    <div className={`flex flex-row p-6 rounded-[20px]
     ${index !== features.length -  1 ? 
    "mb-6" : "mb-0"} feature-card`}>
        
        <div className={`w-[64px] h-[64px]
        rounded-full ${styles.flexCenter} bg-dimBlue `}>
          <img src={icon} className=" w-[50%] h-[50%] object-contain" alt="icon" />
        </div>

        <div className="flex-1 flex flex-col ml-3 ">
            <h4 className="font-poppins font-semibold 
            text-white text-[18px] leading-[23px] mb-1  ">
              {title}
            </h4>
            
            <p className="font-poppins font-normal
            text-dimWhite text-[16px] leading-[24px] 
            mb-1" >
              {content}
            </p>

        </div>

    </div>
)

const Business = () =>  (
    <section id="features" className={layout.section}>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}><span className="text-gradient" 
        style={{textShadow: 
          '3px 3px 0 rgba(0,0,0,0.4), 6px 6px 0 rgba(0,0,0,0.4)'}}> Deep Analytics.</span>
       <br
        className="sm:block hidden" /> Deep Learning.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>Turn every action into a data-driven decision with real-time performance dashboards,
         business intelligence, and AI driven sentiment analysis.</p>
        
      </div>

      <div className={`${layout.sectionImg} 
      flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index ={index} />
        ))}
      </div>

    </section>
  )


export default Business
