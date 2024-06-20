export const fetcher = async (url, values = {}) => {
  const token = localStorage.getItem("jwtToken") ;
  const data = { ...values };
  let body = {}
  
  if( Object.keys(data).length === 0 ) {
    body = { token } 
  } else if (token === null) {
    body = data
  } else body = { data, token }

  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const jsonResponse = response.json();
    jsonResponse
      .then((result) => {
        if(result.data.type === 'token') {
          localStorage.setItem("jwtToken", result.data.value);
        }
        else if (result.status === "auth") {
          localStorage.removeItem("jwtToken"); 
        }
      })
      .catch((e) => console.error(e));
    return jsonResponse;
  } catch (e) {
    console.error(e);
  }
};
