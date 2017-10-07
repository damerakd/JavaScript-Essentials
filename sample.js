let inputarr = document.getElementsByName('modify');

let div = document.getElementById('change');

function set()
{
    
    for( let index = 0; index < inputarr.length; index++ )
    {
        let modify = inputarr[ index ].getAttribute('id');
        
        let Value = inputarr[ index ].value;
        
        div.style[ modify ] = Value;
    }
}

document.getElementById('set').addEventListener('click',set);
