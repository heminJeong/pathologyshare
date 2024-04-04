import React, { useState } from 'react';

function App() {
  // 상태 변수를 사용하여 입력값을 추적
  const [postData, setPostData] = useState({
    title: '',
    body: ''
  });

  // 입력값을 업데이트하는 핸들러
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // POST 요청을 보내는 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://example.com/api/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Response:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Submit Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" name="title" value={postData.title} onChange={handleInputChange} />
        </div>
        <div>
          <label>Body:</label>
          <textarea name="body" value={postData.body} onChange={handleInputChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;