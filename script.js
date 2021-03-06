window.onload = function() {
    document.getElementById("defaultOpen").click();
}

function openTab(evt, tabName) {
    let i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " active";
  }