
const indiaStatusLink = "https://api.covid19india.org/data.json";

var summaryPage=new Vue({
    el: '#Indsummary-page',
    data: {
   
   current:{},
   stateWise:[],
   
    
    },
    mounted() {
       
        axios.get(indiaStatusLink).then(response => {
           
            this.current = response.data.statewise[0];
            this.stateWise=response.data.statewise;
          })
      },

      methods:{
       
        roundOff:function(integer){
            return integer.toFixed(2);
        }
    }
     
   
   
  });


