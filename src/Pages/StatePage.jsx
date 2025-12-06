import { Link } from 'react-router-dom';
import Counter from '../Components/Advanced/Counter';
const StatePage = () => {
    return(
        <div className='p-5'>
            <h2 className='text-2xl font-bold border-b-2 pb-2.5 mb-3.5'> Counter with Class Components</h2>

            <section className='mb-[30px]'>               
                <Counter />
            </section>           

            <Link to="/" className='text-white bg-[#007bff] py-2 px-[15px] rounded-lg no-underline'>
                Back to Home
            </Link>
        </div>
    )
}

export default StatePage;