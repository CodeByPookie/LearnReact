import './App.css'
import Greet from './Components/Greet'
import Props from './Components/Props'
import Welcome from './Components/Welcome'
import PropsWithClass from './Components/PropswithClass'
import Counter from './Components/Counter'
import Destructuring from './Components/Destructuring'
import FunctionClick from './Components/EventHandling/FunctionClick'
import ClassClick from './Components/EventHandling/ClassClick'

function App() {
  return (
    <>
      <div>
        <div className='hidden'>
          <Greet /> {/* This is a functional component */}
          <Welcome /> {/* This is a class component */}
          <Props name="John" age={30} isStudent={true} /> {/* This is a functional component with props */}
          <Props name="Selva" age={23} isStudent={false} /> {/* This is a functional component with props */}
          <Props name="User" age={23} isStudent={false}>
            <p>This is a child element for functional component</p>
            <div>you can add <b>multiple elements </b>here</div>
          </Props> {/* This is a functional component with props */}
          <PropsWithClass name="John" age={30} isStudent={true} /> {/* This is a class component with props */}
          <PropsWithClass name="Selva" age={23} isStudent={false} /> {/* This is a class component with props */}
          <PropsWithClass name="User" age={23} isStudent={false}>
            <p>This is a child element for class component</p>
            <div>you can add <b>multiple elements </b>here</div>
          </PropsWithClass> {/* This is a class component with props */}
        </div>
        <div className='hidden'>
          <Counter /> {/* This is a class component with state */}
        </div>
        <div className='hidden'>
          <Destructuring name="Selva" age={23} /> {/* This is a functional component with destructuring */}
        </div>
        <div>
          <FunctionClick /> {/* This is a functional component with event handling */}
          <ClassClick /> {/* This is a class component with event handling */}
        </div>
      </div>
    </>
  )
}
export default App
