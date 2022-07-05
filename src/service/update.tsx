import axios from "axios";

export default async function Update(status: string, id: string) {
  const api = `https://62c0eed7eff7f7856f071380.mockapi.io/employee/${id}`;
  try {
    const res = await axios.put(api, {
      id: id,
      employment_status: status,
    });
    return console.log(res.data);
  } catch (err) {
    return console.log(err);
  }
}
