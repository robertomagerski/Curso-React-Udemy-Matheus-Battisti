import { useCounterContext } from "../hooks/useCounterContext"
import { useTitleColorContext } from "../hooks/useTitleColorContext"

const About = () => {
  const {counter} = useCounterContext()

  return (
    <div>
      <h1>Esse é o context no about: {counter}</h1> 
    </div>
  )
}

export default About