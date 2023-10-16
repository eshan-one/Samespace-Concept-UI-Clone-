import styles from "../style";
import Button from "./Button";


const CallToAction = () =>  (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 style={{textShadow: 
      '3px 3px 0 rgba(0,0,0,0.4), 6px 6px 0 rgba(0,0,0,0.4)'}} className={styles.heading2}>Transform your contact center
with <span>Samespace.</span>{''}
</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button styles="px-6 py-12 rounded-full" />
    </div>
  </section>
  )


export default CallToAction