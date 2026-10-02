let corpoSite = window.document.body
        let paragrafo1 = window.document.getElementsByTagName('p')[1]
        
        //--------------------------------------------------
        //let div = window.document.getElementById ('msg') --  PRA ID

        //let div = window.document.getElementsByName('msg')[0] -- PRA NOME em html
        
        //let div = window.document.getElementsByClassName ('msg') --PRA CLASS

        //--------------------------------------------------
        let div = window.document.querySelector('div#msg') // # pra ID e . pra class .. ex: ('div.msg')
        div.style.color = "yellow"
        
        //--------------------------------------------------
        div.style.background = "black"
        div.innerText = 'Clique aqui' //innerText altera o texto do elemento em questão, mas não altera o HTML do elemento

        //pra marca//
        //window.document.write(p1.innerText)
        //p1.style.color = "blue"
        //corpo.style.background = 'black'
        //window.document.write(p1.innerHTML)
        //window.alert(p1.innerText)  
 