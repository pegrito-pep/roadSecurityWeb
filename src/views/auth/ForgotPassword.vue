<template>
     <div class="auth-wrapper">
        <div class="container-fluid h-100">
            <b-row class="flex-row h-100 bg-white">
                <div class="col-xl-8 col-lg-6 col-md-5 p-0 d-md-block d-lg-block d-sm-none d-none">
                    <div class="lavalite-bg" style="background-image: url('/img/childsRights2.jpg')">
                        <div class="lavalite-overlay"></div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-7 my-auto p-0">
                    <div class="authentication-form mx-auto">
                        <div class="mt-n5 mb-4 d-flex justify-content-center align-items-center flex-column">
                            <b-link :to="{name: 'home'}"><b-img src="/img/caysti-logo.png" style="width: 4em; height: 4em"/></b-link>
                            <h3 class="text-center mt-2 mb-0">Recover your password</h3>
                        </div>
                        
                        <form action="" @submit.prevent="sendForm">
                            <transition enter-active-class="animated zoomIn">
                                <div v-if="step == 1">
                                    <div class="form-group">
                                        <input type="email" class="form-control" placeholder="Email address" required="" v-model="email">
                                        <i class="ik ik-mail"></i>
                                    </div>
                                </div>
                            </transition>
                            <transition enter-active-class="animated zoomIn">
                                <div v-if="step == 2">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Verification Code" required="" v-model="code">
                                        <i class="fa fa-key"></i>
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control" placeholder="New password" required="" v-model="mdp">
                                        <i class="ik ik-lock"></i>
                                    </div>
                                </div>
                            </transition>
                            
                            <div class="sign-btn text-center">
                                <button type="submit" :disabled="submitted" class="btn btn-primary btn-lg"  style="background-color: #da624a !important; border-color:#da624a !important;">Submit <b-spinner v-if="submitted" small></b-spinner></button>
                            </div>
                        </form>
                        <div class="register">
                            <p>No Account? <b-link :to="{name: 'register'}" class="ml-2" style="color: #da624a !important;">Sign up now</b-link></p>
                        </div>
                    </div>
                </div>
            </b-row>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ForgotPassword',
    data: () => ({
        submitted: false,
        email: null,
        code: null,
        mdp: null,
        step: 1,
    }), 
    methods: {
        sendForm() {
            this.submitted = true
            if (this.step == 1) {
                axios.post('forget-password', {email: this.email}).then(response => {
                    storage.remove('user-email')
                    this.step = 2
                    this.submitted = false
                }).catch(error => {
                    this.submitted = false
                    App.notifyError(error.message)
                })
            }
            if (this.step == 2) {
                axios.post('check-forget', {login: this.email, code: this.code}).then(response => {
                    axios.put('update-password', {mdp: this.mdp, code: this.code}).then(response => {
                        App.notifySuccess(response.message)
                        this.$router.push({name: 'login'})
                    }).catch(error => {
                        this.submitted = false
                        App.notifyError(error.message)    
                    })
                }).catch(error => {
                    this.submitted = false
                    App.notifyError(error.message)
                })
            }
        }
    }
}
</script>