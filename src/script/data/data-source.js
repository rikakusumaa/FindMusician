class DataSource {
    static searchMusician(keyword) {
        return fetch(`https://theaudiodb.com/api/v1/json/2/search.php?s=${keyword}`) 
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.artists) {
                return Promise.resolve(responseJson.artists);
            } else {
                return Promise.reject(`${keyword} is not found`);
            }
        })
    }
 }
  
export default DataSource;
