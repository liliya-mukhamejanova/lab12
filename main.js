console.log("Hello, World!");


let h1_arr = document.getElementsByTagName("h1")
console.log(h1_arr[0])
let h = h1_arr[0]
h.innerHTML = "Lab12 Assignment"
h.style.color = "blue"

let hr1 = document.createElement("hr")
console.log(hr1)
document.body.appendChild(hr1)

let h2 = document.createElement("h2")
h2.innerHTML = "Task"
h2.style.color = "red"
document.body.appendChild(h2)

let p1 = document.createElement("p")
p1.innerHTML = "In this task you have to reproduce this HTML page as is using <strong>only</strong> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:"
document.body.appendChild(p1)

let ul1 = document.createElement("ul")
document.body.appendChild(ul1)

let li1 = document.createElement("li")
li1.innerHTML = "find elements in the DOM (<strong>5 points</strong>);"
li1.style.color = "green"
ul1.appendChild(li1)

let li2 = document.createElement("li")
li2.innerHTML = "create/add/remove elements (<strong>5 points</strong>);"
li2.style.color = "purple"
ul1.appendChild(li2)

let li3 = document.createElement("li")
li3.innerHTML = "change content of the elements (<strong>5 points</strong>);"
li3.style.color = "green"
ul1.appendChild(li3)

let li4 = document.createElement("li")
li4.innerHTML = "change styles of the elements (<strong>5 points</strong>);"
li4.style.color = "purple"
ul1.appendChild(li4)

let li5 = document.createElement("li")
li5.innerHTML = "change attributes of the elements (<strong>5 points</strong>);"
li5.style.color = "green"
ul1.appendChild(li5)

let li6 = document.createElement("li")
li6.innerHTML = "change classes of the elements (<strong>5 points</strong>)."
li6.style.color = "purple"
ul1.appendChild(li6)

let a = document.createElement("a")
a.innerText = "link."
a.setAttribute("href", "https://github.com/yessen/nu_web_programming/tree/main/week12")

let p2 = document.createElement("p")
p2.innerHTML = "Basic necessary code can be found in the supplementary materials to the Lecture 12 via this "
p2.appendChild(a) 
document.body.appendChild(p2)

let hr2 = document.createElement("hr")
console.log(hr2)
document.body.appendChild(hr2)

let h2_1 = document.createElement("h2")
h2_1.innerHTML = "Submission"
h2_1.style.color = "red"
document.body.appendChild(h2_1)

let p3 = document.createElement("p")
p3.innerHTML = "To submit your work, follow these instructions:"
document.body.appendChild(p3)

let ul2 = document.createElement("ul")
document.body.appendChild(ul2)

let li1_2 = document.createElement("li")
li1_2.innerHTML = "Create a new repository on Github, named <strong>lab12</strong> (<strong>1 point</strong>)."
li1_2.style.color = "green"
ul2.appendChild(li1_2)

let li2_2 = document.createElement("li")
li2_2.innerHTML = "Clone this repository to your local machine and work inside it."
li2_2.style.color = "purple"
ul2.appendChild(li2_2)

let li3_2 = document.createElement("li")
li3_2.innerHTML = "Create a new HTML file, called <strong>index.html</strong>, which has only one &lt;h1&gt; tag with &quot;Hello, World!&quot; message (<strong>1 point</strong>)."
li3_2.style.color = "green"
ul2.appendChild(li3_2)

let li4_2 = document.createElement("li")
li4_2.innerHTML = "Create a new JavaScript file, called <strong>main.js</strong>, which must contain your program (assignment) described above (<strong>1 point</strong>)."
li4_2.style.color = "purple"
ul2.appendChild(li4_2)

let li5_2 = document.createElement("li")
li5_2.innerHTML = "Link this <strong>main.js</strong> file to your <strong>index.html</strong> file (Note: place your script at the end of the <strong>body</strong> section)."
li5_2.style.color = "green"
ul2.appendChild(li5_2)

let li6_2 = document.createElement("li")
li6_2.innerHTML = "Write a JavaScript program in <strong>main.js</strong> to make your <strong>index.html</strong> look identical to this HTML file (<strong>5 points</strong>)."
li6_2.style.color = "purple"
ul2.appendChild(li6_2)

let li7_2 = document.createElement("li")
li7_2.innerHTML = "After you finish your work, submit it to the Github (<strong>2 points</strong>)."
li7_2.style.color = "green"
ul2.appendChild(li7_2)

let hr3 = document.createElement("hr")
console.log(hr3)
document.body.appendChild(hr3)

console.log(document);