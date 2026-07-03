// DATA FETCHING:

// 1.HTTPS module way.
const https=require("https")
https.get("https://jsonplaceholder.typicode.com/posts/1",(res)=>{

    let data=""

    res.on("data",(chunk)=>{
        data+=chunk
    })
    res.on("end",()=>{
        // console.log(`API RESPONSE: `,JSON.parse(data))
    }).on("error",(error)=>{
        console.error(error.message)
    })

})

// node-fetch
async function fetchData(){
    try {
        let response =await fetch("https://jsonplaceholder.typicode.com/posts/1")

        response= await response.json()
        // console.log(`fetch method data: `,response)
        
    } catch (error) {
                console.error(error.message)

    }
}

// fetchData()
// axios way of fetching data
const axios = require("axios")
const fetchData1=async()=>{
    try {
        
        let response=await axios.get("https://jsonplaceholder.typicode.com/posts/1")
        // response = await response.json()

        // console.log(`API RESPOSE: `,response.data)
    } catch (error) {
        console.error(`Error: `,error.message)
    }
}
// fetchData1()


// multiple api calls
const fetchData2 = async () => {
    console.log("LOADING........")
    try {

        const [response1, response2, response3] = await Promise.all([
            axios.get("https://jsonplaceholder.typicode.com/posts/1"),
            axios.get("https://jsonplaceholder.typicode.com/posts/2"),
            axios.get("https://jsonplaceholder.typicode.com/posts/3")
        ]);

        console.log("Post 1:", response1.data);
        console.log("Post 2:", response2.data);
        console.log("Post 3:", response3.data);

    } catch (error) {
        console.error(error.message);
    }
};

// fetchData2();