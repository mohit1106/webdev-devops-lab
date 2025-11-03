import axios from "axios";

// fetching data using nextjs server from backend, by this, the data fetching will happen on 
// next js server, i.e nextjs server will fetch it from real backend server and render the page and then return to client.
// if fetching done using useEffect, then it will become clent side i.e browser will directly send req to fetch data from backend.

async function getUserDetails() {
  const response = await axios.get("http://localhost:3000/api/v1/user/details")
	return response.data;
}

export default async function User() {
  const userData = await getUserDetails();

  return (
    <div>
      {userData.email}
      {userData.user}
    </div>
  );
}
