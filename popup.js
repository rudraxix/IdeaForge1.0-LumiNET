document.getElementById('readText').addEventListener('click', function(){
    chrome.tabs.query({
        active:true, currentWindow: true
    },
    function(tabs){
        chrome.tabs.executeScript(tabs[0].id, { code: 'document.body.style.backgroundcolor = "yellow"; '});
    });
});

document.getElementById("stop").addEventListener("click", function(){
    chrome.tabs.query({
        active:true, currentWindow: true
    }, function(tabs){
        chrome.tabs.executeScript(tabs[0].id, {code: 'document.body.style.backgroundColor = "blue"; '});
    });
});