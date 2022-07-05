import axios from "axios";
// export default async function GetData( setDatae: (any)) {
//   return <h1></h1>;
// }

export const getData = async () => {
  const api = "https://62c0eed7eff7f7856f071380.mockapi.io/employee";
  try {
    const response = await axios.get(api);
    if (response && response.data) return response.data;
    // setMockData(response.data);
  } catch (err) {
    console.log("There is a proble with the api");
  }
};
