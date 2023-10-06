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
                credentials: "include",
            });
            if (!response.ok){
                return response.status
            }
        }
    }
}