import { Link } from 'react-router-dom';
import Greet from '../Components/Basics/Greet';
import Welcome from '../Components/Basics/Welcome';


const BasicsPage = () => {
    return(
        <div className='p-[20px]'>
        <h2 className='text-2xl font-bold border-b-2 pb-2.5 mb-3.5'> Functional and Class Components</h2>

            <section className='mb-[30px]'>
                <h3 className='text-[20px] font-bold'>Functional Component Example:</h3>
                <Greet />
            </section>

            <section className='mb-[30px]'>
                <h3 className='text-[20px] font-bold'>Class Component Example:</h3>
                <Welcome />
            </section>

            <Link to="/" className='text-white bg-[#007bff] py-[8px] px-[15px] rounded-[8px] no-underline'>
                Back to Home
            </Link>
        </div>
    )
}

export default BasicsPage;