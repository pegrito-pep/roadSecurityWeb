<template>
    <div class="form-group">
        <label for="">Multiple select box using select 2 </label>
         <b-form-select  class="form-control select2 select2-hidden-accessible" 
            multiple
            @change="setResponses"
         v-model="response">
            <!-- <option value="cheese" data-select2-id="9" >Lion</option>
            <option value="leopard" data-select2-id="9" >Léopard</option> -->
            <option v-for="item in propositions" :value="item" :key="item">{{item}}</option>
        </b-form-select>
        <!--<span class="select2 select2-container select2-container--default select2-container--below select2-container--focus" dir="ltr" data-select2-id="5" style="width: 625px;"><span class="selection"><span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1"><ul class="select2-selection__rendered">
        <li class="select2-selection__choice" title="Tomatoes" data-select2-id="15"><span class="select2-selection__choice__remove" role="presentation">×</span>Tomatoes</li>
        <li class="select2-selection__choice" title="Pepperoni" data-select2-id="16"><span class="select2-selection__choice__remove" role="presentation">×</span>Pepperoni</li><li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" placeholder="" style="width: 0.75em;">
        </li></ul></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>-->
    </div>
</template>
<script>
export default {
    name:"response",
    props: ["propositions"],
    data:()=>({
        response:[],
        allProps:[],
        // propositions:{
        //     libelle:"",
        //     isAnswer:false
        // }
    }),
    methods: {
        setResponses(){
              console.log("propositions", this.propositions)
              console.log("response",this.response)
            for(let i=0; i<this.propositions.length; i++){
                let proposition={
                    libelle:this.propositions[i],
                    isAnswer:true ? this.contains(this.response, this.propositions[i]):false
                }
                let exist = false;
                for (let i=0; i<this.allProps.length; i++) {
                    if (this.allProps[i].libelle == proposition.libelle) {
                        exist = true
                        break
                    }
                }
                if (!exist) {
                    this.allProps.push(proposition)
                }
            }
            this.$emit('response', this.allProps)
            console.log("allProps",this.allProps)
        },
        contains(a, obj) {
            for (var i = 0; i < a.length; i++) {
                if (a[i] === obj) {
                    return true;
                }
            }
            return false;
        }
    }
}
</script>