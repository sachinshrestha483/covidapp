const url = "https://api.covid19india.org/state_district_wise.json";
new Vue({
    // el means element which it going to control
    // now after giving it the id of the dom  vue make a connection between the this insrtance and  that given name..
    //this instance goinfg to dcontrol  every thing  to do with the dom element  every thing inside it 
    el:'#vue-app',
    data:{
      name:'',
     
      resultObj:{}

    }
    ,
   



    mounted() {
        axios.get(url).then(response => {
          this.resultObj = response.data
        })
      }

    //dosent control anything outside the el 


});