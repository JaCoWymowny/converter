import {
  Route,
  Routes
} from "react-router-dom";
import Converter from "../../pages/Converter";
import ConverterWithHistory from "../../pages/ConverterWithHistory";

const Layout = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={
          <Converter/>
        }
        />
        <Route path="/ConverterWithHistoryPage" element={
          <ConverterWithHistory/>
        }
        />
      </Routes>
    </div>
  )
}

export default Layout;
