// Simple test script to verify AI API response format
async function testAIAPI() {
  try {
    console.log('Testing AI API...');
    
    const response = await fetch('http://localhost:3000/api/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: [{
          role: 'user',
          content: 'Hello, please respond with a simple greeting.'
        }],
        model: 'neuman-google',
        group: 'chat',
      }),
    });

    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error:', errorText);
      return;
    }
    
    const reader = response.body?.getReader();
    if (!reader) {
      console.error('No response body');
      return;
    }

    let fullResponse = '';
    
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      
      const chunk = new TextDecoder().decode(value);
      console.log('Raw chunk:', JSON.stringify(chunk));
      
      const lines = chunk.split('\n');
      
      for (const line of lines) {
        if (line.trim() === '') continue;
        
        console.log('Processing line:', JSON.stringify(line));
        
        try {
          let data;
          if (line.startsWith('0:')) {
            data = JSON.parse(line.slice(2));
          } else if (line.startsWith('data: ')) {
            data = JSON.parse(line.slice(6));
          } else {
            data = JSON.parse(line);
          }
          
          console.log('Parsed data:', data);
          
          if (data.type === 'text-delta' && data.textDelta) {
            fullResponse += data.textDelta;
          } else if (data.type === 'text' && data.text) {
            fullResponse += data.text;
          } else if (data.delta && data.delta.content) {
            fullResponse += data.delta.content;
          } else if (data.content) {
            fullResponse += data.content;
          }
        } catch (e) {
          console.log('Failed to parse as JSON:', line);
        }
      }
    }
    
    console.log('Full response:', fullResponse);
    
  } catch (error) {
    console.error('Test failed:', error);
  }
}

// Run the test if this is being executed directly
if (typeof window !== 'undefined') {
  testAIAPI();
} else {
  module.exports = testAIAPI;
} 