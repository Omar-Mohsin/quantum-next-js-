
const getAllWorkspaces = async (token) => {
    try {
      const response = await fetch('http://localhost:80/api/v1/workspace', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('Response:', data);
      return data;
    } catch (error) {
      console.error('Error making GET request:', error.message);
      throw error; // You can handle the error as per your requirement
    }
  };
  
  export { getAllWorkspaces };
  