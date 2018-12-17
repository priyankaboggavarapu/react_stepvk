var marks =100;

   function testM(){
       this.age =30;
       var marks =80;
          if(true){
              var marks2 =60;
              console.log("Inside If Statement: " +marks);
          }
        console.log("Inside testM: "+marks2)
   }

   console.log("Outside testM: "+marks);
   testM();
  