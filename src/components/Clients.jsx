
import {clients} from '../constants'
import styles from "../style"

const Clients = () =>  (
    <section className={`${styles.flexCenter}
    my-4`}>
      <div className={`${styles.flexCenter} 
      flex-wrap w-full`}>
        {clients.map((client) => (
          <div key={client.id} className={`flex-1
          ${styles.flexCenter} sm:min-w-[192px] 
          min-w-[120px] ml-7 mb-16 `}>
            <img src={client.logo} alt="client" 
            className={ client.id === "client-1" ? "sm:w-[192px]  w-[100px] object-contain bg-white"
             : "sm:w-[192px]  w-[100px] object-contain"   } />
          </div> 
        ))}
      </div>
    </section>
  )


export default Clients