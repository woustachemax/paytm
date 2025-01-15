import {FullSignup} from "./components/FullSignup"
import {FullSignin} from "./components/FullSignin"

function App() {

  return (
    <div>
                 <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<FullSignup />} />
          <Route path="/signin" element={<FullSignin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
