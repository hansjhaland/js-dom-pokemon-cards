// console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
// console.log(data[0]);

const ul = document.querySelector('.cards')

for (i=0; i < data.length; i++) {
    let li = document.createElement('li');
    li.className = "card";

    //Card title
    let h2 = document.createElement('h2');
    h2.className = "card--title";
    let nameLower = data[i].name;
    h2.textContent = nameLower.charAt(0).toUpperCase() + nameLower.slice(1);
    li.appendChild(h2)

    //Image
    let img = document.createElement('img');
    img.width = "256";
    img.className = "card--img";
    img.src = data[i].sprites.other["official-artwork"].front_default;
    li.appendChild(img);

    //Stats
    let ul2 = document.createElement('ul');
    ul2.className = "card--text";
    const pkmnStats = data[i].stats;
    for (j = 0; j < pkmnStats.length; j++ ) {
        console.log("j");
        let stat = pkmnStats[j].base_stat;
        let statName = pkmnStats[j].stat.name;

        let statLi = document.createElement('li');
        statLi.textContent = `${statName.toUpperCase()}: ${stat}`;
        statLi.style.listStyleType = 'none';
        ul2.appendChild(statLi);
    }
    li.appendChild(ul2);

    li.style.listStyleType = 'none';
    ul.appendChild(li);
}

document.body.appendChild(ul);