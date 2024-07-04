import ThemeCustomization from './themes/index'
import CustomRoute from './routes';
import ScrollTop from './components/ScrollTop'
import './App.css'
function App() {
  return (
    <ThemeCustomization>
    <ScrollTop>
      <CustomRoute />
    </ScrollTop>
  </ThemeCustomization>
  )
}

export default App

