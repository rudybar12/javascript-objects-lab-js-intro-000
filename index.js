var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value})
}

function destructivelyDeleteFromObjectByKey(object, key, value){
  object[key] = value
  return object
}
function deleteFromObjectByKey(object, key){
const newObj = Object.assign({}, object)
}
