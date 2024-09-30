document.getElementById('blog').addEventListener('click',function(){
    window.location.href='/blog.html'
})

// This is challange part for using common function
// This common function is for reusing
function idnibo(id){
    return document.getElementById(id)
}
function remove(id){
    let re = document.getElementById(id)
    re.classList.remove('hidden')
}
function add(id) {
    let ad =document.getElementById(id)
    ad.classList.add('hidden')
}
// For challange part two common function is end here

document.getElementById('donate-now1').addEventListener('click',function(){
    let donation= parseFloat(document.getElementById('donation1').value)
    let contentbalance = parseFloat(document.getElementById('content-balance').innerText)

    contentbalance += donation
    idnibo('content-balance').innerText = contentbalance.toFixed(2)

    if(donation<0 || isNaN(donation)){
        alert('Invalid donation amount')
        return
     }
    let headerbalance= parseFloat(idnibo('header-balance').innerText)
    headerbalance -= donation 
    idnibo('header-balance').innerText = headerbalance.toFixed(2)
    let modal=idnibo('modal')
    modal.classList.toggle('hidden')
   
    const newhtml = document.createElement('div')
    newhtml.classList.add('w-full')
    newhtml.innerHTML =`
      <div class="border-2 my-2 rounded-md p-6 w-full">
            <p class="text-bold font-semibold">${donation} Taka is Donated for Flood at Noakhali, Bangladesh</p>
            <p class="mb-3 m-1 mt-2 p-1 bg-gray-100">Date: ${new Date()}</p>
      </div>
    `
    const challange = idnibo('challange')
    challange.insertBefore(newhtml, challange.firstChild)
    document.getElementById('donation1').value = ""
})
// First part done
// now this is for second part
document.getElementById('donate-now2').addEventListener('click',function(){
    let donation= parseFloat(document.getElementById('donation2').value)
    let contentbalance = parseFloat(document.getElementById('content-balance2').innerText)

    contentbalance += donation
    idnibo('content-balance2').innerText = contentbalance.toFixed(2)

    if(donation<0 || isNaN(donation)){
        alert('Invalid donation amount')
        return
     }
    let headerbalance= parseFloat(idnibo('header-balance').innerText)
    headerbalance -= donation 
    idnibo('header-balance').innerText = headerbalance.toFixed(2)
    let modal=idnibo('modal')
    modal.classList.toggle('hidden')
   
    const newhtml = document.createElement('div')
    newhtml.classList.add('w-full')
    newhtml.innerHTML =`
      <div class="border-2 my-2 rounded-md p-6 w-full">
            <p class="text-bold font-semibold">${donation} Taka is Donated for Flood Relief in Feni, Bangladesh</p>
            <p class="mb-3 m-1 mt-2 p-1 bg-gray-100">Date: ${new Date()}</p>
      </div>
    `
    const challange = idnibo('challange')
    challange.insertBefore(newhtml, challange.firstChild)
     document.getElementById('donation2').value = ""
})
// here is second part done 
// now third part will start
document.getElementById('donate-now3').addEventListener('click',function(){
    let donation= parseFloat(document.getElementById('donation3').value)
    let contentbalance = parseFloat(document.getElementById('content-balance3').innerText)

    contentbalance += donation
    idnibo('content-balance3').innerText = contentbalance.toFixed(2)

    if(donation<0 || isNaN(donation)){
        alert('Invalid donation amount')
        return
     }
    let headerbalance= parseFloat(idnibo('header-balance').innerText)
    headerbalance -= donation 
    idnibo('header-balance').innerText = headerbalance.toFixed(2)
    let modal=idnibo('modal')
    modal.classList.toggle('hidden')
   
    const newhtml = document.createElement('div')
    newhtml.classList.add('w-full')
    newhtml.innerHTML =`
      <div class="border-2 my-2 rounded-md p-6 w-full">
            <p class="text-bold font-semibold">${donation} Taka is Aided for Injured in the Quota Movement</p>
            <p class="mb-3 m-1 mt-2 p-1 bg-gray-100">Date: ${new Date()}</p>
      </div>
    `
    const challange = idnibo('challange')
    challange.insertBefore(newhtml, challange.firstChild)
     document.getElementById('donation3').value = ""
})
// third part end here
// challange for modal parent
document.getElementById('modal-button').addEventListener('click',function(){
    let modal = idnibo('modal')
    modal.classList.toggle('hidden')
})

document.getElementById('history').addEventListener('click',function(){
    let history =idnibo('history')
    let donation =idnibo('donation')
    history.classList.remove('bg-[#d3caca4d]','border-2','border-gray-400','text-[#111111B3]')
    history.classList.add('bg-[#B4F461]')
    donation.classList.remove('bg-[#B4F461]')
    donation.classList.add('bg-[#d3caca4d]','border-2','border-gray-400','text-[#111111B3]')
    add('main')
    remove('challange')
})  
document.getElementById('donation').addEventListener('click',function(){
    let history =idnibo('history')
    let donation =idnibo('donation')
    donation.classList.remove('bg-[#d3caca4d]','border-2','border-gray-400','text-[#111111B3]')
    donation.classList.add('bg-[#B4F461]')
    history.classList.remove('bg-[#B4F461]')
    history.classList.add('bg-[#d3caca4d]','border-2','border-gray-400','text-[#111111B3]')
    remove('main')
    add('challange')
}) 
document.getElementById('challange').addEventListener()