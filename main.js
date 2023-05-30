/**
 * @param img_info
 */

async function clickedEvent(img_info) {
    let artInfo = document.getElementsByTagName('img')[img_info].attributes[2].value;
    console.log(artInfo)

    let headers = new Headers([
        ['Content-Type', 'application/json'],
        ['Accept', 'application/json'],
        ['AIC-User-Agent', 'aic-bash (jpinano@gmail.com)']
    ]);

    let request = await fetch(`https://api.artic.edu/api/v1/artworks/${artInfo}?fields=title,artist_display`, {
        headers: headers
    });

    let response = await request.json();
    console.log(response.data)
    
    const image = response.data;
    let title = image.title;
    let artist = image.artist_display;

    function myPopUp() {
        var popup = document.getElementById("mypopup");
        document.getElementById("title").innerHTML = title;
        document.getElementById("artist").innerHTML = artist;
        popup.classList.toggle("show");
      }
      myPopUp();
}

/**
 * @param id
 * @param event
 */


const getInfo = (id, event) => {
    switch(id){
        case 'fig-1': { // the rock by peter blume
            event.stopPropagation();
            clickedEvent(0)
            break;
        }
        case 'fig-2': { // figure with meat by francis bacon
            event.stopPropagation();
            clickedEvent(1);
            break;
        }
        case 'fig-3': { // rocks at port-goulphar, belle-Île by claude monet
            event.stopPropagation();
            clickedEvent(2)
            break;
        }
        case 'fig-4': { // mountain brook by albert bierstadt
            event.stopPropagation();
            clickedEvent(3)
            break;
        }
        case 'fig-5': { // the song of the lark by jules adolphe breton
            event.stopPropagation();
            clickedEvent(4)
            break;
        }
        case 'fig-6': { // starry night and the astronauts by alma thomas
            event.stopPropagation();
            clickedEvent(5)
            break;
        }
    }
}

