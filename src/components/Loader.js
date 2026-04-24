import spinner from './hold-on.gif'

const Loader = () => {
  return (
    <div>
      <img src = {spinner} alt = "Loading..."/>
      <h1>Fetching Data...</h1>
    </div>
  )
}

export default Loader
