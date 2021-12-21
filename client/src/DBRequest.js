
const DBRequest = async (url, method, data) => {
    try {
        const response = await fetch(url, {
            method: method,
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                mal_id: data.mal_id,
                image_url: data.image_url,
                type: data.type,
                title: data.title,
            })
        });
        console.log(response.status);
        console.log(response);
    } catch (error) {
        console.log(error.message)
    }
}
 
export default DBRequest;
  