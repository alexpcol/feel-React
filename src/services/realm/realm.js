import Realm from 'realm';
import AppConfig from './schemes/appConfig'

function realmHandler (callback) {
    Realm.open({schema: [AppConfig]})
    .then(callback)
}

function add(type, data) {
    realmHandler((realm) => {
        realm.write(() => {
            realm.create(type, data);
        })  
    })
}
function update(type, data) {
    realmHandler((realm) => {
        realm.write(() => {
            realm.create(type, data, true);
        })  
    })
}

function get(type, callback) {
    realmHandler((realm) => {
        return callback(realm.objects(type))
    })
}

export default {
    realmHandler,
    add,
    update,
    get,
}    
