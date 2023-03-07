import {Provider} from "react-redux"
import { store } from './store/index'
import Counter from './components/counter/counter'
// import store from "./store/index"

function App() {

  return (
    <>
    <Provider store={store}>
      <Counter />
    </Provider>
    </>
  )
}

export default App
