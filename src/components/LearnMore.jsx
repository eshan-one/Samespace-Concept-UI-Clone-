import styles from "../style"

const LearnMore = ({styles}) => {
  return (
   <button type="button" className={`py-4 px-6
   bg-violet-gradient font-poppins font-medium
   text-[18px] text-white outline-none ${styles}
  rounded-[10px]`}>

    Learn More 
   </button>
  )
}

export default LearnMore