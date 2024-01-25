export const getAllWorkspaces = async (token) => {
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
      return data;
    } catch (error) {
      console.error('Error making GET request:', error.message);
      throw error; 
    }
  };
  
  
  export const getWorkspaceById = async (token , id) => {
    try {
      const response = await fetch(`http://localhost:80/api/v1/workspace/byid/${id}`, {
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
      return data;
    } catch (error) {
      console.error('Error making GET request:', error.message);
      throw error; 
    }
  };


  export const deleteWorkspace = async (token , id) => {
    try {
      const response = await fetch(`http://localhost:80/api/v1/workspace/byid/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error making delete request:', error.message);
      throw error; 
    }
  };



  
  