function debug() {
    console.log("hello world");
    p = new person("hello", 3);
    p.changeName("world");
    console.log(p);
    p.show()
}

function person(name, age) {
    this.name = name;
    this.age = age;

    this.changeName = changeName;
    this.show = show;

    function changeName(name) {
        this.name = name;
    }

    function show() {
        txt = ""
        for (ele in this) {
            txt = txt + ele + this[ele] + "\n"
        }
        console.log(txt)
        return txt
    }
}