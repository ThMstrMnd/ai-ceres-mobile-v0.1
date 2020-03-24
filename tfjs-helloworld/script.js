(async () => {
    const img = document.getElementById('img')
    const model = await mobilenet.load()
    const predictions = await model.classify(img)

    console.log (predictions)
})()