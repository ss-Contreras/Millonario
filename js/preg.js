class preg{
    constructor (p,resp,op1,op2,op3){
        this.p=p;
        this.resp=resp;
        this.op1=op1;
        this.op2=op2;
        this.op3=op3;
        
    }    

    op(){
        
        return [this.resp,this.op1,this.op2,this.op3].sort((a,b)=>Math.random()-0.5);
    }
}

uno=new preg("¿Cual es la diferencia principal entre la nube publica y la nube privada?:","La nube pública ofrece una mayor escalabilidad y flexibilidad.","La nube pública ofrece un mayor control sobre la infraestructura.","Ambas son lo mismo","La nube pública es más económica que la nube privada.");
dos=new preg("¿Cuál es la principal ventaja entre la nube pública en comparación con la nube privada?:","La nube pública ofrece una mayor escalabilidad y flexibilidad","La nube pública es menos segura que la nube privada","La nube pública es más económica que la nube privada","No hay ninguna ventaja");
tres=new preg("¿Cuál es la principal desventaja de la nube pública en comparación con la nube privada?:","La nube pública es menos segura que la nube privada.","La nube pública tiene menos opciones de personalización que la nube privada.","La nube pública tiene mayores costos de mantenimiento que la nube privada.","Tienen las mismas desventajas");
cuatro=new preg("¿Qué es la nube híbrida?:","Un modelo de nube que combina la nube pública y la nube privada.","Un modelo de nube que solo utiliza recursos de la nube pública.","Un modelo de nube que solo utiliza recursos de la nube privada.","Es un nombe de una nube en la web");
cinco=new preg("¿Cuál es la principal ventaja de la nube híbrida?","La nube híbrida ofrece un mayor control sobre la infraestructura.","La nube híbrida ofrece una mayor escalabilidad y flexibilidad.","La nube híbrida permite una mayor ","Esta nube nos permite usar word");
seis=new preg("¿Cuál de las siguientes opciones describe mejor la nube pública?","Un modelo de nube que solo utiliza recursos de la nube pública.","Un modelo de nube que combina la nube pública y la nube privada.","Un modelo de nube que solo utiliza recursos de la nube privada.","Es la mejor opcion para las empresas privadas grandes");
siete=new preg("¿Cuál es la principal ventaja de la nube pública en comparación con la nube privada?","La nube pública ofrece una mayor escalabilidad y flexibilidad."," La nube pública ofrece un mayor control sobre la infraestructura.","La nube pública es más económica que la nube privada.","Es gratis");
ocho=new preg("¿Cuál es la principal desventaja de la nube pública en comparación con la nube privada?","La nube pública es menos segura que la nube privada.","La nube pública tiene menos opciones de personalización que la nube privada.","La nube pública tiene mayores costos de mantenimiento que la nube privada.","Limite de archivos");
nueve=new preg("¿Qué es la nube híbrida?:","Un modelo de nube que combina la nube pública y la nube privada.","Un modelo de nube que solo utiliza recursos de la nube pública.","Un modelo de nube que solo utiliza recursos de la nube privada.","UNa nube que es manejada por un tercero");
diez=new preg("¿Cuál es la principal ventaja de la nube híbrida?:","La nube híbrida ofrece una mayor escalabilidad y flexibilidad.","Es flexible","La nube híbrida permite una mayor personalización de los recursos.","La nube híbrida ofrece un mayor control sobre la infraestructura.");
// once=new preg("Al periódico que se publica en horas de la tarde, se denomina:","hola","Matutino","Clandestino","Pristino");
// doce=new preg("Las Vegas es una ciudad estadounidense que queda en:","hola"," Oklahoma","Arizona","Colorado");
// trece=new preg("¿Cual de estos animales es un rumiante?","hola","La ardilla","El caracol","El loro");
// catorce=new preg("Es el paso del agua del estado líquido al estado gaseoso:","hola","Licuefacción","Sublimación","Solidificación");
// quince=new preg("¿Que parte del cuerpo se examina en una encefalografia?","hola","Ovarios","Pulmones","Higado");



