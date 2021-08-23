<template>

        















   <div class="modal fade" id="superMaireModal" tabindex="-1" role="dialog" aria-labelledby="demoModalLabel" style="display: none;" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="demoModalLabel">Ajout d'un Super Maire</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                </div>
                <div class="modal-body">
               <!-- <form class="forms-sample" id="test" @submit.prevent="saveSuperMaireData">
                    <div class="form-group">
                        <label for="exampleInputUsername1">Nom</label>
                        <input type="text" class="form-control" id="libelle" required placeholder="Nom de la super Mairie" v-model="nom">
                    </div>

                    <transition enter-active-class="animated zoomIn">
                        <div v-if="step == 2">
                            <div class="border" v-for="field in fields" :key="field.first">
                                <input type="text" class="form-control mt-2" v-model="field.first" placeholder="Entrer le nom de la mairie">
                            </div>
                            <button data-repeater-create="" type="button" class="btn btn-success btn-icon ml-2 mb-2" @click="AddField"><i class="ik ik-plus"></i>
                            </button>
                        </div>
                    </transition>
                    <transition enter-active-class="animated zoomIn">
                        <div v-if="step == 3">
                            <super-maire-form />
                        </div>
                    </transition>
                </form>-->
                <div class="form-container">
            <div class="form-container-main">
                <div class="form-illustration">
                   <!-- <img :src="urlImage">-->
                    <img src="/img/avatar.png">
                    <div class="close">
                        <i class="fi-rr-cross-small closeBtn"></i>
                    </div>
                </div>
                <div class="form-container-area">
                    <div class="close">
                        <i class="fi-rr-cross-small closeBtn"></i>
                    </div>
                    <div class="titl">
                        <h1>Informations du Super Maire</h1>
                    </div>
                    <form action="">
                        <label class="input">
                            <input type="text" placeholder="Nom">
                        </label>
                        <label class="input">
                            <input type="text" placeholder="Prénom">
                        </label>
                        <label class="input">
                            <input type="email" placeholder="Email">
                        </label>
                        <label class="input">
                            <input type="text" placeholder="Matricule">
                        </label>
                        <label class="input">
                            <input type="tel" placeholder="Téléphone">
                        </label>
                        <label class="input">
                            <input type="password" placeholder="Mot de Passe">
                        </label>
                        <button>Envoyer</button>
                    </form>
                
                </div>
            </div>
        </div>
           
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                    <button type="submit" class="btn btn-primary" form="test" value="Submit">Enregistrer</button>
                </div>
            </div>
        </div>
    </div>
    
</template>























