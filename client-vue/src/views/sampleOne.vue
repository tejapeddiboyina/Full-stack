</<template>
    <div>
        {{samId}} | {{msg1}}<br>
        <input type="text" v-model="name" placeholder="name"/>
        <input type="text" v-model="version" placeholder="version"/>
        <button value="get" @click="edit()">edit</button><br>
        <span>{{edited}}</span>
    </div>    
</template>

<script>
    import AuthService from '../services/AuthService'
    export default {
        props : ['samId','msg'],
        data() {
            return {
                msg1 : null,
                name : '',
                version : '',
                edited : null
            }
        },
        async mounted() {
            this.msg1 = (await AuthService.getOne({
                            id : this.samId
                        })).data
        },
        methods : {
            async edit() {
                this.edited = (await AuthService.edit({
                    id : this.samId,
                    name : this.name,
                    version : this.version
                })).data
            }
        }
    }
</script>