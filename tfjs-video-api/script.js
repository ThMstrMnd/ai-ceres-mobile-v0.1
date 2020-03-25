(async () => {
    const model = await mobilenet.load()
    const status = document.getElementById('status')
    const video = document.getElementById('video')
    const canvas = document.getElementById('canvas')
    const context = canvas.getContext('2d')

    const stream = await navigator.mediaDevices.getUserMedia ({
       audio: false,
       video: {
            facingMode: 'environment'
       }
    })

    video.srcObject = stream

    predict()

    async function predict() {
        context.drawImage(video, 0, 0, 500, 500)
        const predictions = await model.classify(canvas)
        status.innerHTML = `Prediction: ${predictions[0].className} / ${predictions[0].probability}`

        requestAnimationFrame(predict)
    }          
})()
