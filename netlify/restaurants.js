// netlify/functions/restaurants.js

// 1. Import node-fetch: This library allows us to make HTTP requests
//    from a Node.js environment (like your Netlify serverless function)
//    just like 'fetch' works in your browser.
//    You must have run 'npm install node-fetch' in your project.
const fetch = require('node-fetch');

// 2. The 'exports.handler' is the standard entry point for Netlify Serverless Functions.
//    Netlify looks for this specific function to execute your code.
//    'event' contains details about the incoming request (like query parameters, headers).
//    'context' contains information about the execution environment.
exports.handler = async function(event, context) {

    // 3. Original Swiggy API URL: This is the actual Swiggy endpoint.
    //    We are NO LONGER using 'thingproxy.freeboard.io/' here.
    //    Your serverless function *is* the proxy.
    const swiggyApiUrl = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139&lng=77.2090&page_type=DESKTOP_WEB_LISTING";

    try {
        // 4. Make the request to Swiggy from your Netlify serverless function.
        //    This request happens server-to-server, bypassing browser CORS restrictions.
        const response = await fetch(swiggyApiUrl, {
            headers: {
                // 5. User-Agent and Accept-Language Headers:
                //    Many APIs (like Swiggy's, which is not officially public) often
                //    check these headers to ensure the request looks like it's coming
                //    from a real web browser. If these are missing or look suspicious,
                //    the API might block the request. We're mimicking a common Chrome User-Agent.
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                'Accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.9',
                // You can add more headers if needed based on API requirements, but these are common
            }
        });

        // Check if the response from Swiggy was successful (e.g., status 200-299)
        if (!response.ok) {
            // If Swiggy returns an error, log it and throw an error.
            throw new Error(`Swiggy API responded with status: ${response.status} - ${response.statusText}`);
        }

        // Parse the JSON data from Swiggy's response
        const data = await response.json();

        // Return the data to your frontend.
        // statusCode: 200 indicates success.
        // Access-Control-Allow-Origin: "*" allows your Netlify frontend (any domain) to read this response.
        // Content-Type: application/json tells the browser it's JSON data.
        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data) // Convert the JSON object back to a string for the response body
        };
    } catch (error) {
        // If anything goes wrong during the fetch or processing, log the error
        console.error("Error fetching from Swiggy API via Netlify Function:", error);
        // And return an error response to your frontend
        return {
            statusCode: 500, // 500 indicates a server error
            body: JSON.stringify({ error: `Failed to fetch restaurant data: ${error.message}` })
        };
    }
};