import {
  Route,
  Routes
} from "react-router-dom";
import Converter from "../../pages/Converter";
import ConvertsHistory from "../../pages/ConvertsHistory";

const Layout = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={
          <Converter/>
        }
        />
        <Route path="/ConverterWithHistory" element={
          <>
            <Converter/>
            <ConvertsHistory/>
          </>
        }
        />
      </Routes>
    </div>
  )
}

export default Layout;
