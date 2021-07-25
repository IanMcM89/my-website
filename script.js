function homeButton () {
    const divContent = document.getElementsByClassName("content");
        
        const h2 = document.createElement('h2');
        h2.textContent = "Ian";
        const h3 = document.createElement('h3');
        h3.textContent = "Programming Trainee";
        const p1 = document.createElement('p');
        p1.textContent = "I'm currently enrolled in Flatiron School's Software-Engineering flex program, learning how to code from their brightest minds.";
        const p2 = document.createElement('p');
        p2.textContent = "To see more about me, click the icons below.";
    
        divContent[0].appendChild(h2);
        divContent[0].appendChild(h3);
        divContent[0].appendChild(p1);
        divContent[0].appendChild(p2);
}