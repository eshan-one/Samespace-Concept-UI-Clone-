import styles from '../style'
import { purplepc} from '../assets'
import Button from './Button'
const Hero = () => (
    <section id="home" className={`flex
    md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart}
      flex-col xl:px-0 sm:px-16 px-6`}>
       

  <div className='flex flex-row
  justify-between items-center w-full'>

    <h1 className='flex-1  font-futura font-semibold
    ss:text-[72px] text-[52px] text-white ss:leading-[100px]
    leading-[75px]' >AI Powered 
      <br className='sm:block hidden' /> {''}
      <span 
       >Contact Center Platform
      </span> {''}
      
      </h1>

    
  </div>

  <h1 className='font-futura font-semibold
    ss:text-[68px] text-[52px]  ss:leading-[100px]
    leading-[75px] w-full text-gradient' style={{textShadow: 
      '3px 3px 0 rgba(0,0,0,0.4), 6px 6px 0 rgba(0,0,0,0.4)'}}>Centered on Experience</h1>
    <p className= {`${styles.paragraph} 
    max-w-[470px] mt-5`}>Built on cutting-edge Internet technologies and
    design thinking principles, samespace elates customer
    experience, increases productivity and provides great business insights.
    </p>

    <div className='ss:flex hidden md:mr-4 mt-7  first-letter:mr-0'>
        <Button styles='ss:rounded-full md:px-6 py-12 rounded-full'/>
      </div>

      </div>

      <div className={`flex-1 flex ${styles.boxWidth} 
      md:my-0 my-10 relative`}>
        <img src={purplepc} alt="cover_img"
        className='w-[100%] h-[100%] relative z-
        [5] rounded-3xl' />

        <div className='absolute z-[0] w-[40%]
        h-[35%] top-0 pink__gradient'/>
        <div className='absolute z-[1] w-[80%]
        h-[80%] rounded-full bottom-40
        white__gradient'/>
        <div className='absolute z-[0] w-[50%]
        h-[50%] right-20 bottom-20  blue__gradient'/>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <Button/>
      </div>
    </section>
  )


export default Hero