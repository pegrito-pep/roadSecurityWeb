<template>
    <div class="container-fluid">
        <div class="page-header">
            <div class="row align-items-end">
                <div class="col-lg-8">
                    <div class="page-header-title">
                        <i class="ik ik-file-text bg-blue"></i>
                        <div class="d-inline">
                            <h5>Profil d'Utilisateur</h5>
                            <span>c'est ici que vous pouvez modifier vos informations personnelles</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <nav class="breadcrumb-container" aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <a href="../index.html"><i class="ik ik-home"></i></a>
                            </li>
                            <li class="breadcrumb-item">
                                <a href="#">Pages</a>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Profil</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4 col-md-5">
                <div class="card">
                    <div class="card-body">
                        <div class="text-center"> 
                            <img src="/img/profile-picture.jpg" class="rounded-circle" width="150">
                            <h4 class="card-title mt-10">{{ fullname }}Tagne Pedro</h4>
                            <p class="card-subtitle">Admin</p>
                        </div>
                    </div>
                    <hr class="mb-0"> 
                    <div class="card-body"> 
                        <small class="text-muted d-block">adresse Mail </small>
                        <h6>{{ email }}tagnemiguel@gmail.com</h6> 
                        <small class="text-muted d-block pt-10">Phone</small>
                        <h6>{{ tel }}654458466</h6>
                        <small class="text-muted d-block pt-30">Social Profile</small>
                        <br>
                        <button class="btn btn-icon btn-facebook"><i class="fab fa-facebook-f"></i></button>
                        <button class="btn btn-icon btn-twitter ml-1"><i class="fab fa-twitter"></i></button>
                        <button class="btn btn-icon btn-instagram ml-1"><i class="fab fa-instagram"></i></button>
                    </div>
                </div>
            </div>
            <div class="col-lg-8 col-md-7">
                <div class="card">
                    <ul class="nav nav-pills custom-pills" id="pills-tab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="pills-profile-tab" data-toggle="pill" href="#last-month" role="tab" aria-controls="pills-profile" aria-selected="false">Profil</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="pills-setting-tab" data-toggle="pill" href="#previous-month" role="tab" aria-controls="pills-setting" aria-selected="false">Paramètres</a>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="last-month" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-3 col-6"> <strong>Nom</strong>
                                        <br>
                                        <p class="text-muted">{{ name }}TAGNE</p>
                                    </div>
                                    <div class="col-md-3 col-6"> <strong>Prénom</strong>
                                        <br>
                                        <p class="text-muted">{{ surname }}Pedro</p>
                                    </div>
                                    <div class="col-md-3 col-6"> <strong>Mobile</strong>
                                        <br>
                                        <p class="text-muted">{{ tel }}693803726</p>
                                    </div>
                                    <div class="col-md-3 col-6"> <strong>Email</strong>
                                        <br>
                                        <p class="text-muted">{{ email }}tagnemiguel@gmail.com</p>
                                    </div>
                                </div>
                                <hr>
                            </div>
                        </div>
                        <div class="tab-pane fade " id="previous-month" role="tabpanel" aria-labelledby="pills-setting-tab">
                            <div class="card-body">
                                <form class="form-horizontal" @submit.prevent="sendUserDataForm">
                                    <transition enter-active-class="animated zoomIn">
                                        <div>
                                            <div class="form-group">
                                                <label for="example-name">Name</label>
                                                <input type="text" class="form-control" name="example-name" id="example-name" v-model="name">
                                            </div>
                                            <div class="form-group">
                                                <label for="example-name">Surname</label>
                                                <input type="text" class="form-control" name="example-name" id="example-name" v-model="surname">
                                            </div>
                                            <div class="form-group">
                                                <label for="example-email">Email</label>
                                                <input type="email" class="form-control" name="example-email" id="example-email" v-model="email">
                                            </div>
                                            <div class="form-group">
                                                <label for="example-phone">Phone No</label>
                                                <input type="text" id="example-phone" name="example-phone" class="form-control" v-model="tel">
                                            </div>
                                            <div class="imagesAnnonce border-dotted borderRadius">
                                                <label for="imagesAnnonce" class="mr-2"><b>Photo de profil </b></label>                                           
                                                <label>
                                                   <b-img src="/img/camera.png" style="width: 3em; height: 3em"/>
                                                    <input type="file"    
                                                    accept=".png, .jpg, .jpeg"
                                                    @change="onFileChange" style="display:none">
                                                </label>
                                                
                                            </div>
                                            <div id="preview">
                                                <img v-if="url" :src="url" />
                                            </div>        
                                        </div>
                                    </transition>
                                    <button type="button" class="btn btn-secondary btn-rounded mr-4" @click="activeUpdateForm">Modifier mon mot de passe</button>
                                    <transition enter-active-class="animated zoomIn">
                                        <div v-if="step ==2">
                                            <div class="form-group">
                                                <label for="example-password">Mot de passe actuel</label>
                                                <input type="password" value="password" class="form-control" name="example-password" id="example-password" v-model="actualmdp">
                                            </div>
                                            <div class="form-group">
                                                <label for="example-password">Nouveau Mot de Passe</label>
                                                <input type="password" value="password" class="form-control" name="example-password" id="example-password" v-model="newmdp">
                                            </div>
                                        </div>
                                    </transition>
                                    <button class="btn btn-success" type="submit">Mettre à jour<b-spinner v-if="submitted" small></b-spinner></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Profile',
    data:() =>({
        submitted: false,
        step:1,
        name:"",
        surname:"",
        email:"",
        tel:"",
        actualmdp:"",
        newmdp:"",
        url:null

    }),
    computed:{
        fullname(){
            return this.name +this.surname;
        }
    },
    methods:{
        onFileChange(e){
            const file=e.target.files[0];
            this.url=URL.createObjectURL(file)
        },
        activeUpdateForm(){
            this.step=2
            console.log("step",this.step)
        },
        sendUserDataForm(){
            this.submitted = true
            if (this.step==1){
                const personalData={
                    nom:this.name,
                    prenom:this.surname,
                    email:this.email,
                    tel:this.tel
                }
                axios.post('updates-informations', personalData).then(response => {
                    this.submitted = false
                }).catch(error => {
                    this.submitted = false
                    App.notifyError(error.message)
                })

            }
            if (this.step == 2) {
                    axios.put('update-password', {mdp: this.actualmdp, code: this.newmdp}).then(response => {
                        App.notifySuccess(response.message)
                    }).catch(error => {
                        this.submitted = false
                        App.notifyError(error.message)    
                    })
                
            }
        },
        //method used to upload avatar
        getBase64(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = (error) => reject(error);
            });
        },
        async uploadAvatar() {
            var mediaFile = document.querySelector("#avatar");
            const [file] = mediaFile.files;
            document.querySelector("#imageProfile").src = URL.createObjectURL(file);
            // conversion en base64
            this.avatar = await this.getBase64(file);
        },
    }
}
</script>