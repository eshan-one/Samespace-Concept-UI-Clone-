import {crm} from '../assets'
import styles, {layout} from '../style'
import Button from './Button'
import LearnMore from './LearnMore'

const Puzzle = () =>  (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>The Final Piece of Your<br className='sm:block hidden' />CRM Puzzle
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] 
        mt-5`}>Your CRM isn’t complete without Samespace. We seamlessly integrate into any CRM to make your contact center agile and adaptable,
         expertly enhancing all of your calls.</p>

         <div className='flex flex-wrap gap-7'>
            <LearnMore styles='mt-10 px-6 py-12 rounded-full'/>
            <Button styles='mt-10 px-6 py-12 rounded-full'/>
         </div>
        
      </div>

      <div className={layout.sectionImg}>
        <img src={crm} alt="crm-source"
        className='w-[100%] h-[100%]' />
      </div>
    
    </section>
  )


export default Puzzle