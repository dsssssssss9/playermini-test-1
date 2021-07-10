input.onButtonPressed(Button.A, function () {
    dfplayermini.press(dfplayermini.playType.Play)
})
input.onButtonPressed(Button.B, function () {
    dfplayermini.press(dfplayermini.playType.PlayNext)
})
dfplayermini.connect(SerialPin.P1, SerialPin.P0)
dfplayermini.setVolume(15)
dfplayermini.setEQ(dfplayermini.EQ.Normal)
basic.showIcon(IconNames.Angry)
