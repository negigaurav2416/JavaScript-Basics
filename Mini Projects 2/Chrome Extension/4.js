let myLeads = []
const input = document.getElementById("input")
const btn = document.getElementById("btn")
const ul = document.getElementById("ul")

btn.addEventListener("click" , function(){
    myLeads.push(input.value)
    input.value = ""
    renderLeads()
})                                          

function renderLeads(){
    let listItems = ""
    for (let i=0;i<myLeads.length;i++)
    {
    // listItems += "<li><a target = '_blank' href='#'>" + myLeads[i] + "</a></li>";\
     listItems += `
    <li>
        <a target='_blank' href="${myLeads[i]}">
            ${myLeads[i]}
        </a>
    </li>
    `;
    }
    ul.innerHTML = listItems
}