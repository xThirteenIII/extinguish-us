class FetchRequest{

    // A constructor is a special method within a class that gets executed 
    // when an object is created from that class. 
    // It initializes the object's properties or sets up its initial state
    constructor(method, url, port, path, body){
        this.method = method;
        this.url = url;
        this.port = port;
        this.path = path;
        this.body = body;
    }

    async Fetch(){

        if (this.method == "GET"){
            const response = await fetch(this.url+ this.port + this.path, {
                method: this.method,
                headers: {
                    'Content-Type': 'application/json'
                },
                //Note: Credentials may be included in simple and "final" cross-origin requests, 
                //but should not be included in CORS preflight requests. Use "omit" to tell the 
                //browsers to exclude credentials from the request, and ignore any credentials sent 
                //back in the response (e.g., any Set-Cookie header).
                //credentials: "include",
            });
            if (!response.ok){
                return response.status
            }

            try {
                const text = await response.text();
                if (text != ""){
                    const data = JSON.parse(text);
                    return data
                }else{
                    return response.status
                }
            }catch(err){
                return err
            }

            // If the method is POST, DELETE, PUT handles body
        }else {
            const response = await fetch(this.url + this.port + this.path, {
                method: this.method,
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: "include",
                body: JSON.stringify(this.body),// body data type must match "Content-Type" header
            });
            if (!response.ok){
                return response.status
            }

            try {
                const text = await response.text(); // Parse it as text
                if (text != ""){
                    const data = JSON.parse(text);     // Try to parse it as JSON
                    return data
                }else {
                    return response.status
                }
            } catch(err) {
                return err
            }
        }
    }
}
