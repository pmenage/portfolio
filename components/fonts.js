import FontFaceObserver from 'fontfaceobserver'

const Fonts = () => {
    const link = document.createElement('link')
    link.href = 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900'
    link.rel = 'stylesheet'
    document.head.appendChild(link)
    const roboto = new FontFaceObserver('Roboto')
    roboto.load().then(() => {
        document.documentElement.classList.add('roboto')
    })

    const link2 = document.createElement('link')
    link2.href = 'https://fonts.googleapis.com/css?family=Lato:200,300,400,700'
    link2.rel = 'stylesheet'
    document.head.appendChild(link2)
    const lato = new FontFaceObserver('Lato')
    lato.load().then(() => {
        document.documentElement.classList.add('lato')
    })

    const link3 = document.createElement('link')
    link3.href = 'https://fonts.googleapis.com/css?family=Roboto+Slab:300,500'
    link3.rel = 'stylesheet'
    document.head.appendChild(link3)
    const robotoSlab = new FontFaceObserver('Roboto Slab')
    robotoSlab.load().then(() => {
        document.documentElement.classList.add('robotoSlab')
    })
}

export default Fonts