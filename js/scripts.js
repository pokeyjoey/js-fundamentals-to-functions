_.each = function(list, callback){
    if (Array.isArray(list)){
        for (let i = 0; i < list.length; i++){
            callback(list[i], i, list);
        }
    } else {
        for (let key in list){
            callback(list[key], key, list)
        }
    }
};

_.each(['sarah', 'jon', 'kathy', 'jeff'], function(name, i, list){
    if (list[i]){
        console.log(name, 'is younger than', list[i + 1] )
    } else {
        console.log(name, 'is the oldest')
    }
});

function CreateSuspectObjects(name){
    return {
        name: name,
        color: name.split(' ')[1],
        speak(){
            console.log(`my name is ${name}`)
        }
    };
};

var suspects = ["Miss Scarlet", "Colonel Mustard", "Mr White"];

var suspectList = [];

var missScarlet = CreateSuspectObjects(suspects[0]);
console.log(missScarlet);

for (var i=0;i < suspects.length; i++){
    suspectList.push(CreateSuspectObjects(suspects[i]))
}

console.log(suspectList);

var suspectList = _.each(suspects, CreateSuspectObjects);