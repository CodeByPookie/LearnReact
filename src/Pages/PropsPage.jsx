import { Link } from 'react-router-dom';
import Props from '../Components/Basics/Props';
import PropsWithClass from '../Components/Advanced/PropswithClass';

const PropsPage = () => {
    return(
        <div className='p-[20px]'>  
            <h2 className='text-2xl font-bold border-b-2 pb-2.5 mb-3.5'> Functional and Class Components with Props</h2>  
            <section className='mb-[30px]'>
                    <h3 className='text-[20px] font-bold'>Functional Component Example:</h3>
                    <Props name="John" age={30} isStudent={true} /> 
                    <Props name="Selva" age={23} isStudent={false} /> 
                    <Props name="User" age={23} isStudent={false}>
                        <p>This is a child element for functional component</p>
                        <div>you can add <b>multiple elements </b>here</div>
                    </Props> 
            </section>       
            <section className='mb-[30px]'>
                <h3 className='text-[20px] font-bold'>Class Component Example:</h3>
                <PropsWithClass name="John" age={30} isStudent={true} /> 
                <PropsWithClass name="Selva" age={23} isStudent={false} /> 
                <PropsWithClass name="User" age={23} isStudent={false}>
                    <p>This is a child element for class component</p>
                    <div>you can add <b>multiple elements </b>here</div>
                </PropsWithClass> 
           </section>       
         
            <Link to="/" className='text-white bg-[#007bff] py-[8px] px-[15px] rounded-[8px] no-underline'>
                Back to Home
            </Link>
         
        </div>
    )
}

export default PropsPage;