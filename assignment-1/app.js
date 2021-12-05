const app = Vue.createApp({
    data(){
        return {
            myName:"Ivan",
            myAge:40,
            googleImageLink:"https://www.google.com/logos/doodles/2021/seasonal-holidays-2021-6753651837109324-6752733080595603-cst.gif"
        };
    },
    methods:{
        myRandom() {
            const randomNumber = Math.random();
            return randomNumber
        },
        myInput(){
            return "Petar  "
        }
    }
});
app.mount('#assignment');