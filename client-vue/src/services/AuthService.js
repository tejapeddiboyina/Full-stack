import Api from './Api'

export default {
    home(){
        return Api.get('sample')
    },
    add(sam){
        return Api.post('addSample',sam)
    },
    getOne(obj){
        return Api.get('getOne/'+obj.id)
    },
    edit(sam){
        return Api.put('getOne/'+sam.id, sam)
    }
} 