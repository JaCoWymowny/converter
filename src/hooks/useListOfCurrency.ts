import axios from "axios";

import { useQuery } from "react-query";

const useListOfCurrency = () => {

  const {isLoading, data} = useQuery(`all-currency`, () => {
    return axios.get('https://v6.exchangerate-api.com/v6/864c9c57355051a1b9867211/codes')
  })
  return {isLoading, data}
}

export default useListOfCurrency;

// const useListOfCurrency = () => {
//   const [data, setData] = useState<string[]>([]);
//   const [loading, setLoading] = useState(true);
//
//   const fetchData = async () => {
//     try {
//       const res = await axios.get('https://v6.exchangerate-api.com/v6/864c9c57355051a1b9867211/codes');
//       const allData = res.data.supported_codes;
//       const code = allData.map((e: string) => e[0])
//       setData(code);
//     } catch (error) {
//       console.error(error)
//     }
//     setLoading(false);
//   };
//   fetchData();
//   return {data, loading};
// }
