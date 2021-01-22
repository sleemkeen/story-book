export default class Api {
    constructor() {
      this._headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };  
    }
    

    getBaseUrl(url) {
        return 'https://api.mocki.io/v1/'+ url;
    }
    
     /**
   * Perform a get request, against an API
   * @params url: string
   * @params parameters: KeyValue[] ; a key value representation of the get params
   * format is [{key: "name", value:"miracle"}]
   *  <respType> is the expected response type the api end point returns
   */

    sendPost(){
        console.log(Api.setHeaders())
    }

    /**
   * Perform a get request, against an API
   * @params url: string
   * @params parameters: KeyValue[] ; a key value representation of the get params
   * format is [{key: "name", value:"miracle"}]
   *  <respType> is the expected response type the api end point returns
   */

    sendGet(url){
        
        return fetch(this.getBaseUrl(url)).then(res  => res.json());
    }

     /**
   * Perform a get request, against an API
   * @params url: string
   * @params parameters: KeyValue[] ; a key value representation of the get params
   * format is [{key: "name", value:"miracle"}]
   *  <respType> is the expected response type the api end point returns
   */
    

    sendPatch(){
        
    }

    /**
   * Perform a delete request, against an API. deletes a resource from server
   * @params url: string
   * @params parameters: KeyValue[] ; a key value representation of the get params
   * format is [{key: "name", value:"miracle"}]
   *  <respType> is the expected response type the api end point returns
   */


    sendDelete(){
        
    }

    

}