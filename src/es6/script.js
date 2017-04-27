const util = {

    random: function (min, max) {
        return min + Math.floor(Math.random() * (max - min + 1))
    },

    randomColor: function () {
        return ['#22CAB3', '#90CABE', '#A6EFE8', '#C0E9ED', '#C0E9ED', '#DBD4B7', '#D4B879', '#ECCEB2', '#F2ADA6', '#FF7784'][util.random(0, 9)]
    },

    randomSpeed: function () {
        return (Math.random() > 0.5 ? 1 : -1) * Math.random() * 2
    }

}


const  { Stage, Curve, motion } = curvejs

let lineCount = 5,
    canvas = document.getElementById('myCanvas'),
    random = util.random,
    randomColor = util.randomColor,
    randomSpeed = util.randomSpeed,
    stage = new Stage(canvas)

for (let i = 0; i < lineCount; i++) {
  stage.add(new Curve({
    points: [random(10, canvas.width - 10), random(10, canvas.height - 10), random(10, canvas.width - 10), random(10, canvas.height - 10), random(10, canvas.width - 10), random(10, canvas.height - 10), random(10, canvas.width - 10), random(10, canvas.height - 10)],
    color: randomColor(),
    data: [util.randomSpeed(), util.randomSpeed(), util.randomSpeed(), util.randomSpeed(), util.randomSpeed(), util.randomSpeed(), util.randomSpeed(), util.randomSpeed()],
    motion: function motion(points, data) {
        points.forEach(function (item, index) {
            points[index] += data[index]

            if (points[index] < 0) {
                points[index] = 0
                data[index] *= -1
            }
            if (index % 2 === 0) {
                if (points[index] > canvas.width) {
                    points[index] = canvas.width
                    data[index] *= -1
                }
            } else {
                if (points[index] > canvas.height) {
                    points[index] = canvas.height
                    data[index] *= -1
                }
            }
        })
    }
  }))
}