const preguntas=[uno,dos,tres,cuatro,cinco,seis,siete,ocho,nueve,diez].sort((a,b)=>Math.random()-0.5);

//Funciones necesarias para el juego
function aparecer_ventana(){//ventana de comoddines y mensajes
    ventana.style.transform="scale(1)";
    document.getElementById(identificacion).style.display="block";
    clearInterval(intrv);
     
   

}

btn_comodin.onclick= ()=>{
    
    ventana.style.transform="scale(0)";
    document.getElementById(identificacion).style.display="none";
      
    if(identificacion=="resp_correcta"){
        
        cambiar_pregunta(preguntas[nivel].p,preguntas[nivel].op());
        
    }
    temporizador();  
        
}

function cambiar_pregunta(p,r){ //funcion para cambiar la pregunta p=pregunta r=array con las respuestas
    pregunta.innerText=p;
    
    for (var i=0;i<4;i++) {
        respuestas[i].innerText=r[i];
    }          
    
    cont_tiempo=31;
   
    
    
 
 }

function felicidades(){//Mensaje Ganador
    ventana2.style.transform="scale(1)";
    victoria.style.display="inline-block";
    ganado.innerText=ganado.innerText + " " + dinero_ganado;
}

function perder(){//Mensaje Perdedor
    if (sonar) {
        intro.muted = true;
        m_perdiste.play();
    }
    ventana2.style.transform="scale(1)";
    clearInterval(intrv);
    victoria.innerHTML ="¡Haz perdido! Intenta nuevamente";
    victoria.style.display="inline-block";
    document.getElementById("img_vent").setAttribute("src","medios/img/perder.jpg");
    ganado.innerText=ganado.innerText + " " + dinero_ganado;

}


//Cambio y corrección de las preguntas del juego
//Además, por cada pregunta correcta se acumula una recompenza
cambiar_pregunta(preguntas[nivel].p,preguntas[nivel].op());

for (let i=0;i<respuestas.length;i++){
    resp[i].onclick=() =>{
        if (respuestas[i].innerText==preguntas[nivel].resp){
            
                                 
            identificacion="resp_correcta";
            if (sonar) m_correcto.play();
            nivel++;
            pasaste.innerText="Pasaste al nivel:"+ (nivel+1);
            aparecer_ventana();
            recompenza=recompenza+ 10000*(nivel);
            
            
            if(nivel> preguntas.length-1){
                dinero_ganado=recompenza;
                felicidades();
                
                
            }else{
                
                
                if((nivel)%5==0){
                    dinero_ganado=recompenza;//cada vez supera un nivel (5preguntas)
                    dinero.innerText=dinero_ganado;
                                    
                }
            }
            

        }else perder();
            
            
            
        
    
    }
}


//Comodines de ayuda a la resolución de las preguntas


cont_comodin.addEventListener("click",(e)=>{
    
    if(e.target.classList.contains("comodines")){
        
        e.target.style.backgroundColor="gray";
    }

    if(amigo==false & e.target.classList.contains("icon-phone")){
        amigo=true;
        identificacion="llamar";
        aparecer_ventana();
        document.getElementById("correcto").innerText= preguntas[nivel].resp;
    } else if(publico==false & e.target.classList.contains("icon-users")){
        publico=true;
        identificacion="audiencia";
        aparecer_ventana();
        for (var i=0;i<4;i++) {

            if(respuestas[i].innerText==preguntas[nivel].resp) barra[i].value="70";
            
        } 

    }else if(mitad==false & e.target.classList.contains("mitad")){
        mitad=true;
        let aux1=0;
        for (var i=0;i<4 & aux1<2;i++) {
            
            if(respuestas[i].innerText!=preguntas[nivel].resp){
                aux1++;
                respuestas[i].innerText="";
            } 
            
        } 

        
    }

    
    
        
});



//Botones para rendirse o terminar el juego
rendirse.onclick=()=>{
    ventana2.style.transform="scale(1)";
    ganado.innerText=ganado.innerText + " " + dinero_ganado;
}

terminar.onclick=()=>{ //Una vez termina el juego se recarga la pagina y vuelve al inicio
    location.reload();
}





