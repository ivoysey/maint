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
      "mountain climbers [incline,paper under foot]",
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
      "side planks [hip lift]",
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

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

names = (ex.sort(() => .5 - Math.random())).slice(0,getRandomInt(6,10));
nameList = "<ol>";
for (var i = 0, name; name = names[i]; i++) {
  nameList += "<li>" + name + "</li>";
}
nameList += "</ol>"
document.getElementById('exlist').innerHTML = nameList;
