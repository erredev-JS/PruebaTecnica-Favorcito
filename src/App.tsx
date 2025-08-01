
import './App.css'
import { getCoordinatesByCountry } from './Cruds/geoCrud'
import { MainScreen } from './Screens/MainScreen'

function App() {
  const solution = async () => {
     const response = await getCoordinatesByCountry("Mendoza")
     console.log(response)

  }
  // solution()
  return (
    <>
      <MainScreen/>
    </>
  )
}

export default App
