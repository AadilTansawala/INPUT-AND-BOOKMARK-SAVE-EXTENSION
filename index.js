// function saveLead(){
//     console.log("Button Clicked !")
// }
let myLeads = []


const inputEl = document.getElementById("input-el")
const inputbtn= document.getElementById("input-btn")
const tabbtn= document.getElementById("tab-btn")
const deletebtn= document.getElementById("delete-btn")
const ulEl= document.getElementById("ul-el")

const leadsFromLocalStorage =JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    console.log(myLeads)
    rendorLeads(myLeads)
}

function rendorLeads(leads){
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        // ulEl.innerHTML +=   "<li>" + myLeads[i] + "</li>"
        // const li=document.createElement("li")
        // li.textContent=myLeads[i]
        // ulEl.append(li)
        // listItems+="<li><a target='_blank' href='"+myLeads[i]+"'>" + myLeads[i] + "</a></li>"
        listItems+=
        `<li>
            <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
            </a>
        </li>`
    }
        ulEl.innerHTML = listItems
}

inputbtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value= ""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    rendorLeads(myLeads)
})
deletebtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads = []
    rendorLeads(myLeads)
})


tabbtn.addEventListener("click",function(){
    chrome.tabs.query({active : true,currentWindow:true},function (tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        rendorLeads(myLeads)
    })
    
})

