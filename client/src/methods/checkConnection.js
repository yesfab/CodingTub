export default async () => {
  if (localStorage.getItem("jwt")) {
    const response = await fetch('http://localhost:3001/users/verifyToken', {
      headers: {
        authorization: localStorage.getItem("jwt")
      }
    })
    const json = await response.json()
    if (json.error) window.location.replace("http://localhost:3000/connexion");
    else {
      console.log("json :",json)
      return json.user_id
    }
  } else {
    window.location.replace("http://localhost:3000/connexion");
  }
}