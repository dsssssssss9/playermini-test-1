input.onButtonPressed(Button.A, function () {
    Rtraq = randint(1, 6)
    basic.showNumber(Rtraq)
    dfplayermini.playFile(Rtraq, dfplayermini.isRepeat.No)
})
let Rtraq = 0
dfplayermini.connect(SerialPin.P0, SerialPin.P1)
dfplayermini.setVolume(17)
basic.showIcon(IconNames.Yes)
