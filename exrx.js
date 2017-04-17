ex = ["band walking",
      "bench dips",
      "bicycles",
      "bulgarian split squats",
      "calf raises",
      "clamshells",
      "crunches",
      "dead bug",
      "donkey kick",
      "fire hydrant",
      "four axis ankles",
      "glute isos",
      "hip hikes",
      "hot salsa",
      "hundreds",
      "inch worms",
      "jane fondas",
      "leg lifts",
      "inclined mountain climbers",
      "mountain climbers with paper under foot",
      "balance on one foot with eyes closed",
      "penguins",
      "plank progression",
      "planks",
      "push up side plank",
      "push ups",
      "reverse clamshells",
      "reverse crunch",
      "reverse planks",
      "russian twists",
      "side leg lifts",
      "side planks (hip lift)",
      "side v ups",
      "pistol squats",
      "single leg romanian dead lift",
      "single leg bridges",
      "squats",
      "supermans",
      "t formation leg lifts",
      "toe pulls",
      "v ups",
      "walking lunges",
      "wall sits",
      "windmills"]


function makeUL(array) {
    // Create the list element:
    var list = document.createElement('ul');

    for(var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}

document.getElementById('exlist').innerHTML = (ex.sort(() => .5 - Math.random())).slice(0,10);
