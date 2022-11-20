/********************* traitement ******************************************** */


function randomValue ()
{
 var test =  (Math.floor((Math.random() * 10)+1) % 2 === 0)  // fonction renvoi true/false
    if (test == true)
    {
        return 'red'
    }
    else
    {
        return 'black'
    }
}


function roulettetour ( nbr_tour)
{
    var result_tour = []
    for (i=0; i< nbr_tour; i++)
    {
        result_tour.push(randomValue())
    }
    return result_tour
}



function plus_grand_val_rep (x)
{
    let seq = 0
    let grd_seq = 0
    let couleur =""

    for(i=0; i< x.length; i++)
    {
        var res_rou = x[i]
        var res_prec_rou 
        if (i > 0)
        {
            res_prec_rou = x[i-1]
            
        }
        else
        {
            res_prec_rou = res_rou
        }
        
        if (res_prec_rou =="red" && res_rou == "red")
        { seq = seq + 1 }
        else if ( res_prec_rou =="black" && res_rou == "black")
        { seq = seq + 1}
        else if ( res_prec_rou == "black" && res_rou == "red")
        { seq = 1 }
        else if (res_prec_rou == "red" && res_rou == "black")
        { seq = 1 }
        
        if ( seq > grd_seq)
        { 
            grd_seq = seq
            couleur = res_rou
        }
         
    }
    
    return [grd_seq, couleur]
}
var aux = roulettetour(5)
console.log(aux)
console.log(plus_grand_val_rep(aux))

/************************************ btn spin ******************************************* */
function roulette_func ()
{
    var audio = new Audio('song/audio.mp3')
    audio.play()
    deg = Math.floor( 5000 + Math.random()* 5000)
    document.getElementById('roue').style.transform = "rotate("+deg+"deg)"
    console.log(deg)
    let main = document.getElementById('roue')



    let deg_actuel = deg % 360
    let result = document.getElementById('win')
    setTimeout(() => {
        if (deg_actuel >0 && deg_actuel<= 20 )
        {
            result.innerHTML='you win 110'
        }
        
        if (deg_actuel >20 && deg_actuel<= 65 )
        {
            result.innerHTML='no chance'
        }
        
        if (deg_actuel >65 && deg_actuel<= 110  )
        {
            result.innerHTML='you win 10'
        }
        
        if (deg_actuel >110 && deg_actuel<= 155 )
        {
            result.innerHTML=' no chance '
        }
        
        if (deg_actuel >155 && deg_actuel<= 200 )
        {
            result.innerHTML='you win 350' 
        }
        
        if (deg_actuel >200 && deg_actuel<= 245 )
        {
            result.innerHTML='no chance'
        }
        
        if (deg_actuel >245 && deg_actuel<= 290 )
        {
            result.innerHTML='you win 200'
        }
        
        if (deg_actuel >290 && deg_actuel<= 335 )
        {
            result.innerHTML='no chance'
        }
        
        if (deg_actuel >335 && deg_actuel<= 360 )
        {
            result.innerHTML='you win 110'
        }   
    }, 15000);
    


}



    //
    


/*
360 / 8 = 45
2427 / 45 = 53.93 
Math.floor(53,93)
*/