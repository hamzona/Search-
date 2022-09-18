
let input=document.querySelector('#input');

async function f()
{
    let data=await fetch('users.json');

    users=await data.json();

    return users;
}



async function logic()
{
    let users=[];
    try
    {
       users= await f();
    }
    catch(e)
    {
        console.log(e);
    } 
    let space=document.querySelector('#space');

    users.forEach(user=>
        
        space.innerHTML+=`<div class="users"><div class="names">${user.name}</div>
                           <div>${user.email}</div></div>`
    )

    let fiter=space.querySelectorAll('.users ');


    input.addEventListener('input',()=>
    fiter.forEach(f=>
        {


            if(f.innerText.toLowerCase().includes(input.value.toLowerCase()))
            {
                f.style.display='block';
            }
            else
            {
                f.style.display='none';
            }
        }))
}

logic();