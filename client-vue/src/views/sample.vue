<template>
    <div>
        <span>
            <div v-for="sam in msg" :key="sam.id">
                {{sam.name}} | {{sam.version}}
                <button value="get" @click="getOne(sam._id)">getOne</button>
            </div>
        </span><br>

        <input type="text" v-model="name" placeholder="name"/>
        <input type="text" v-model="version" placeholder="version"/>
        <button value="add" @click="add">add</button>
        <div v-if="flag">{{msg1}}</div>
    </div>
</template>

<script>
    import AuthService from '../services/AuthService.js'
    export default {
        data(){
            return{
                msg : null,
                msg1 : null,
                name : '',
                version : '',
                flag : false
            }
        },
        async mounted() {
            this.msg =(await AuthService.home()).data
        },
        methods: {
            async add(){
                const response = (await AuthService.add({
                    name : this.name,
                    version : this.version
                }));
            },
            async getOne(id){
                console.log(id);
                this.$router.push('/getOne/'+id);
            }
        }
    }
</script>