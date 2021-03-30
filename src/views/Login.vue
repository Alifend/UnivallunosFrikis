<template id="">

    <div class="wrapper fadeInDown">
        <div id="formContent">
        <!-- Tabs Titles -->

        <!-- Icon -->
        <div class="fadeIn first">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAAD7+/v29vbR0dHm5uZjY2MgICDy8vLd3d3CwsLg4OBUVFR1dXWNjY2GhoaVlZUTExO/v7/W1tadnZ0JCQlZWVlpaWnIyMg7OzusrKwxMTGioqJ7e3ugoKC1tbVOTk5ubm4oKChGRkYjIyM9PT1vXWleAAAGYElEQVR4nO2di3aiQAyGHRCh9QZVFKlWre37v+Iuy9rWinZu+ZPp4XsB/Q8zk0ySSQYDBFE8rJfTySYtSlUW6WYyXdbDOIL8Nj3xYrlOVRfpOh9m3H/PlXg/eu1U96FytA9ZZLW6q+7M6on7j9qR5VryWvKE++8aM54a6GuYPnD/ZSMSU30Nx3C+YzSz0NcwD8R+PJaWApUqQjhzsrW1voa1eNtROelrqLgl3GfuLPDvbuQWcYds4kGgUgexKzXpdj/NSYXajaEnfQ1DbjFdPHoUqNQjt5xrnrwKVEqcZXS3Et8RZjV87sEzovZiQiBQKUEnauTLTFySynHERyQClRpxCztjcpk3I+eW1kJxypwRcdpEb4QK3yRsxR2hQKV23PJo12gD/zrdECt85xZYEwtUquYVGNtHnXQpY1aFdKbwE1ajGAMEKsX5ERGfUKklo0L6XdhQ8pn9PUSgUns2hQeQwgOXwAeQQKW4Mm+2KSZzZkwKn2EKn3kE4hYp1zLFGMMWHpNIfav4yoZDYAQUqBSH0fcf5b4HRwQcuQ15NqKfbKguEwaF9+vVfMNgEWlSFbfBJzEWYIULuELsUcpxmG7BCrdwhT4qZ0zAV9nYVB+6MIUrdCtfM2cNV0iVFb0FPlvaK+wVylf4+0+aI1jhEa6QNrl9DT7djb0Ac+TYUDmLM/jcBXWFwnfwFQvIeHADPiYc01Tr3SJlSAS/QxVyFJ1gr0/4yxP6MOVIA4+hCscMCgdQhRwCoRuRYxtiNyJPNQamIKqFqSwKd0XEXw5bcMuUq2QI5rhxuGwtqLg336tS1P2CsRkBJg/Mkf89g7kGs5brI6oTD5wCIR+R+cUFfeib+wEb/R2K5d70FWqbyFVa+oWCVGDBLW9AfdjwP+wa0K5TGV1AIrpC03cJDywHlAVgYt6r+22J8Ymg5hg0qTYhL7lbKPKlAp4Af8W/98btrV2h1yJRH85L4Q38ShQo0O9CFbdEW/w5NzJcmQ6WngRyPov9AT+l0cL6J12SnZz1ncT2o/uPq3sjypHpZuHyGU/4Rwc22Jfx4wvyLYnt3NQdbwcMMywaCQfURrglMbP/c/agoQVxrfvY+3Ub0vq84CH/WeTzLKxO3lc8bEe3U8XFahu4vJb4oZ5fJ6kO83os3X0xZFzt63q73db1vgrxXOnp6enp6enp6enp6enp6fn1xFlS1S/5bLdej1aT0Xq6m+Xb/TDJgo0hfhKNq+VucrPx/vNq+jIMN2QTV/lEq+PZ82pZCalfM6DKDcv5Nssw8mr/yJ7sXiaWu8cQ4qfRk0vRSbF+FL5eF1PnmuhCcBYq3nsqpT3tRX7IZOaxQXu6FLcjE9/ll+VclMbs6FnfP3ZiNGZkxfq5DLfuhUrfX1LmESwNFXFj9g2zq5P5rgzuYMq5VOkHBTWUbOMsE1g36CPPZ/Q9ePQeBUPJaXwEClQMddFj3GyL/xywZW/IFXqmRD5FxI1fueAFJhDduvQD0EsoD8Xq1qwQF8cEOzHgGxt6y4hul/gd8sHy6I6X1xS0EvkFKtrHweiJD90QfkUZAgkloqeS3CalieBkrGbiEpIBVxHc177HikAhdvjRj/h34Jic7dv4fgSGicgY4fcyJcVOXODTZsSCjtFPDh4Voic9aOKvhZTATdjiKwKHbfpshKfbImqusQV+xnr4apRAgo+Avxx/u4vSgw8uzFv7jnujb/QoEmNc84vgKRYWuF6kxDnc17glwmUfMy1urbCFumuXuHRD4Q7/auJgMdhSMGbYZ09F3gq7sP6IQezCBtuPGMgubLD8iOjpeA7YtT/LuP+2Aa9WmVP0+D8nrEZ8cP9pIw4WAtGTxR2xKH8PxNqfMY+7heBzX2CsED0c3hnjvtHCgxfXmIbdQjKGLabXRMrydCIMl6ngKPAtzKJuEffftcDMc+OoH3XGqLcddoqqJ4wuGOKjpF0cDAQKzqfdw0BhkNvQqHYhyG1oVIDCWOfsgn6hVObxvSuSVFthQEG2S7QrbMTWXvyEdm0Garyod7SPmsACGJ9oO98ia7x00D1MQ7xYtGw0rxfBBaE+KDUP08AipV/RjJoG6pU2aCoM+BtqrtLw4mxntN9hvHP/U1u052D9fq9N1uMRfQ66AoO9XJhk80W8MzQkNUshJoCmJX45GtdjLGabYK76xSm//QH/AOYvg0fB6ZwKAAAAAElFTkSuQmCC" id="icon" alt="User Icon" />
        </div>

        <!-- Login Form -->
        <form v-on:submit.prevent="login">
            <input type="text" id="login" class="fadeIn second" name="login" placeholder="login" v-model='cc'>
            <input type="text" id="password" class="fadeIn third" name="login" placeholder="password" v-model='password'>
            <input type="submit" class="fadeIn fourth" value="Log In">
        </form>

        <!-- Remind Passowrd -->
        <div id="formFooter">
            <a class="underlineHover" href="#">Forgot Password?</a>
        </div>

        </div>
    </div>


