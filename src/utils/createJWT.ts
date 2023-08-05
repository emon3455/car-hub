const createJWT = async (payload: any) => {
  try {
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Corrected header
      },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    return data;
  } catch (error:any) {
    console.log(error.message);
  }
};

export default createJWT;
