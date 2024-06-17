
import { useState, useEffect } from "react";
import { fetchData } from './api'; // Adjust the path as per your file structure

function Try() {
  const [data, setData] = useState(null);
  //const [postDataResult, setPostDataResult] = useState(null);

  useEffect(() => {
    // Example of fetching data
    fetchData('/Scientists/')
      .then(response => {
        setData(response);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

    // Example of posting data
   //  const postDataExample = { /* your data object */ };
   //  postData('api/postEndpoint', postDataExample)
   //    .then(response => {
   //      setPostDataResult(response);
   //    })
   //    .catch(error => {
   //      console.error('Error posting data:', error);
   //    });
  }, []);

  return (
    <div>
      <p>hello</p>
      {/* Render your fetched data */}
      {data && (
        <div>
          <h2>Data from API:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}

      {/* Render result of posted data
      {postDataResult && (
        <div>
          <h2>Result from posting data:</h2>
          <pre>{JSON.stringify(postDataResult, null, 2)}</pre>
        </div>
      )} */}
    </div>
  );
}

export default Try;

  