</template>



<script type="text/javascript">
    import AuthService from '../services/auth.service';
    export default{
    data(){
        return {

            cc : '',
            password: '',

        users: [

        ]
        }
    },
    methods: {
    async  login(){
        try{
            console.log(this.cc+' '+this.password);
            let user = {'correo': this.cc ,'password':this.password};
            await AuthService.login(user);
            let usuario =  JSON.parse(localStorage.getItem('user'));
            let dataUser = AuthService.retrieve(usuario.id)            
            console.log(dataUser)
            this.$router.push('/vet');

        }
        catch (error) {
            console.log("hola")
        }
        }

        }

    }
</script>




<style media="screen">

    /* BASIC */

    html {
    background-color: #56baed;
    }

    body {
    font-family: "Poppins", sans-serif;
    height: 100vh;
    }

    a {
    color: #92badd;
    display:inline-block;
    text-decoration: none;
    font-weight: 400;
    }

    h2 {
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    display:inline-block;
    margin: 40px 8px 10px 8px;
    color: #cccccc;
    }



    /* STRUCTURE */

    .wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    min-height: 100%;
    padding: 20px;
    }

    #formContent {
    -webkit-border-radius: 10px 10px 10px 10px;
    border-radius: 10px 10px 10px 10px;
    background: #fff;
    padding: 30px;
    width: 90%;
    max-width: 450px;
    position: relative;
    padding: 0px;
    -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
    text-align: center;
    }

    #formFooter {
    background-color: #f6f6f6;
    border-top: 1px solid #dce8f1;
    padding: 25px;
    text-align: center;
    -webkit-border-radius: 0 0 10px 10px;
    border-radius: 0 0 10px 10px;
    }



    /* TABS */

    h2.inactive {
    color: #cccccc;
    }

    h2.active {
    color: #0d0d0d;
    border-bottom: 2px solid #5fbae9;
    }



    /* FORM TYPOGRAPHY*/

    input[type=button], input[type=submit], input[type=reset]  {
    background-color: #56baed;
    border: none;
    color: white;
    padding: 15px 80px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    text-transform: uppercase;
    font-size: 13px;
    -webkit-box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
    box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
    -webkit-border-radius: 5px 5px 5px 5px;
    border-radius: 5px 5px 5px 5px;
    margin: 5px 20px 40px 20px;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    }

    input[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {
    background-color: #39ace7;
    }

    input[type=button]:active, input[type=submit]:active, input[type=reset]:active  {
    -moz-transform: scale(0.95);
    -webkit-transform: scale(0.95);
    -o-transform: scale(0.95);
    -ms-transform: scale(0.95);
    transform: scale(0.95);
    }

    input[type=text] {
    background-color: #f6f6f6;
    border: none;
    color: #0d0d0d;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 5px;
    width: 85%;
    border: 2px solid #f6f6f6;
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    -webkit-border-radius: 5px 5px 5px 5px;
    border-radius: 5px 5px 5px 5px;
    }

    input[type=text]:focus {
    background-color: #fff;
    border-bottom: 2px solid #5fbae9;
    }

    input[type=text]:placeholder {
    color: #cccccc;
    }



    /* ANIMATIONS */

    /* Simple CSS3 Fade-in-down Animation */
    .fadeInDown {
    -webkit-animation-name: fadeInDown;
    animation-name: fadeInDown;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    }

    @-webkit-keyframes fadeInDown {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0);
    }
    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
    }
    }

    @keyframes fadeInDown {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0);
    }
    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
    }
    }

    /* Simple CSS3 Fade-in Animation */
    @-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
    @-moz-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
    @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }

    .fadeIn {
    opacity:0;
    -webkit-animation:fadeIn ease-in 1;
    -moz-animation:fadeIn ease-in 1;
    animation:fadeIn ease-in 1;

    -webkit-animation-fill-mode:forwards;
    -moz-animation-fill-mode:forwards;
    animation-fill-mode:forwards;

    -webkit-animation-duration:1s;
    -moz-animation-duration:1s;
    animation-duration:1s;
    }

    .fadeIn.first {
    -webkit-animation-delay: 0.4s;
    -moz-animation-delay: 0.4s;
    animation-delay: 0.4s;
    }

    .fadeIn.second {
    -webkit-animation-delay: 0.6s;
    -moz-animation-delay: 0.6s;
    animation-delay: 0.6s;
    }

    .fadeIn.third {
    -webkit-animation-delay: 0.8s;
    -moz-animation-delay: 0.8s;
    animation-delay: 0.8s;
    }

    .fadeIn.fourth {
    -webkit-animation-delay: 1s;
    -moz-animation-delay: 1s;
    animation-delay: 1s;
    }

    /* Simple CSS3 Fade-in Animation */
    .underlineHover:after {
    display: block;
    left: 0;
    bottom: -10px;
    width: 0;
    height: 2px;
    background-color: #56baed;
    content: "";
    transition: width 0.2s;
    }

    .underlineHover:hover {
    color: #0d0d0d;
    }

    .underlineHover:hover:after{
    width: 100%;
    }



    /* OTHERS */

    *:focus {
        outline: none;
    }

    #icon {
    width:60%;
    }

</style>
