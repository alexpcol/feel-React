import Realm from 'realm';
import Session from './session';
import Comic from './comic';
import Character from './character'

function realmHandler (callback) {
    Realm.open({schema: [Session, Comic, Character]})
    .then(callback)
}

function add(type, data) {
    realmHandler((realm) => {
        realm.write(() => {
            realm.create(type, data);
        })  
    })
}

function get(type, callback) {
    realmHandler((realm) => {
        return callback(realm.objects(type))
    })
}

function addListener(type, callback) {
    realmHandler((realm) => {
        realm.objects(type).addListener(callback);
    })
}
function removeListeners(type){
    realmHandler((realm) =>{
        realm.removeAllListeners();
    })
}
export default {
    realmHandler,
    add,
    get,
    addListener,
    removeListeners,
}    
