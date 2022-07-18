let obj = {};
obj = Object.create(Object.prototype);
obj = new Object();


// per impostare le proprietà

obj.prop = true;
obj["prop"] = false;
Object.defineProperties(obj, "prop", {value: true}); // metodo corretto


let defineProperties = function(obj, key, value) {
    let config = { value: value };

    Object.defineProperties(obj, key, config);
};

obj["casa"] = "grande";