<script>
export default {
    name:"",
    urlImage:""
}
</script>
<style scoped>
.form-container{
            position: fixed;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100vw;
            height: 100vh;
            background-color: rgba(133, 133, 133, 0.295);
            box-shadow: 2px 2px 5px rgba(192, 192, 192, 0.5);
            z-index: 1000;
        }
        .form-container.visible{
            display: flex;
            /*animation: appear .3s alternate;*/
        }
        @keyframes appear {
            0%{opacity: 0;transform: scale(1.1);}
            100%{opacity: 1;transform: scale(1);}
        }
        .form-container-main{
            display: flex;
            width: 70%;
            height: 80%;
            border-radius: 20px;
            background-color: white;
        }
        .form-illustration{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 50%;
            height: 100%;
            border-radius: 16px 0 0 16px;
        }
        .form-illustration img{
            width: 80%;
        }
        .form-illustration .close{
            display: none;
        }
        .form-container-area .close{
            display: flex;
            justify-content: flex-end;
            padding: 20px 30px 0 0;
            cursor: pointer;
            width: 100%;
        }
        .form-container-area{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding-bottom: 20px;
            align-items: center;
            width: 50%;
            height: 100%;
        }
        .form-container-area .titl{
            width: 80%;
            height: auto;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-bottom: 3%;
        }
        .form-container-area .titl h1{
            color: #15256d;
            font-size: 2.5em;
        }
        .form-container-area .titl p{
            margin-top: 1em;
            font-size: 1em;
            line-height: 1.5em;
            color: rgb(104, 104, 104);
        }
        .form-container-area form{
            display: flex;
            width: 80%;
            height: 70%;
            flex-direction: column;
        }
        .form-container-area form label.input{
            display: flex;
            width: 100%;
            height: 12%;
            border-radius: 30px;
            margin-bottom: 6%;
            padding-left: 10px;
            box-shadow: 2px 5px 12px rgba(0, 0, 0, .036),
                        -2px 5px 12px rgba(0, 0, 0, .036),
                        inset 2px 3px 8px rgba(0, 0, 0, .056),
                        inset -2px 3px 8px rgba(0, 0, 0, .056);
        }
        .form-container-area form label.input.description{
            height: 17%;
        }
        .form-container-area form label input{
            border: none;
            width: 100%;
            outline: none;
            background-color: transparent;
        }
        .form-container-area form label textarea{
            border: none;
            width: 100%;
            outline: none;
            background-color: transparent;
            padding: 3% 2%;
            border-radius: 30px;
        }
        #entreprise:checked ~ .entreprise{
            color: #ff6600;
            transform: scale(1.1);
        }
        #particulier:checked ~ .particulier{
            color: #ff6600;
            transform: scale(1.1);
        }
        .form-container-area form span{
            margin-top: 10px;
            text-align: center;
            font-size: .9em;
        }
        .form-container-area form button{
            margin-top: 2%;
            width: 100%;
            color: white;
            font-size: 1.2em;
            font-weight: 600;
            border: none;
            padding:10px 0;
            background-color: #15256d;
            cursor: pointer;
            border-radius: 30px;
            transition: .15s;
        }
        button:hover{
            background-color: #364899;
        }
        .statut{
            margin: 10px 0 20px;
            display: flex;
            width: auto;
            justify-content: center;
        }
        .statut label{
            height: 30px;
            width: 30%;
            margin:0 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 2px;
            cursor: pointer;
            font-size: .8em;
        }
        .statut input{
            display: none;
        }
        .form-footer{
            width: 80%;
            display: flex;
            justify-content: center;
        }
        .form-footer span{
            width: 100%;
            text-align: center;
            font-size: .8em;
            color: rgb(134, 134, 134);
        }
        .form-illustration .title{
            display: none;
        }
        @media only screen and (max-width:700px){
            .form-container-main{
                width: 90%;
                height: 85%;
                justify-content: space-between;
            }
        }
        @media only screen and (max-width:600px){
            .form-container{
                align-items: center;
            }
            .form-container .form-container-main{
                flex-direction: column;
                height: 95%;
                width: 90%;
            }
            .form-illustration{
                position: relative;
                width: 100%;
                height: 40%;
            }
            .form-illustration img{
                height: 100%;
            }
            .form-illustration .close{
                position: absolute;
                top: 20px;
                right:20px;
                display: block;
                width: auto;
                height: auto;
            }
            .form-illustration .close i{
                color: #15256d;
                font-size: 1.2em;
            }
            .form-container-area{
                border-radius: 20px;
                background-color: #364899;
                width: 100%;
                height: 60%;
                padding: 0;
                align-items: center;
            }
            .form-container-area .close{
                display: none;
            }
            .form-container-area form{
                margin-top:0;
                width: 85%;
                height: 100%;
            }
            .form-container-area .titl{
                margin-bottom: 3%;
            }
            .form-container-area .titl h1{
                margin-top: 1em;
                color: whitesmoke;
                font-size: 1.3em;
            }
            .form-container-area .titl p{
                margin-top: .5em;
                font-size: .9em;
                line-height: 1em;
                color: whitesmoke;
            }
            .form-container-area form label.input{
                height: 14%;
                margin-bottom: 4%;
                background-color: whitesmoke;
                box-shadow: 2px 5px 12px rgba(0, 0, 0, .076),
                -2px 5px 12px rgba(0, 0, 0, .076),
                inset 2px 3px 8px rgba(0, 0, 0, .1),
                inset -2px 3px 8px rgba(0, 0, 0, .1);
            }
            .form-container-area form > label.description{
                height: 20%;
            }
            .statut label{
                height: 30px;
                width: 28%;
                margin:0 10px;
                font-size: .6em;
                font-weight: 500;
            }
            .statut{
                margin: 5px 0 10px;
            }
            .statut label{
                width: 40%;
                margin:0 0px;
                font-size: .85em;
            }

            .form-container-area form button{
                background-color: #d35b0c;
                box-shadow: 2px 5px 12px rgba(0, 0, 0, .1),
                -2px 5px 12px rgba(0, 0, 0, .1);
            }
            .statut{
                margin: 5px 0 0px;
            }
        }
</style>