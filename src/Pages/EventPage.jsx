import { Link } from 'react-router-dom';
import FunctionClick from '../Components/EventHandling/FunctionClick'
import ClassClick from '../Components/EventHandling/ClassClick'
import Eventbinding from '../Components/EventHandling/Eventbinding'

const EventPage = () => {
    return(
         <div className='p-5'>
            <h2 className='text-2xl font-bold pb-2.5 mb-3.5'> Event Handling</h2>
            <div className='text-[20px] font-bold border-b-2 pb-2.5 mb-3.5'> Click events for functional & class components</div>

            <section className='mb-[30px]'>
                <h3 className='text-[20px] font-bold pb-3'>Functional Component Example:</h3>
               <FunctionClick />
            </section>

            <section className='mb-[30px]'>
                <h3 className='text-[20px] font-bold'>Class Component Example:</h3>
                <ClassClick />
            </section>     

            <section className='mb-[30px]'>
                <h3 className='text-[20px] font-bold'>Event binding in class components:</h3>
                <Eventbinding />
            </section>               

            <Link to="/" className='text-white bg-[#007bff] py-2 px-[15px] rounded-lg no-underline'>
                Back to Home
            </Link>
        </div>
    )
}

export default EventPage;