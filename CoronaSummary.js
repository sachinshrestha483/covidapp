
const summarylink = "https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats";
var summaryPage=new Vue({
    el: '#summary-page',
    data: {
   summary:{},
   
    
    },
    mounted() {
       
        axios.get(summarylink).then(response => {
            this.summary = response.data
          })
      },

      methods:{
       
        roundOff:function(integer){
            return integer.toFixed(2);
        }
    }
     
   
   
  });


