import {calls} from '../assets'
import styles, {layout} from '../style'

import LearnMore from './LearnMore'

const CardDeal = () =>  (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Your favorite CRM and business
conversations<br className='sm:block hidden' />all in one place.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] 
        mt-5`}>Seamlessly integrate into any CRM to make your contact
         center agile and adaptable, expertly enhancing your customer experience.</p>
        <LearnMore styles='mt-10 px-6 py-12 rounded-full'/>
      </div>

      <div className={layout.sectionImg}>
        <img src={calls} alt="card"
        className='w-[100%] h-[100%]' />
      </div>
    
    </section>
  )


export default CardDeal